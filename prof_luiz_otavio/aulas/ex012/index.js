let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varF = varA;
varA = varB;
varB = varC;
varC = varF;

console.log(varA, varB, varC)