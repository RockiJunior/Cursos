// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
    // el if en este caso, es el caso base (osea, donde quiero que yo corte 
    //y generalmente se escribe al comienzo del funcion).
    if (n === 0) {
        return 1
    }
    return n * nFactorial(n - 1); // i-- 
}

function nFibonacci(n) {
    // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
    // Retorna el enésimo numero de la serie
    // nFibonacci(0) // 0  // el elemento 0 es cero
    // nFibonacci(1) // 1 // el elemento 1 es 1
    // nFibonacci(6) // 1 // el elemento 6 es 8
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:

// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO(first in first out).
// y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.(kiu/qiu)

function Queue() {
    this.fila = []; // se instancia un array vacio.

    Queue.prototype.enqueue = function(x) {
        return this.fila.unshift(x);
    }
    Queue.prototype.dequeue = function() {
        if (this.fila.length === 0) {
            return undefined
        }
        return this.fila.pop()
    }
    Queue.prototype.size = function() {
        return this.fila.length
    }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Queue,
    nFactorial,
    nFibonacci
};