function meuEscopo() {
    const form = document.querySelector('.form');

   /*   Função mais arcaica
   form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1)
        console.log('Formulário enviado.')
    };
}
*/
//          FUNÇÃO MAIS ATUAL
    function recebeEventoForm (evento) {

    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();