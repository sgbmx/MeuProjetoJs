//4. Funções com parâmetros variáveis e valor padrão
//Função não recebe nada, porém por padrão o Javascript cria um array de arguments
function somar1() {

    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

/*console.log(somar1()); //0
console.log(somar1(2)); //2
console.log(somar1(2, 5)); //7
console.log(somar1(2, 3, 9)); //14
console.log(somar1(2, 4, 6, 8, 12)); //32*/


function imprime_valores(num1, num2) {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}


/*imprime_valores();
imprime_valores(4, 6);
imprime_valores(4, 6, 8);
imprime_valores(3, 6, 8, 12, 44, 56);*/



//Gambiarra 1 que era feita para valor padrão no parâmetro caso não fosse passado nenhum valor

function somar2(num1, num2, num3) {
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

/*console.log(somar2(4, 5, 6)); //15
console.log(somar2()); //6
console.log(somar2(2)); //7
console.log(somar2(2, 2)); //7
console.log(somar2(2, 2, 2)); //6
console.log(somar2(2, 2, 2, 2)); //6

console.log(somar2(0, 0, 0)); //6 erra prra retornar 0, porém retorna 6, 0 em JS é false*/

//Gambiarra 2, que resolve o erro da primeira
function somar3(num1, num2, num3) {
    num1 = isNaN(num1) ? 1 : num1; //Verifica se é um numero inválido, caso seja atribui o valor padrão
    num2 = isNaN(num2) ? 1 : num2;
    num3 = isNaN(num3) ? 1 : num3;

    return num1 + num2 + num3;
}

/*console.log(somar3(4, 5, 6)); //15
console.log(somar3()); //6
console.log(somar3(2)); //7
console.log(somar3(2, 2)); //7
console.log(somar3(2, 2, 2)); //6
console.log(somar3(2, 2, 2, 2)); //6

console.log(somar3(0, 0, 0)); //0*/



//Forma atual - rercomendada parra utilizar valores padrõe em parâmetros

function somar4(num1 = 1, num2 = 2, num3 = 3) {
    return num1 + num2 + num3;
}

/*console.log('Forma atual' + somar4(4, 5, 6)); //15
console.log(somar4()); //6
console.log(somar4(2)); //7
console.log(somar4(2, 2)); //7
console.log(somar4(2, 2, 2)); //6
console.log(somar4(2, 2, 2, 2)); //6

console.log(somar4(0, 0, 0)); //0*/

/*Caso alguém passe um argumenta incorreto
console.log(somar4('a', 'b', 'c')); //'abc'
console.log(somar4(true, false, 'c')); //'1c'
console.log(somar4(2, true, false)); //3*/

/*
Em Javascript, 0 é considerado false e 1 é considerado true*/



function somar5(num1 = 1, num2 = 2, num3 = 3) {
    if(Number.isInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
        }else{
            return 'Não foi possível retornar a soma'
        }
}



console.log('Forma atual' + somar5(4, 5, 6)); //15
console.log(somar5()); //6
console.log(somar5(2)); //7
console.log(somar5(2, 2)); //7
console.log(somar5(2, 2, 2)); //6
console.log(somar5(2, 2, 2, 2)); //6

console.log(somar5(0, 0, 0)); //0*/

//Caso alguém passe um argumenta incorreto
console.log(somar5('a', 'b', 'c')); //'abc'
console.log(somar5(true, false, 'c')); //'1c'
console.log(somar5(2, true, false)); //3