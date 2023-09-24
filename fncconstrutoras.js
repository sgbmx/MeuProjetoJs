//Funções construtoras


function Pessoa(n, s, raca = 'Humano') {
    //atributos privados(let) só conseguimos fazer uso dentro da função contrutora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributos públicos(this) pode ser acessado foram da função construtora
    this.raca = raca;

    //Método privado só conseguimos fazer uso dentro da função construtora
    let imprimr_dados = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    //métodos público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function () {
        idade += 1;
        imprimr_dados();
    }

    this.getIdade = function () {
        return idade;
    }
}

//Instanciando um objeto
const lucas = new Pessoa("Lucas", "Masculino");
console.log(lucas);


console.log(lucas.peso); //atributo privado, não temos acesso. Result: undefined
console.log(lucas.raca); //atributo público, temos acesso. Result: Humano


lucas.fazer_aniversario(); //público
lucas.fazer_aniversario(); //público



//Instanciar um novo objeto
const feliz = new Pessoa("Feliz", "Feminino");

feliz.fazer_aniversario();
console.log(feliz.getIdade());

console.log(typeof(Pessoa)); //function
console.log(typeof(feliz)); //object