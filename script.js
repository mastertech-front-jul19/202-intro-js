/*
TABELA VERDADE

&& (AND)
true && true == true
true && false == false
false && false == false

|| (OR)
true || true == true
true || false == true
false || false == false

CAMMEL CASING
Nome da Variável
nomeDaVariavel
*/

console.log('Hello World');

// let nomeDoUsuario = prompt('Qual o nome do usuário?');
// let idade = prompt('Qual é a sua idade?');
// let programador = confirm('Você é um programador?');

// alert(nomeDoUsuario);
// console.log(idade);
// console.log(programador);

/*
Crie um programa que receba as quatro notas do aluno durante o ano. Mostre a média dessas notas.
*/

let nota1 = Number(prompt('Diga a primeira nota'));
let nota2 = Number(prompt('Diga a segunda nota'));
let nota3 = Number(prompt('Diga a terceira nota'));
let nota4 = Number(prompt('Diga a quarta nota'));

// let soma = nota1 + nota2 + nota3 + nota4;
// let media = soma / 4;

// alert(media);

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    console.log('Aprovado');
}
else if (media >= 4.5) {
    console.log('Parabéns, você foi aprovado pelo sistema :D');
}
else {
    console.log('Reprovado');
}

/* 
Crie um sistema que aprove empréstimos. As regras do sistema são:

. O usuário precisa ter entre 24 e 65 anos;
. O usuário precisa ter uma renda mínima de R$1500,00;
. O usuário precisa pedir um valor entre R$1000,00 e dez vezes a renda dele;

O sistema deve informar se o empréstimo foi aprovado ou não.

BÔNUS 1:
Quando não aprovado, indique ao usuário o motivo.

BÔNUS 2:
Adicione uma porcentagem de juro ao seu sistema e em quantas parcelas o empréstimo será pago. Ao fim do sistema, indique  o valor de cada parcela e o valor total.
    - O valor mínimo de parcelas é 3 vezes e o máximo em 12 vezes;
*/