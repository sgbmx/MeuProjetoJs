//ArrowFunction "=>"


let somar = (num1, num2) => {
    return num1 + num2;
}

console.log(somar(4, 6));

/* Caso a função possua apenas um parâmemtro de entrada e executa apenas uma linha,
é possível simplificar ainda mais utitlizando Arrow Function*/

let dobrar = valor => valor * 2;
console.log(dobrar(5));