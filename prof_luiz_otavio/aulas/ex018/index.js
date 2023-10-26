/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa ('Luciano', 'Junior', 22);
console.log(pessoa1.nome);*/
const pessoa1 = {
    nome: 'Luciano',
    sobrenome: 'Francisco',
    idade: 22,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`);
        console.log(`Minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()

