function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const info = {
            name: nome.value,
            aftername: sobrenome.value,
            weight: peso.value,
            height: altura.value,
    
            fala() {
                pessoas.shift()
                pessoas.shift()
                pessoas.shift()
                pessoas.shift()
                pessoas.push(this.name) 
                pessoas.push(this.aftername)
                pessoas.push(this.weight)
                pessoas.push(this.height)
                console.log(pessoas)
            },
        
        };
        info.fala();
        
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = `${pessoas[0]}, ${pessoas[1]}, ${pessoas[2]}kg e ${pessoas[3]}m`
    }

    
    form.addEventListener('submit', recebeEventoForm);
}

    

meuEscopo();