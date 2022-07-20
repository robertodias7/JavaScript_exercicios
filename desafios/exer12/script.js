function verificar(){
    let preAnterior = Number(prompt('Qual era o preço do produto?'))
    let preAtual = Number(prompt('Qual é o preço atual do produto?'))
    let res = document.getElementById('res')
    let difP = preAtual - preAnterior
    let result = difP / Number(preAtual / 100) 
        res.innerHTML = '<p>Analisando os valores informados</p><br><br>'

    res.innerHTML = '<p><h3>Analisando os valores informados</h3></p>'
    if(preAnterior < preAtual){
        res.innerHTML += `<p>O Produto custava ${preAnterior.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} e agora custa ${preAtual.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o preço está mais caro</p>`
        res.innerHTML += `<p>O Preço subiu ${difP.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} em relação ao anterior</p>`
        res.innerHTML += `<p>Uma variação de ${result.toFixed(2).replace('.',',')}% pra cima</p>`
    } else{
        let pAgora = preAnterior - preAtual
        let result=   pAgora / Number(preAnterior / 100)

        res.innerHTML += `<p>O Produto custava ${preAnterior.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} e agora custa ${preAtual.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o preço está mais barato</p>`
        res.innerHTML += `<p>O Preço caiu ${pAgora.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${result.toFixed(2).replace('.',',')}% pra baixo</p>`
    }
}