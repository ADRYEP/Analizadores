import analizadorLexico from './lexico.js'

const lexico = new analizadorLexico

let resultado = lexico.getLexico("unaVariable = (19); otraVariable != 27;")
console.log("ANALIZADOR LÉXICO");

console.log(resultado);