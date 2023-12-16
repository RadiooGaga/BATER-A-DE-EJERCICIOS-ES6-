/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(fantasticFour, index1, index3) {
  if (index1 < 0 || index1 >= fantasticFour.length || index3 < 0 || index3 >= fantasticFour.length) {
    return fantasticFour;
  }

  const cambio = fantasticFour[index1];
  fantasticFour[index1] = fantasticFour[index3];
  fantasticFour[index3] = cambio;

  return fantasticFour;
}

const resultado = swap(fantasticFour, 0, 3);

console.log(resultado);