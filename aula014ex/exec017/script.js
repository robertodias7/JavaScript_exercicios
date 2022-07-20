function clicar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('selec')
    if(num.value.length == 0){
        alert('Caixa vazia!')
    }else{
        let n1 = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for(c; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
         }
    }
}