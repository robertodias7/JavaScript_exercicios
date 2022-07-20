    let v = prompt(`Quanto está a cotação do dólar?`)
    
function clicar(){
    
    let d = prompt('Quantos R$ você tem na carteira?')
    let dolar = Number(d) * 0.19
    let res = document.getElementById('res')
    let conv = dolar.toFixed(2).replace('.', ',')


    res.innerHTML = `<p><strong>Você comprará ${conv} Dólares com R$${d = d.replace('.', ',')}</strong></p>`
     
}
 


    
