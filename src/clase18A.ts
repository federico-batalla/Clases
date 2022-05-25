//----------------funciones---------------------
/*recibe un arreglo de long 6 e ingresa los 6 numeros,  */
function ingresarNumeros(arreglo: number[]) {
  for (let indice = 0; indice < arreglo.length; indice++) {
    arreglo[indice] = Number(prompt("ingrese los numeros"));
  }
}
//----------------------------------------------
/*recibe tres arreglos de long 6,suma los dos primeros y los 
guarda en el tercero*/
function sumarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  resultados: number[]
): void {
  for (let indice = 0; indice < arreglo1.length; indice++) {
    resultados[indice] = arreglo1[indice] + arreglo2[indice];
  }
}

//----------------------------------------------
/*recibe 3 arreglos , muestra la suma de los dos primeros  y con el tercero el 
resultado de cada posicion */
/*function mostrarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  resultados: number[]
) {
  for (let indice = 0; indice < arreglo1.length; indice++) {
    console.log(
      arreglo1[indice],
      "+",
      arreglo2[indice],
      "=",
      resultados[indice]
    );
  }
}
*/
//---------------programa principal-------------
let numeros1: number[] = new Array(6);
let numeros2: number[] = new Array(6);
let resultados: number[] = new Array(6);

ingresarNumeros(numeros1);
ingresarNumeros(numeros2);
sumarArreglos(numeros1, numeros2, resultados);
mostrarArreglos(numeros1, numeros2, resultados);
