//----------------------------funciones----------------
function incializarArreglo(arreglo: number[]): void {
  for (let indice = 0; indice < arreglo.length; indice++) {
    arreglo[indice] = Number(prompt("ingrese numero "));
  }
}

//---------------------------------------------
function mostrarArreglo(arreglo: number[]): void {
  let numerosPositivos: number = 0;
  let numerosNegativos: number = 0;
  let numerosCeros: number = 0;
  for (let indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] < 0) {
      numerosNegativos++;
    } else {
      if (arreglo[indice] > 0) {
        numerosPositivos++;
      } else {
        numerosCeros++;
      }
    }
  }
  console.log(
    arreglo,
    "numeros postivos",
    numerosPositivos,
    "numeros negativos",
    numerosNegativos,
    "numeros igual a cero",
    numerosCeros
  );
}
//-------------------programa principal-----------------------
let longArreglo: number = Number(prompt("ingrese el tamaño del arreglo"));
let numeros: number[] = new Array(longArreglo);

incializarArreglo(numeros);
mostrarArreglo(numeros);
