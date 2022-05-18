// ejercicio calcular area
/*function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

for (let indice = 1; indice <= 7; indice++) {
  console.log("(", indice, "),(", indice * 2, ")");
  console.log(calcularAreaTriangulo(indice, indice * 2));
}*/

//ejercicio calcular potencia
/*function calcularPotencia(base: number, exponente: number): number {
  let acumulador: number = 1;
  if (exponente === 0) {
    return 1;
  }
  for (let indice = 1; indice <= exponente; indice++) {
    acumulador = base * acumulador;
  }
  return acumulador;
}

console.log(calcularPotencia(2, 0));*/

//funcion es multiplo

function esMultiplo(dividendo: number, divisor: number): boolean {
  let resto: number = dividendo % divisor;
  if (resto === 0) {
    return true;
  }
  return false;
}

if (esMultiplo(5, 2)) {
  console.log("es multiplo");
} else {
  console.log("no es multiplo");
}
