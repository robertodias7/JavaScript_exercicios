let valores = [7, 5, 3, 8, 6, 2]
valores.sort()

/*for(let pos = 0; pos < valores.length; pos ++){ // 'pos' recebe 0; enquanto 'pos' for menos que valores.length(quantidade coluna), 'pos' repete ate útima coluna
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Mostra na tela  a posição da coluna(pos) e o valor dela dentro da variável (valores[pos]) na tela 
}*/


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
