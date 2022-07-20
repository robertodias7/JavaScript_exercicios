function clicar(){
    let anoAtual = Number(prompt('Qual é o ano que você quer verificar?'))
    let res = document.getElementById('res')
    res.innerHTML = `<p><h3>Analisando o ano de ${anoAtual}...</h3</p><br><br>`

   if(anoAtual % 4 == 0 && anoAtual % 100 != 0 || anoAtual % 4 == 0 && anoAtual % 100 == 0 && anoAtual % 400 == 0) {
        res.innerHTML += `<p>O ano de ${anoAtual} <mark style= 'background-color: #00D26A'>É Bissexto </mark>\u{2705}</p>`
   }else{
    res.innerHTML += `<p>O ano de ${anoAtual} <mark style= "background-color: #E28783">NÃO É BISSEXTO</mark> \u{274C}</p>`
   }
}