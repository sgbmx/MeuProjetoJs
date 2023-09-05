//Em javascript funções funcionam como cidadoes de primeira classe, signficada que podemos utilizala como tipo de dados da programação

//First class object
//higher order function

//utilizar uma função como tipo de dado

function somar(num1, num2) {
    return num1 + num2;
}

let res = somar(4, 6);
//console.log(res);
//console.log(somar(4,6));

//Exemplo 1
const executar = somar;
//console.log(executar(5, 8));

//Exemplo 2 - Passando uma função para outra
function subtrair(num1, num2) {
    return num1 = num2;
    /*Teste Git
    return num1 = num2;
    return num1 = num2;
    return num1 = num2;
    return num1 = num2;
    */
}

//adicionando return master - teste git

function faz_algo(num1, num2, teste) {
    return teste(num1, num2);
}

//console.log(faz_algo(5, 5, somar));
//console.log(faz_algo(8, 3, subtrair));

//Exemplo 3 - passando uma funcao como parametro de outra funcao
function outra(z) {
    return z;
}


//const ret = outra(somar);
//console.log(ret(8, 2));


function mensagem() {
    console.log('Evolua estudando');
}

mensagem();



let valores = [1, 2.3, true, somar];

for (let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i])); // typeof descobrir o tipo do valor
}