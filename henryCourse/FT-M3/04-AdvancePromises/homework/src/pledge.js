'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError(`executor function`);
    this._state = 'pending';
    this._handlerGroups = [];
    executor(
        (data) => this._internalResolve(data),
        (data) => this._internalReject(data));


}

$Promise.prototype._internalResolve = function(data) {
    if (this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = data;
        this._callHandlers();
    }
}

$Promise.prototype._internalReject = function(reason) {
    if (this._state === 'pending') {
        this._state = 'rejected';
        this._value = reason;
        this._callHandlers();
    }
}

$Promise.prototype.then = function(successCb, errorCb) {
    if (typeof successCb !== 'function') successCb = false;
    if (typeof errorCb !== 'function') errorCb = false;
    const downstreamPromise = new $Promise(function() {});
    this._handlerGroups.push({ successCb, errorCb, downstreamPromise });
    if (this._state !== 'pending') {
        this._callHandlers();
    }
    return downstreamPromise;
}

$Promise.prototype.catch = function(errorCb) {
    return this.then(null, errorCb);
}

$Promise.prototype._callHandlers = function() {
    while (this._handlerGroups.length > 0) {
        let actual = this._handlerGroups.shift();
        if (this._state === 'fulfilled') {
            if (!actual.successCb) {
                //fullfilled bubbled
                actual.downstreamPromise._internalResolve(this._value);
            } else {

                // promise for result
                try {
                    const result = actual.successCb(this._value)
                    if (result instanceof $Promise) {
                        //result = promise Z;
                        result.then(function(value) {
                            // value es el valor al que se resuelve la promise Z
                            // actual.downstreamPromise = promise B
                            actual.downstreamPromise._internalResolve(value);
                        }, function(err) {
                            // error, es el valor del rechazo de la promise Z
                            actual.downstreamPromise._internalReject(err);
                        })
                    } else {
                        actual.downstreamPromise._internalResolve(result);
                        // actual.successCb(this._value);
                    }
                } catch (err) {
                    // error caught
                    actual.downstreamPromise._internalReject(err);
                }

            }
        } else {
            //rejection bubbled
            if (!actual.errorCb) {
                actual.downstreamPromise._internalReject(this._value)
            } else {
                try {
                    // actual.errorCb(this._value||
                    // promise for result...
                    const result = actual.errorCb(this._value);
                    if (result instanceof $Promise) {
                        result.then(function(value) {
                            actual.downstreamPromise._internalResolve(value);
                        }, function(err) {
                            actual.downstreamPromise._internalReject(err);
                        })
                    } else {
                        actual.downstreamPromise._internalResolve(result);
                    }
                } catch (err) {
                    actual.downstreamPromise._internalReject(err)
                }
            }
        }
    }
}


module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/