let greet = require("./greet1");
// let greet2 = require("./greet2").greet;
let greet2a = require("./greet2");

greet();
// greet2();
greet2a.greet();
// greet1 Se ejecuta la función greet del modulo greet1 en

// Se ejecuta igual que la anterior solo que en esta ocasio es
/* Solo que esta ocupa acceder a la variable exportada por así decirlo */

/* Como en la explicación dice la primera forma comentada sería la mas utilizada ya que podría tener muchas propiedades integradas o attached */

const greet3 = require("./greet3");
console.log(greet3);
/* 
Greetr {
  greeting: 'Hello from the function constructor',
  greet: [Function (anonymous)]
}
Hello from the function constructor 
*/
// esto es lo que regresa greet el objeto constructor
greet3.greet();
// Esta linea ejecuta la función de Greetr

greet3.greeting = "Hellow from the App";

let greet3b = require("./greet3");
greet3b.greet();
// efectivamente paso la primera opción que pense, que era
// que el modulo se iba modificar y aunque se cree otra instancia esta también serguira con el valor cambiado

const Greet4 = require("./greet4");
let myGreet = new Greet4();
myGreet.greet();

// Llama a la función nuevamente pero la nueva clase constructora se llama mediante el parentesis?
// Sinceramente no se como se llama esa manera de invicar la instancia

const greet5 = require("./greet5");
greet5.greet();

/* 
 El revealing pattern es realmente utíl para proteger el codigo como bien lo dice la explicación
 igual de cierta forma puede llegar a ser confuso el uso de las funciones si se pierde el hilo
 pero si se pone atención todo sale muy bien
*/
