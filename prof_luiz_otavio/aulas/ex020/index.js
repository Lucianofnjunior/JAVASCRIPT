const nome = window.prompt('Digite seu nome:');
const sobrenome = window.prompt('Digite seu sobrenome');
const idade = window.prompt('Digite sua idade:');

//Chamando os elementos por ID
const nomeTitulo = document.getElementById('nome-titulo');
const nomeParagrafo = document.getElementById('nome');
const sobrenomeParagrafo = document.getElementById('sobrenome');
const idadeParagrafo = document.getElementById('idade');

nomeTitulo.innerHTML = nome;
nomeParagrafo.innerHTML = `Nome: ${nome}`;
sobrenomeParagrafo.innerHTML = `Sobrenome: ${sobrenome}`;
idadeParagrafo.innerHTML = `Idade: ${idade} anos`;
