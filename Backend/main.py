import numpy as np
import pandas as pd
import math
import sys
import json

# Takes the data from a file and returns it as array of tuples
def build_data_set_json(file_location):
    data = pd.read_json(file_location)
    data = data.drop(columns={"id", "product_name", "description", "currency", "thumb"})

    cut = int(len(data) * .8)
    training_data = data.iloc[:cut]
    testing_data = data.iloc[cut:len(data)]

    return training_data.values.tolist(), testing_data.values.tolist()

# Add New data to File
def add_data_to_json(file_location, id, product_name, description, price, currency, thumb, Department, Rating, Categories, Brand, Class):
    old_data = pd.read_json(file_location)

    data = pd.DataFrame(
        [[id, product_name, description, price, currency, thumb, Department, Rating, Categories, Brand, Class]],
        columns=["id", "product_name", "description", "price", "currency", "thumb", "Department", "Rating", "Categories", "Brand", "Class"],
    )

    data = pd.concat([old_data, data])

    result = data.to_json(orient="records")
    parsed = json.loads(result)
    file = json.dumps(parsed, indent=4)

    with open(file_location, "w") as outfile:
        outfile.write(file)

# Update Class data to File
def update_data_in_json(file_location, index, class_val=1):

    data = pd.read_json(file_location)
    if index == 0:
        index = 1
    data._set_value(index-1, "Class", class_val)

    result = data.to_json(orient="records")
    parsed = json.loads(result)
    file = json.dumps(parsed, indent=4)

    with open(file_location, "w") as outfile:
        outfile.write(file)


# Node with all the characteristics needed for forward and back propigation
class Node:
    def __init__(self):
        self.weights = []
        self.output = 0
        self.output_nodes = []
        self.inputs = []
        self.weighted_sum = 0
        self.delta_k = 0
        self.delta_j = 0


# Vector addition
def vector_add(vector1, vector2):
    return [x + y for x, y in zip(vector1, vector2)]


# Scalar multiplication on a Vector
def scalar_mult(scalar, vector):
    return [scalar * x for x in vector]


# Dot product with bias
def dot_prod_bias(vector1, vector2):
    return sum([x * y for x, y in zip(vector1, vector2)]) + 1


# Sigmoid Function Derivative
def sig_deriv(output):
    return output * (1 - output)


# Sigmod is the activation function
def sigmoid(x):
    return 1 / (1 + math.pow(math.e, -x))


# Vector Multiplication
def vector_mult(v, v2):
    return [x * y for x, y in zip(v, v2)]


# Fill a Vector with a curtain value
def vector_fill(num, value):
    new_vec = []
    for i in range(num):
        new_vec.append(value)
    return new_vec


# Dot product
def dot_product(vector1, vector2):
    return sum([x * y for x, y in zip(vector1, vector2)])


# Neural Net Class (Contains all variable and functions for the neural net)
class Neural_Network:
    def __init__(self, training_set, test_set, num_layers, num_units, learning_rate, iterations, weights=[]):
        self.num_layers = num_layers
        self.num_units = num_units
        self.nn = []
        self.outputs = []
        self.weights = weights
        self.training_set = training_set
        self.test_set = test_set
        self.build_network()
        self.learning_rate = learning_rate
        self.square_error_sum = 0
        self.train_network(iterations, learning_rate)
        self.output_h = 0

    # Creates the neural net by instantiating nodes and adding weighted connections
    def build_network(self):
        for n in range(self.num_layers):
            self.nn.append([Node() for x in range(self.num_units)])
        self.nn.append([Node()])
        for l in self.nn[0]:
            for val in self.training_set[0]:
                l.weights.append(0)
        for layer in self.nn[1:]:
            for node in layer:
                for i in range(self.num_units + 1):
                    node.weights.append(0)

    # Trains the network by iterating though the training data and doing foward and back prop
    # for each tuple
    def train_network(self, iterations, learning_rate):
        x = 1
        while x < iterations:
            for example in self.training_set:
                if x > iterations:
                    break
                sum_of_square = 0
                self.forward_pass(example)
                self.back_propagation(example, learning_rate)
                print()
                print("At iteration " + str(x) + ":")
                print("Forward pass output:", str.format("{:.4f}", round(self.nn[-1][0].output, 4)), "\nClassified as:", round(self.nn[-1][0].output))
                print("Item Values:", example)
                for example in self.training_set:
                    sum_of_square += self.forward_pass(example)
                print("Average squared error on training set (" + str(len(self.training_set)) + " instances):",
                      str.format("{:.4f}", round(sum_of_square / len(self.training_set), 4)))
                sum_of_square = 0
                for example in self.test_set:
                    sum_of_square += self.forward_pass(example)
                print("Average squared error on test set (" + str(len(self.test_set)) + " instances):",
                      str.format("{:.4f}", round(sum_of_square / len(self.test_set), 4)))
                x += 1
            self.square_error_sum = 0
        nn_weights = self.weights
        for lay in self.nn:
            lay_weights = []
            for node in lay:
                lay_weights.append(node.weights)
            nn_weights.append(lay_weights)

        self.weights = nn_weights

    # Takes a data tuple an sends it though the neural net
    def forward_pass(self, example):
        li = example[:-1]
        li.insert(0, 1)
        next_inputs = []
        for node in self.nn[0]:
            node.inputs = li
            node.output = sigmoid(dot_product(li, node.weights))
            next_inputs.append(node.output)
        for layer in self.nn[1:]:
            li = next_inputs
            li.insert(0, 1)
            next_inputs = []
            for node in layer:
                node.inputs = li
                node.output = sigmoid(dot_product(li, node.weights))
                next_inputs.append(node.output)
        return math.pow((example[-1] - self.nn[-1][0].output), 2)

    # Goes back thought the neural net and adjust the weight according to the error in the forward prop
    def back_propagation(self, example, learning_rate):
        self.calculate_delta_k(example, learning_rate)

    # Delta K is the error function it is used to update the weigths
    def calculate_delta_k(self, example, learning_rate):
        for layer in self.nn:
            for node in layer:
                node.delta_k = 0
        i = -1
        for node in self.nn[i]:
            node.delta_j = sig_deriv(node.output) * (example[-1] - node.output)
            if ((i - 1) * -1) <= len(self.nn):
                for node1, weight in zip(self.nn[i - 1], node.weights[1:]):
                    node1.delta_k += weight * node.delta_j
        i = i - 1
        while (i * -1) < len(self.nn) + 1:
            for node in self.nn[i]:
                node.delta_j = sig_deriv(node.output) * node.delta_k
                if ((i - 1) * -1) <= len(self.nn):
                    for node1, weight in zip(self.nn[i - 1], node.weights[1:]):
                        node1.delta_k += weight * node.delta_j
            i = i - 1

        for layer in self.nn:
            for node in layer:
                node.weights = [weight + (learning_rate * node.delta_j * inn) for weight, inn in
                                zip(node.weights, node.inputs)]


# Runs the neural net
# The ouptut to the console will show # iterations selected
# The iterations where kept to just one tuple in the training set for debugging (this can be changed later)
# The error on traing and test set should drop on averge however up ticks at point are expected as the neural net is
# not fully optimized
# System Arguments:
#   1) training set file location (.dat)
#   2) testing set file location (.dat)
#   3) Num of layers (0-2)
#   4) Num of nodes in hidden layers
#   5) Learning rate (0-1)
#   6) Iterations
if __name__ == '__main__':
    json_file = "Product_data.json"

    training_set, test_set = build_data_set_json(json_file)

    # Trains and test the neural network
    nn = Neural_Network(training_set, test_set, 2, 8, .9, 1000)



