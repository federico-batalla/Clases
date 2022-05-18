/*Crear un programa con una funcion que reciba
 por parametro su nombre y apellido y lo imprima
  por consola.

function imprimirNombre(nombre: string, apellido: string) {
  console.log(nombre, apellido);
}

let nombre: string = prompt("ingrese Nombre");
let apellido: string = prompt("ingrese apellido");
imprimirNombre(nombre, apellido);
*/

/*crear una funcion que reciba un valor numerico y
 devuelva true si es par o false si es impar (con retorno) */

function esPar(valor: number): boolean {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let valor: number = Number(prompt("intoduce un valor"));
if (esPar(valor)) {
  console.log("es par");
} else {
  console.log("es impar");
}
