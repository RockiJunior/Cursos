// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso 
// particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    add(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this._length++;
            return;
        } else {

            let current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = node;
            this._length++;
            return;
        }

    };

    remove() {
        let current = this.head;

        if (!this.head) {
            return null;
        }

        if (this.head.next === null) {
            let aux = this.head.value;
            this.head = null;
            this._length--;
            return aux;

        } else {

            while (current.next.next) {
                current = current.next; // Me paro en el anteultimo
            }
            let aux = current.next.value; // Me guardo el ultimo valor
            current.next = null; // donde estoy parado desengancho el vagon.
            return aux;

        }

    };

    search(item) {
        let current = this.head;

        if (!this.head) {
            return null
        }

        while (current) {

            if (current.value === item) {
                return current.value
            } else if (typeof item === 'function') {
                if (item(current.value)) {
                    return current.value;
                }
            }

            current = current.next;
        }
        return null;
    };
}










// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

class HashTable {
    constructor() {
        this.numBuckets = 35;
        this.buckets = [];
    };

    hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum = sum + key.charCodeAt(i);
        }
        return sum % this.numBuckets;
    };

    get(key) {
        let i = this.hash(key);
        return this.buckets[i][key];
    };

    set(key, value) {
        if (typeof key !== 'string') throw TypeError('Keys must be strings');
        let i = this.hash(key);
        if (this.buckets[i] === undefined) {
            this.buckets[i] = {}
        }
        this.buckets[i][key] = value;
    };

    hasKey(key) {
        let i = this.hash(key);
        return this.buckets[i].hasOwnProperty(key);
    };
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Node,
    LinkedList,
    HashTable
};