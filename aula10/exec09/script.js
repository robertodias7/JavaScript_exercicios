
function clicar() {
let país = window.document.getElementById('pais')
let res = window.document.getElementById('res')

let resultadoPaís = String(país.value)
res.innerHTML = `<p>Você mora no(a) ${resultadoPaís}</p>`

if(resultadoPaís == 'Brasil') {
    res.innerHTML += '<p>Você é Brasileiro</p>'
    
}else(
    res.innerHTML += '<p>Você é Estrangeiro</p>'

)
}
