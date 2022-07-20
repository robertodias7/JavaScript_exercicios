    function calcular(){
    let pdt = prompt('Qual o produto que você está comprando?')
    let preco = Number(prompt('Qual o preço do produto?'))
    let res = document.getElementById('res')
    let valor = Number((10 / 100) * preco)
    let tot = Number(preco - valor)
    res.innerHTML = ''
    
        res.innerHTML += `<p><h3>Calculando desconto de 10% para <strong>${pdt.toLocaleUpperCase()}</strong></h3></p><br>`
        res.innerHTML += `<p>O Preço original era <strong>R$ ${preco = preco.toFixed(2).replace('.',',')}</strong></p> <br>`
        res.innerHTML += `<p>Você acaba de ganhar R$ <strong>${valor = valor.toFixed(2).replace('.',',')}</strong> de desconto (-10%)</p><br>`
        res.innerHTML += `<p>No fim, você vai pagar R$ <strong>${tot = tot.toFixed(2).replace('.',',')}</strong> pelo produto <strong>${pdt.toLocaleUpperCase()}</strong></p>`
    } 
    
   