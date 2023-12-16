/* 3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43, 55]

//copia
const pointsListCopy = [...pointsList]; 

console.log(pointsListCopy)//[32, 54, 21, 64, 75, 43, 55]
console.log(pointsList === pointsListCopy);//false




/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

//copia
const toyCopy = {...toy}; 
console.log(toyCopy)//{name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}
console.log(toy === toyCopy); false






/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointList = [32, 54, 21, 64, 75, 43];
const pointList2 = [54,87,99,65,32];

const bothPointList = [...pointList, ...pointList2];
console.log(bothPointList);//[32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]






/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToy1 = {...toy1, ...toy1Update};
console.log(newToy1);//{name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor', lights: 'rgb', power: Array(2)}




/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operators.*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const lessColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colors); //['rojo', 'azul', 'amarillo', 'verde', 'naranja']
console.log(lessColors);//['rojo', 'azul', 'verde', 'naranja']


