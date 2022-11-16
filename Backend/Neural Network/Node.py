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
