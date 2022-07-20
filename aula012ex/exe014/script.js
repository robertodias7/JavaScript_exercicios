function carregar(){
var msg = document.getElementById('msg') //Variável msg vai receber a mensagem
var img = document.getElementById('imagem') //Varável img vai receber a imagem
var agora = new Date()
var hora = agora.getHours()
msg.innerHTML = `Agora são exatamente ${hora} horas` //Essa é a mensagem que vai aparecer a cada período do dia junto com a hora atual
if (hora >= 0 && hora <12 ) {
    img.scr = 'manha.png'
    document.body.style.background = '#83654C'
    // de 00:00hr até 12h aparecerá a foto 'manhã' com cor de fundo da página apropriado
}else if(hora <=18) {
    img.src = 'tarde.png'
    document.body.style.background = '#332723'
    // Depois de 12h ate 18h aparecerá a foto 'tarde' com cor de fundo da página apropriado
}else {
    img.src = 'noite.png'
    document.body.style.background = '#014961'
    // de 00:00hr até 12h aparecerá a foto 'manhã' com cor de fundo da página apropriado
}
}