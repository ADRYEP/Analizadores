import analizadorLexico from './lexico.js'
import analizadorSintactico from './sintactico.js'

const lexico = new analizadorLexico

let resultado = lexico.getLexico("unaVariable = (19); otraVariable != 27;")
// console.log("ANALIZADOR LÉXICO");
// console.log(resultado);

console.log("------------------------------------------------");

console.log("ANALIZADOR SINTACTICO");
const sintactico = new analizadorSintactico(resultado)
resultado = sintactico.getSintactico()
console.log(resultado);