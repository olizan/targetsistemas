
//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

let palavra = "olizan";
let letraAVerificar = "a";
let count = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() === letraAVerificar.toLowerCase()) {
        count++;
        if (palavra[i] === palavra[i].toUpperCase()) {
            console.log(`Letra (${palavra[i]}) é Maiúscula`);
        } else {
            console.log(`Letra (${palavra[i]}) é Minúscula`);
        }
        console.log(`A letra (${letraAVerificar}) aparece ${count}x`);
    }
}

//saida 
//Letra (a) é Minúscula
//A letra (a) aparece 1x
//Letra (a) é Minúscula
//A letra (a) aparece 2x


// Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

let indice = 12 
let somar = 0 
let k = 1

for(let k = 1; k < indice; k++){
    somar = somar + (k + 1)
}

console.log(`Resultado da soma ${somar}`)

//saída
//Resultado da soma 77
