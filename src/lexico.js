class lexico {

    constructor(){
        this.resultado = []
        this.caracteres = new RegExp("^[a-zA-Z]+$")
        this.numeros = new RegExp("^[0-9]+$")
        this.current = 0
    }

    getLexico(input){
        this.resultado.length = 0
        for (let i = 0; i < input.length; i++) {
            if (this.numeros.test(input[i])) {
                this.resultado[this.current] = this.resultado[this.current] ? this.resultado[this.current].concat(input[i]) : input[i]
                !(this.numeros.test(input[i + 1])) && this.current++
            } else if (this.caracteres.test(input[i])) {
                       this.resultado[this.current] = this.resultado[this.current] ? this.resultado[this.current].concat(input[i]) : input[i]
                       if(!(this.caracteres.test(input[i + 1])) && !(this.numeros.test(input[i + 1]))) {
                           this.current++
                       }
            } else if (input[i] === "!") {
                this.resultado[this.current] = input[i]
                input[i + 1] !== "=" && this.current++
            } else if (input[i] === "=") {
                this.resultado[this.current] = this.resultado[this.current] ? this.resultado[this.current].concat(input[i]) : input[i]
                input[i + 1] !== "=" && this.current++
            } else if (input[i] === ">" || input[i] === "<") {
                this.resultado[this.current] = input[i]
                input[i + 1] !== "=" && this.current++
            } else if (input[i] === "(" || input[i] === ")") {
                this.resultado[this.current] = input[i]
                this.current++
            } else if (input[i] === ";") {
                this.resultado[this.current] = input[i]
                this.current++
            }
        }
        this.current = 0
        return this.resultado.map(el => (el === "=" ? "<asignar>" : el === "==" ? "<igual a>" : el === "!=" ? "<distinto de>" : el === ">" ? "<mayor que>" : el === ">=" ? "<mayor/igual que>": el === "<" ? "<menor que>" : el === "<=" ? "<menor/igual que>": el === ";" ? "<final>": el === "(" ? "<paréntesis abierto>" : el === ")" ? "<paréntesis cerrrado>" : this.caracteres.test(el) ? `<variable>` : el === "!" ? "<errores>" : `<numero>`));
     }
}

export default lexico