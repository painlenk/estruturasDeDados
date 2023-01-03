const avgtemp = [];
avgtemp[0] = 31.9;
avgtemp[1] = 27.8;
avgtemp[2] = 35.1;
avgtemp[3] = 19.9;
avgtemp[4] = 22.9;

//fibonacci

const fibonacci = [];

for (let i = 3; i < 40; i++) {
  if (fibonacci.length === 0) {
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    fibonacci[2] = 2;
  }

  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  console.log("fibonacci ", fibonacci[i]);
}

// remover na posição especifica
const arrRemover = [1, 2, 3, 4];
const removido = arrRemover.splice(1, 1);
/* console.log(arrRemover); */

//inserir na posição especifica
const inserido = arrRemover.splice(1, 0, 55);
/* console.log(arrRemover); */

//arrays bidimensionais e tridimensionais
const tempWeeks1 = [1, 2, 3, 4];
const tempoWeeks2 = [5, 6, 7, 8];
const tempWeeks3 = [9, 10, 11, 12];
const tempoWeeks4 = [13, 14, 15, 16];

const avgTemps = [tempWeeks1, tempoWeeks2];
const avgTemps2 = [tempWeeks3, tempoWeeks4];
const tempMonths = [avgTemps, avgTemps2];

//interação sobre bidimensional
for (let i = 0; i < avgTemps.length; i++) {
  for (let j = 0; j < avgTemps[i].length; j++) {
    /*  console.log("array -->", avgTemps[i][j]); */
  }
}

//interação sobre tridimensional
for (let i = 0; i < tempMonths.length; i++) {
  for (let x = 0; x < tempMonths[i].length; x++) {
    for (let z = 0; z < tempMonths[i][x].length; z++) {}
    /*  console.log(tempMonths[i][x][z]); */
  }
}
