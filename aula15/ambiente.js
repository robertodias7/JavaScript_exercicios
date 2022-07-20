let num = [5, 4 , 7, 3, 8] // Variável composta
/*num.push(6) // Adiciona um número
num.push(7)
num.sort() // Organiza em ordem crescente*/

console.log(num)
console.log(`O vetor tem ${num.length} posições`) // conta o Número de colunas  
console.log(`O primeiro valor do vetor é o ${num[0]}`) // Mostra o número da coluna selecionada

let pos = num.indexOf(3) // Procura o número no vetor e retorna a posição dele na coluna

if (pos == -1){ // se for um número que não esteja no vetor, retorna -1
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}