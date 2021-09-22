function verificar(){
    var data = new Date() //cria variável para trabalhar com dados de Data
    var ano = data.getFullYear() //cria a variável ano
    var fano = document.getElementById('txtano') //cria a variável 'fano' e está selecionando o elemento com Id 'txtano'
    var res = document.getElementById('res') //cria a variável 'res' e está selecionando o elemento com Id 'res'

    //criando condição para tratar com ano de nascimento e idade do usuário
    if(fano.value.length === 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex') // cria a var 'fsex' e atribui a ela o sexo marcado pelo usuário
        var idade = ano - Number(fano.value) //está calculando a idade do usuário, subtraindo o ano atual com o ano de nascimento do usuário
        
        var genero = ''
        var img = document.createElement('img') //cria variável para img e com ela o elemento img
        img.setAttribute('id', 'foto') //cria o id foto para imagem

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './img/criançam.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovemm.jpeg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', './img/adultom.jpeg')
            } else {
                //idoso
                img.setAttribute('src', './img/idosom.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './img/criançaf.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovemf.jpeg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', './img/adultof.jpeg')
            } else {
                //idoso
                img.setAttribute('src', './img/idosof.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //com appendChild estamos executando este elemento abaixo do elemento de cima
    }
}