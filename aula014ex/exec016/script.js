function clicar(){
    let inicio = document.getElementById('txtn')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
   

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Complete os dados e tente novamente!')
    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('Passo Inválido! considerando passo 1')
            p = 1

        } if (i < f){
                //Contagem Crescente
             for(let c = i; c <= f; c += p)
                 res.innerHTML += `${c} \u{1F449}`

        }else{
                //Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
   }
}