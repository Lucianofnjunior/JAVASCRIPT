const hora = 19;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
}else if (hora >= 13 && hora <= 17) {
    console.log('Boa tarde!')
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
}else {
    console.log(`Você está em outro planeta?Hora não reconhecida.`)
}
