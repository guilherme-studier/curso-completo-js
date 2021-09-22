var num = [3, 4, 0, 3, 1]
console.log(num)
console.log(num.length)
console.log(num.sort())
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
*/
//for otimizado para variáveis compostas e objetos:
//leia-se: para cada posição (pos) em num, mostre o num[pos]
for(let pos in num){
    console.log(num[pos]) 
}

//como buscar valores dentro do array:
num.indexOf(3)