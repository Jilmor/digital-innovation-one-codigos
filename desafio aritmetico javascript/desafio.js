/*Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

 
Exemplo de Entrada	Exemplo de Saída
7
-5
6
-3.4
4.6
12

4 valores positivos*/
var positivo = 0;
var valor = new Array(6);

valor[0] = parseInt(gets("7"));
valor[1] = parseInt(gets("-5"));
valor[2] = parseInt(gets("6"));
valor[3] = parseInt(gets("-3.4"));
valor[4] = parseInt(gets("4.6"));
valor[5] = parseInt(gets("12"));

for (cont = 0; cont <= 5; cont++) {
    if (valor[cont] >= 0) {
        positivo++;
    }

}
console.log(positivo + " valores positivos");

/*Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	Exemplo de Saída
6	
2
4
6*/
var N = 0;


N = parseInt(gets("6"));

for (cont = 1; cont <= N; cont++) {
    if (cont % 2 == 0) {
        console.log(cont);
    }

};

/*Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)*/


var positivo = 0;
var negativo = 0;
var pares = 0;
var impares = 0;
var valor = new Array(5);

valor[0] = parseInt("-5");
valor[1] = parseInt("0");
valor[2] = parseInt("-3");
valor[3] = parseInt("-4");
valor[4] = parseInt("12");


for (cont = 0; cont <= 4; cont++) {
    if (valor[cont] > 0) {
        positivo++;
    }
    if (valor[cont] < 0) {
        negativo++;
    }
    if (valor[cont] % 2 == 0) {
        pares++;
    }
    if (valor[cont] % 2 == 1) {
        impares++
    }
}


console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)"); * /

/*Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
Exemplo de Entrada	Exemplo de Saída
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00*/

let valor = parseInt(gets("N"));
var dif = valor;
n100 = parseInt(dif / 100);
if (n100 != 0) {
    dif = dif - (100 * n100);
}
n50 = parseInt(dif / 50);
if (n50 != 0) {
    dif = dif - (50 * n50);
}
n20 = parseInt(dif / 20);
if (n20 != 0) {
    dif = dif - (20 * n20);
}
n10 = parseInt(dif / 10);
if (n10 != 0) {
    dif = dif - (10 * n10);
}
n5 = parseInt(dif / 5);
if (n5 != 0) {
    dif = dif - (5 * n5);
}
n2 = parseInt(dif / 2);
if (n2 != 0) {
    dif = dif - (2 * n2);
}
n1 = parseInt(dif / 1);
if (n1 != 0) {
    dif = dif - (1 * n1);
}
console.log(valor);
console.log(n100 + " nota(s) de R$ 100,00");
console.log(n50 + " nota(s) de R$ 50,00");
console.log(n20 + " nota(s) de R$ 20,00");
console.log(n10 + " nota(s) de R$ 10,00");
console.log(n5 + " nota(s) de R$ 5,00");
console.log(n2 + " nota(s) de R$ 2,00");
console.log(n1 + " nota(s) de R$ 1,00");

/*Desafio
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

Entrada
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

Saída
Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

 
Exemplo de Entrada	Exemplo de Saída
500
35.0

14.286 km/l   */
let km = parseInt(gets("X"));
let litros = parseFloat(gets("Y"));

let kmlitros = (parseFloat(km / litros)).toFixed(3) + " km/l";

console.log(kmlitros);