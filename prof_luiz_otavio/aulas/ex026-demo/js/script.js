function escopoImc() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado-final');

    let contador = 1;
    function recebeForm(evento) {
        evento.preventDefault() //Pagina não recarrega após clicar button
        
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');
        let imcMath = peso.value / (altura.value**2);
        imcMath = parseFloat(imcMath.toFixed(1))
        console.log(imcMath);

        if (imcMath === Infinity || imcMath === NaN || imcMath === 0) {
            resultado.innerHTML = `<p>Você precisa preencher os dados.</p>`
        } else if (peso.value === NaN) {
            resultado.innerHTML = `<p>Você precisa preencher o peso.</p>`
        }
        else if (imcMath < 18.5){
            resultado.innerHTML = `<p>Seu IMC é ${imcMath}, (Abaixo do Peso).</p>`
        } else if (imcMath >= 18 && imcMath <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imcMath} (Peso Normal).</p>`
        } else if (imcMath >= 25 && imcMath <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imcMath} (Sobrepeso).</p>`
        } else if (imcMath >= 30 && imcMath <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imcMath} (Obesidade grau 1).</p>`
        } else if (imcMath >= 35 && imcMath <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imcMath} (Obesidade grau 2).</p>`
        } else if (imcMath >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imcMath} (Obesidade grau 3).</p>`
        } 
    }

    form.addEventListener('submit', recebeForm);
}

escopoImc();