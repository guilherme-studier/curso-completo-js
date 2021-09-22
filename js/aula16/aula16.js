function parimp(num){
    if (num % 2 == 0){
        return console.log(`${num} é par`)
    }else {
        return console.log(`${num} é impar`)
    }
}

var resultado = parimp(3)


//se n1 ou n2 não forem passados, recebem 0
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2, 5))

let v = function(x){
    return x*2
}

console.log(v(5))


function fatorial(n){
    var fat = 1
    for(var c = n; c > 1; c --){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))