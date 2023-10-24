/*const pessoa1 = {
    nome: 'Luciano',
    sobrenome: 'Francisco',
    idade: 22
};

console.log(pessoa1.sobrenome)*/

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa ('Luciano', 'Junior', 22);
console.log(pessoa1.nome);