// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
class BinarySearchTree {

    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };

    insert(value) {

        if (value > this.value) {
            if (this.right !== null) {
                this.right.insert(value);
            } else {
                this.right = new BinarySearchTree(value);
            }
        }

        if (value < this.value) {
            if (this.left !== null) {
                this.left.insert(value);
            } else {
                this.left = new BinarySearchTree(value);
            }
        }
    };
    size() {
        if (!this.right && !this.left) {
            return 1;
        }
        if (!this.left) {
            return 1 + this.right.size();
        }
        if (!this.right) {
            return 1 + this.left.size();
        } else { return 1 + this.left.size() + this.right.size(); }
    };
    contains(value) { //retorna booleano si existe o no.
        if (this.value === value) {
            return true; // return 1 => "caso de corte"
        }
        // el this.value cuando se invoca...hace referencia a donde estoy parado (current)
        // current 
        //    |
        if (value > this.value) { // IF principal que me dice si el valor es mayor, o menor que el del constructor.
            if (this.right === null) { // if para recorrer a la derecha 
                return false;
            } else {
                return this.right.contains(value); //si el valor no existe, significa que ejecutamos de nuevo la funcion
            } // y aprovechamos que estamos parados en el otro nodo, para pasar al siguiente
        }

        if (value < this.value) {
            // => para recorrer a la izquierda
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        };
    };



    //los nombres "pre order", indica en ingles donde se encuentra el root, y siempre es de 
    //izquierda seguido de derecha.

    depthFirstForEach(cb, order) { // llamo al callback, y al argumento
        //in-order(Izq-Root-Der)...
        if (order === 'pre-order') { // comparo el argumento con el string
            // pre order -root-izq-der-

            cb(this.value); // ejecuta la funcion .push que esta en el test

            if (this.left !== null) this.left.depthFirstForEach(cb, order);

            if (this.right !== null) this.right.depthFirstForEach(cb, order);
        } else if (order === 'post-order') {
            // post order izq-der-root-

            if (this.left !== null) this.left.depthFirstForEach(cb, order);

            if (this.right !== null) this.right.depthFirstForEach(cb, order);

            cb(this.value);
        } else {
            // izq-root-der-

            if (this.left !== null) this.left.depthFirstForEach(cb, order);

            cb(this.value);

            if (this.right !== null) this.right.depthFirstForEach(cb, order);
        }

    };
    breadthFirstForEach(cb, listaDeEspera = []) {
        cb(this.value); //caso base, es el primer nodo y se ingresa llamando a la funcion con los valores de lista de espera (que vienen del test)
        //[20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]
        if (this.left) {
            listaDeEspera.push(this.left);
        }
        if (this.right) {
            listaDeEspera.push(this.right)
        }
        const nodo = listaDeEspera.shift();
        //[20, 15] <= 15
        if (nodo) nodo.breadthFirstForEach(cb, listaDeEspera);
    };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

//-----> 



module.exports = {
    BinarySearchTree
};