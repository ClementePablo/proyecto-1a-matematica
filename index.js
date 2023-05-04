module.exports = {
    /**
     * Suma de dos números
     * @example
     * n1 = 2, n2 = 2 => resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     * @returns La suma de n1 y n2
     */
    suma: function(n1, n2){
        return n1 + n2;
    },
        /**
     * Resta de dos números
     * @example
     * n1 = 4, n2 = 2 => resultado 2
     * @param {*} n1 Numero uno de la resta
     * @param {*} n2 Numero dos de la resta
     * @returns La resta de n1 y n2
     */
    resta: function(n1, n2){
        return n1 - n2;
    },
    /**
     * Multiplica dos números
     * @example
     * n1 = 3, n2 = 2 => resultado 6
     * @param {*} n1 Numero uno de la multiplicación
     * @param {*} n2 Numero dos de la multiplicación
     * @returns Numero resultante de multiplicar de n1 por n2
     */
    multiplicacion: function(n1, n2){
        return n1 * n2;
    },
    /**
     * División dos números
     * @example
     * n1 = 6, n2 = 2 => resultado 3
     * @param {*} n1 Numero uno de la división
     * @param {*} n2 Numero dos de la división
     * @returns Numero resultante de dividir n1 sobre n2
     */
    division: function(n1, n2){
        return n1 / n2;
    }
}