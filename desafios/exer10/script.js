function calcular(){
    let a = Number(prompt('Qual é o valor de a?'))
    if(a == 0){
        alert('Número inválido ou Digite um número')
   
        

    }else{
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let res = document.getElementById('res')
    let del = b * b - 4 * a * c

    res.innerHTML = ''
    
    res.innerHTML += '<p><h3>Resolvendo Bhaskara ax² + bx + c = 0</h3></p>'
    res.innerHTML += `a = ${a} <br> b = ${b}<br> c = ${c}<br>`
    res.innerHTML += `<p><strong>A equação atual é ${a}x² + ${b}x + ${c} = ${0}</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² ${- 4}. ${a}. ${c} </strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong><mark> &Delta; = ${del}</strong></p>`
    }
}
