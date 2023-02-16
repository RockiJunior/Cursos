// //instancia de Nodo
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// //instancia de Lista
// class LinkedList {
//     constructor() {
//         this._length = 0;
//         this.head = null;
//     }

//     addNode(valor) {
//         const node = new Node(valor);
//         if (!this.head) {
//             this.head = node;
//             this._length++;
//             return;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = node;
//             this._length++;
//             return;
//         }
//     };

//     remove() {
//         if (!this.head) {
//             return null
//         }
//         if (this.head.next === null) {
//             let auxiliar = this.head.value;
//             this.head = null;
//             this._length--;
//             return auxiliar;
//         }
//         let current = this.head;
//     };

//     search(loquebusco) {
//         if (!this.head) {
//             return null
//         }

//         let current = this.head;

//         while (current) {
//             current = current.next;
//             if (typeof(loquebusco) === 'function') {
//                 if (loquebusco(current.value)) {
//                     return current.value;
//                 }
//             } else if (current.value === loquebusco) {
//                 return current.value;
//             }
//         }

//         return null;
//     }


//     getAll() {
//         let current = this.head;
//         if (!current) {
//             console.log('La Lista esta vacia');
//             return;
//         }
//         while (current) {
//             console.log(current.value);
//             current = current.next
//         }
//         return this._length;
//     };


// };






// const list = new LinkedList();
// list.addNode('One');
// list.addNode('Two');
// list.remove();
// list.getAll();


// HASHTABLE!!


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


const ht1 = new HashTable();
console.log(ht1);

// console.log(ht1.hash('foo'));
// console.log(ht1.hash('this is a key'));
// console.log(ht1.hash('what about this one'));

console.log(ht1.set('key1'));
console.log(ht1.set('key2'));
console.log(ht1.set('this is a very different string'));
console.log(ht1.buckets);