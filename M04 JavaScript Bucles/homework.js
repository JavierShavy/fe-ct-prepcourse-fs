/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   var res;
   if (x > y){
      res = x;
   }
   else if(x < y){
      res = y;
   }
   else{
      res = x;
   }
   return res;
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   var res;
   if (edad >= 18){
      res = "Allowed";
   }
   else{
      res = "Not allowed";
   }
   return res;
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   var res;
   if (status === 1){
      res = "Online";
   }
   else if(status === 2){
      res = "Away";
   }
   else{
      res = "Offline";
   }
   return res;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   var res;
   if (idioma === "aleman"){
      res = "Guten Tag!";
   }
   else if(idioma === "mandarin"){
      res = "Ni Hao!";
   }
   else if(idioma === "ingles"){
      res = "Hello!"
   }
   else{
      res = "Hola!";
   }
   return res;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   var res;
   switch (color){
      case "blue":
         res = "This is blue";
         break;
      case "red":
         res = "This is red";
         break;
      case "green":
         res = "This is green";
         break;
      case "orange":
         res = "This is orange";
         break;
      default:
         res = "Color not found";
   }
   return res;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num === 10 || num === 5){
      return true;
   }
   else{
      return false;
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num > 20 && num < 50){
      return true;
   }
   else{
      return false;
   }
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 1 === 0){ //Si el residuo entre 1 es 0 quiere decir que el numero es entero
      return true;
   }
   else {
      return false;
   }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   var res;
   if ((num % 3 === 0) && (num % 5 === 0)){
      res = "fizzbuzz";
   }
   else if(num % 3 === 0){
      res = "fizz";
   }
   else if(num % 5 === 0){
      res = "buzz";
   }
   else{
      res = false;
   }
   return res;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   var res;
   if (num1 < 0 || num2 < 0 || num3 < 0){
      return "Hay negativos";
   }
   if ((num1 > num2 && num1 > num3) && num1 > 0){
      res = "Numero 1 es mayor y positivo";
   }
   else if (num3 > num2 && num3 > num1){
      num3 = num3 + 1;
      res = num3;
   }
   else if (num1 === 0 && num2 === 0 && num3 === 0){
      res = "Error";
   }
   else{
      res = false;
   }
   return res;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if (num <=1 || num === 4){
      return false;
   }
   var i;
   for (i = 2; i < (num / 2); i++){
      if (num % i === 0){
         return false;
      }
   }
   return true;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor){
      return "Soy verdadero";
   }
   else{
      return "Soy falso";
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   var digitos = 0;
   while (num >= 1){
      digitos++;
      num = num / 10;
   }
   if (digitos == 3){
      return true;
   }
   else{
      return false;
   }
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var contador = 0;
   do {
      num = num + 5;
      contador++;
   }
   while (contador < 8);
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
