function contar(){
    //atribuir variáveis aos id's
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    //se os valores não forem preenchidos corretamente:
    if(ini.value.length === 0 || fim.value.length === 0 || pas.value.length === 0){
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        //caso o passo receba um valor menor ou igual a zero:
        if(p <= 0){
            alert('Passo inválido!')
        }

        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //contagem decrescente
            for(var c = i; c >= f; c-= p){
                res.innerText += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}