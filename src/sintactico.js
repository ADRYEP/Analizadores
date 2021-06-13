class sintactico {

    constructor(param){
        this.variable = "<variable>"
        this.numero = "<numero>"
        this.operadores = ["<igual a>", "<distinto de>", "<mayor que>", "<mayor/igual que>", "<menor que>", "<menor/igual que>"]
        this.operadorAsignar = "<asignar>"
        this.term = "<term>"
        this.param = this.instruccionesSeparadas(param)
    }

    instruccionesSeparadas(param){
        const instruccionesSeparadas = [[]]
        let current = 0
        for (let i = 0; i < param.length; i++) {
            instruccionesSeparadas[current].push(param[i])
            if (param[i] === this.term) {
                current++
                i !== param.length-1 && instruccionesSeparadas.push([])
            }            
        }
        return instruccionesSeparadas
    }

    getSintactico(){
        return this.filtrarTermino().filtrarCaracteresInvalidos().param.map((el,index) => {
            console.log(`Numero de instruccion: ${index+1}`)
            return !el.includes("<error>") ? this.intruccion(el) : false
        })
    }

    filtrarCaracteresInvalidos(){
        this.param.forEach(el => el.includes("<err>") && console.log("Error, token inesperado"))
        return this
    }

    filtrarTermino(){
        this.param.forEach(el => el[el.length-1] !== this.term && console.log("Error,falta un ;"))
        return this
    }

    intruccion(instruccion){
        const resultado = instruccion.length === 2 ? this.termino(instruccion[0]) : this.expresion(instruccion.slice(0, -1))
        console.log(`Test instruccion: = ${resultado}, ${instruccion}`)
        return resultado
    }
    
    asignar(asignar) {
        const resultado = this.variableFuncion(asignar[0]) && this.asignarOperacion(asign[1]) ? this.segundoTermino(asignar.slice(2, asignar.length)) : false;
        console.log(`Asign test = ${resultado}, ${asign}`);
        return resultado;
    }
    
    expresion(expresion) {
        const resultado = expresion.includes(this.asignOperator) ? this.asign(expresion) : this.comparacion(expresion);
        console.log(`Test expresion = ${resultado}, ${expresion}`);
        return resultado;
    }

    segundoTermino(segundoTermino) {
        const resultado = segundoTermino.length === 1 ? this.termino(segundoTermino) : this.comparacion(segundoTermino);
        console.log(`Second term test = ${resultado}, ${segundoTermino}`);
        return resultado;
    }

    comparacion(comparacion) {
        const resultado = (this.variableFuncion(comparacion[0]) || this.numeroFuncion(comparacion[0])) && this.comparacionOperador(comparacion[1]) && (this.variableFuncion(comparacion[2]) || this.numeroFuncion(comparacion[2]));
        console.log(`Test comparacion = ${resultado}, ${comparacion}`);
        return resultado;
    }

    variableFuncion(variable) {
        const resultado = variable === this.variable;
        console.log(`Test variable = ${resultado}, ${variable}`);
        return resultado;
    }

    numeroFuncion(numero) {
        const resultado = numero === this.numero;
        console.log(`numero test = ${resultado}, ${numero}`);
        return resultado;
    }

    comparacionOperador(operator) {
        const resultado = this.operadores.includes(operator);
        console.log(`Test operador de comparacion = ${resultado} , ${operator}`);
        return resultado;
    }

    asignarOperador(asignar) {
        const resultado = asignar === this.asignarOperador;
        console.log(`Test operador de asignar = ${resultado} , ${asignar}`);
        return resultado;
    }
}

export default sintactico