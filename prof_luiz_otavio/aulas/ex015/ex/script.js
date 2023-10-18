const numero = prompt('Digite um número:');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>Seu número - 2 é ${Number(numero) + 2}`