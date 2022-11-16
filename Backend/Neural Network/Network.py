# Neural Net Class (Contains all variable and functions for the neural net)
class Neural_Network:
    def __init__(self, training_set, test_set, num_layers, num_units, learning_rate, iterations):
        self.num_layers = num_layers
        self.num_units = num_units
        self.nn = []
        self.outputs = []
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
                print("Forward pass output:", str.format("{:.4f}", round(self.nn[-1][0].output, 4)))
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
        nn_weights = []
        for lay in self.nn:
            lay_weights = []
            for node in lay:
                lay_weights.append(node.weights)
            nn_weights.append(lay_weights)
        print(nn_weights)

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

