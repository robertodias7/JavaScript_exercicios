let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
      
    } else {
        alert('Valores inválidos ou já encontrados na Lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adionar valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>AO TODO, TEMOS <strong>${tot}</strong> NÚMEROS CADASTRADOS!</p><br>`
        res.innerHTML += `<p>O <strong>MAIOR</strong> VALOR É O <strong>${maior}</Strong>.</p><br>`
        res.innerHTML += `<p>O <strong>MENOR</strong> VALOR É O <strong>${menor}</strong>.</p><br>`
        res.innerHTML += `<p>SOMANDO TODOS OS NÚMEROS, TEMOS <strong>${soma}</strong>.</p><br>`
        res.innerHTML += `<p>A MÉDIA DE TODOS OS NÚMEROS É <strong>${media = media.toFixed(2)}.</strong></p>`
        }
}