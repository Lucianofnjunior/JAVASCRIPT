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

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        /*const info = {

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
        info.fala();*/
        console.log(pessoas)
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}kg e ${altura.value}m</p>`
    }

    
    form.addEventListener('submit', recebeEventoForm);
}

    

meuEscopo();