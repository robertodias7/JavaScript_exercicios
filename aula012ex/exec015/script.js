function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
     alert('Preencha seus dados corretamente e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var mF = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            mF = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'foto_menino.png')
            } else if(idade <= 21) {
                //Jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'foto_homem.png')
            }else {
                //Senhor
                img.setAttribute('src', 'foto_senhor.png')
            }
        }else if (fsex[1]){
            mF = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'foto_menina.png')
            } else if(idade <= 21) {
                //Jovem
                img.setAttribute('src', 'foto_jovem_f.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'foto_mulher.png')
            }else {
                //Senhora
                img.setAttribute('src', 'foto_senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${mF} com ${idade} anos`
        res.appendChild(img)


    }
    
}