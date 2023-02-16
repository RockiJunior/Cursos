class Node {
    constructor(next, value) {
        this.value = value
        this.next = next
    }

}

class LinkedList {
    constructor() {
        const nodo = new Node();
        this._length = 0;
        this.head = nodo {
            this.value = value;
            this.next = nodo {
                this.value = value;
                this.next = nodo {
                    this.value = value;
                    this.next = nodo {
                            this.value = value;
                            this.next = null; // --------> .next = null corta la creacion de la list, y sabe que 
                        } // --------> es el ultimo por su valor null.
                }
            }
        }
    };
};


//Formato en Limpio...
// this.head = {this.value = value,
//              this.next = {this.value = value;
//                  this.next = {this.value = value;
//                               this.next = {this.value = value;
//                                            this.next = null;}}}}