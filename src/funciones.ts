function dibujarLinea() {
  let linea: string = "-";
  for (let index = 0; index < 40; index++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));
let opcion: number = Number(
  prompt(
    "ingrese 1 sumar, ingrese 2 restar , cualquier tecla termina el programa"
  )
);
let resultado: number = 0;

if (opcion == 1 || opcion == 2) {
  if (opcion === 1) {
    resultado = numero1 + numero2;
  } else {
    resultado = numero1 - numero2;
  }
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
}
