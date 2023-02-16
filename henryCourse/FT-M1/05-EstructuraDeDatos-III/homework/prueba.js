class BinarySearchTree {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };
    insert(value) {
        if (value > this.value) {
            if (this.right !== null) {
                this.rigth.insert(value);
            } else {
                this.rigth = new BinarySearchTree();
            }
        } else if (value < this.value) {
            if (this.left !== null) {
                this.left.insert(value);
            } else {
                this.left = new BinarySearchTree();
            }
        }
    };
    contains(value) {
        if (value === this.value) {
            return true;
        }
        if (value > this.value) { // if principal que me dice si el valor es mayor, o menos que el del contructor
            if (this.rigth === null) { // if para recorrer a la derecha 
                return false;
            } else {
                return this.rigth.contains(value);
            }
        } else {
            if (value > this.left) { // => para recorrer a la izquierda
                if (this.left === null) {
                    return false;
                } else {
                    return this.left.contains(value);
                }
            }
        };
    };
    depthFirstForEach() {};
    breadthFirstForEach() {};
    size() {};

};

const by = new BinarySearchTree(70);
by.insert(30);
by.insert(50);
by.insert(35);