//6. Funções Anônimas (Lambdas) - Uma função que não tem nome

let numeros = [1, 2, 3, 4, 5, 6];

function dobrar(valor) {
    return valor * 2;
}

//map cria um novo array com os valores transformados 
let res1 = numeros.map(dobrar);

console.log(numeros);
console.log(res1);


//Funções anônimas - Lambdas(Funções Lambdas)

let res2 = numeros.map(function (valor) { //aqui a função não tem nome
    return valor * 2;
});

console.log(res2);