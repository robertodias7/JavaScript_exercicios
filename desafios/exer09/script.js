function reajustar(){
let nome = prompt('Qual é o nome do funcionário?')
let sal = Number(prompt(`Qual é o salário de ${nome}`))
let reajSal = prompt(`Salário de ${nome} vai ser reajustado em qual porcentagem?`)
let res = document.getElementById('res')
let aumento = Number((reajSal / 100) * sal)
let soma = Number(sal) + aumento
res.innerHTML = ''



res.innerHTML += `<p><h3><strong>${nome}</strong> recebeu um aumento salarial</h3></p><br>`
res.innerHTML += `<p>Salário atual é de <strong>${sal= sal.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</strong></p>`
res.innerHTML += `<p>Com um aumento de <strong>${reajSal}%</strong>, o salário vai aumentar <strong>${aumento = aumento.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</strong> no próximo mês.</p>`
res.innerHTML += `<p>E a partir daí, <strong>${nome}</strong> vai passar a ganhar <strong>${soma = soma.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</strong></p>`
}