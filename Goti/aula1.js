class Produto{

    constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;

    }
Apresentar(){
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`);
}
}

let produto = new Produto("Caneta", 2.5, 100);
produto.vender(10); // Quantidade atual: 90
produto.repor(20); // Quantidade atual: 110SSS