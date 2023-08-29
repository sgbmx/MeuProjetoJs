function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera  data atual


    const idade = data.getFullYear() - ano_nascimento;

    return idade;
    //esse função possui retorno, sendo possivel armazenar esse retorno  e utiliza-lo posteriormente
}



function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    //console.log(idade);
    //esse função não possui retorno, não sendo possivel utilizar o retorno posteriormente
}


let ret = calcular_idade1(1998);
//console.log(ret + 3);


//calcular_idade(1994);


const data = new Date();

console.log('Data completa ' + data);
console.log('Ano ' + data.getFullYear());
console.log('Mês ' + data.getMonth()); //0 para Janeiro, 1 para Fevereiro


//Fique esperto!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4,6)); //10

console.log(somar(4)); //?? NaN

console.log(somar(4,8,2,3)); //Soma os dois primeiros argumentos