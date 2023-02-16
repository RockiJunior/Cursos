
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
// variable global no declarada; x => 1
var a = 5;
// a => 5 
var b = 10;
// b => 1
var c = function(a, b, c) {
  var x = 10; //pertenece a este scope
  //  x => 10; 
  console.log(x); 
  //Output => 10
  console.log(a);
  // en la linea 46 se entrega el valor 8, (saaaaalvo, el caso que no se encuentre)
  var f = function(a, b, c) {
    b = a; 
    // b va a tomar el valor de a
    console.log(b); // Output => a; 
    b = c; // b a este punto es el valor de a b c (c de la linea 21). 
    var x = 5; //  
   }
  f(a,b,c);
  console.log(b); // Cual b va a tomar aqui? 
  //toma el valor que uno le asigna en el argumento de la funcion ejecutada afuera (teoricamente), 
  //aunque si le pasas b va a tomar el valor global.
}
c(8,9,10); // valores pasados a la funcion...8 , 9 , 10 
console.log(b); // como esta afuera, toma los globales...
console.log(x); // aca tambien. XD


```

```javascript
console.log(bar); // Va a lanzar undefined (no esta definido aun);
console.log(baz); // lanza un error. 
foo(); // si no existe el error de arriba, la funcion foo se ejecuta igual.
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
//=> imprime "Franco" porque el if no cambia nada. 
// solamente el var de abajo, reasigna el valor de la variable instructor. el
```

```javascript
var instructor = "Tony";
console.log(instructor); // => Imprime "Tony";
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // => imprime "Franco";
   }
})();
console.log(instructor); //vuelve a imprimir "Tony";
```
```javascript
var instructor = "Tony"; // instructor asignado a var que es global o siempre responde a su variable padre.
let pm = "Franco"; // pm asignado a let que es una variable con scope local. y de corto alcanze.

if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // => "The Flash"
    console.log(pm); // => "Reverse Flash"
}
console.log(instructor); // => "The Flash"
console.log(pm); // => "Franco"
//Descripción. let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"     // => 2
"2" * "3"   // => 6
4 + 5 + "px"// => "9px" => Cuando es concatenar..siempre suma el valor, y luego lo concatena, porque el string esta a la derecha.
"$" + 4 + 5 // => "$45" => Cuando el caso para concatenar, comienza con string, se toman todos los valores a la derecha
            // como un Character
"4" - 2     // => 2
"4px" - 2   // => NaN => En este caso el numero no se resta de la izquierda, ya que string deja de ser number (COSAS CHULAS 
            // DE JAVASCRIPT / O no tan chulas). No se puede restar de un string, un numero. por eso Not a Number(NaN)
7 / 0       // => Infinito
{}[0]       // => [0] => []bracket se usa para ingresar a la propiedad de los objetos, en este caso es del objeto '{}' los objetos en javascript nunca aparecen en consola. al menos que se lo requiera.
            // => devuelve 0 porque busca un valor de cero en algun lugar. Si hubiese una propiedad con 0 dentro del objeto y /////// retorna 'Hola'..va a retornar eso mismo.
parseInt("09") // => 9
5 && 2      // => 2 => retorna el valor de la derecha. ES RARISIMO MAN!! si lo de la izquierda es negativo, devuelve lo de la izquierda, al menos que sea true, y en ese caso devuelve true.   
2 && 5      // => 5
5 || 0      // 5 => retorna el primer valor
0 || 5      // => retorna el 0;
[3]+[3]-[10]// => 23 => concatena los primeros dos numeros por el signo mas, y luego le resta el contenido del array a la derecha
3>2>1 // true // => me gustaria saber porque pasa esto...
      //retorna false porque 3 si es mayor a 2. pero el true que retorna, no es mayor a uno, es IGUAL.
[] == ![] // => retorna true, al menos que contenga el operador ===, en dicho caso retornaria false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // => undefined 
   console.log(foo()); // => returna un 2;

   var a = 1;
   function foo() {
      return 2;
   }
}


test(); //  => imprime undefined. 
// AAAAAAAAAAUNQUE como es una expression statement antes de imprimir el foo, primero ejecuta lo que esta adentro. porque es una
// statement
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//la funcion no accede al if porque el parametro que se le pasa es falso. 
               // pero tampoco devuelve el snack, ni tampoco lo imprime
               // return undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //  => 'Aurelio De Rosa'

var test = obj.prop.getFullname; 

console.log(test()); // => retorna 'Juan Perez por el contexto global'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//primero imprime 1
//segundo imprime 4
//luego imprime 3
//y por ultimo imprime 2
```
