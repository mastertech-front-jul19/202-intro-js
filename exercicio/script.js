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

console.log('Iniciou o programa');

// let idade = Number(prompt('Quantos anos você tem?'));
// let renda = Number(prompt('Qual a sua renda?'));
// let montante = Number(prompt('Qual o valor do empréstimo?'));

// if (idade >= 24 && idade <= 65 && renda >= 1500 && montante >= 1000 && montante <= renda * 10) {
//     alert('Aprovado');
// }
// else {
//     alert('Reprovado');
// }

let porcentagem = 0.3;
let idade = Number(prompt('Quantos anos você tem?'));

if (idade >= 24 && idade <= 65) {
    let renda = Number(prompt('Qual é sua renda?'));

    if(renda >= 1500) {
        let montante = Number(prompt('Qual o valor do empréstimo?'));

        if(montante >= 1000 && montante <= renda * 10) {
            alert('Aprovado');

            let valorTotal = montante * (1 + porcentagem);
            let quantidadeParcelas = Number(prompt('O valor total a ser pago é de R$' + valorTotal + '. Em quantas parcelas você gostaria de dividir?'));

            if (quantidadeParcelas >= 3 && quantidadeParcelas <= 12) {
                let valorParcela = valorTotal / quantidadeParcelas;

                // alert('O valor total a ser pago é de R$' + valorTotal + ', e será pago em ' + quantidadeParcelas + ' de R$' + valorParcela.toFixed(2));
                
                //Template String
                alert(`O valor total a ser pago é de R$${valorTotal}, e será pago em ${quantidadeParcelas} de R$${valorParcela.toFixed(2)}`)
            }
            else {
                alert('Você não pode dividir nessa quantidade de parcelas.');
            }
        }
        else {
            alert('Reprovado pelo empréstimo');
        }
    }
    else {
        alert('Reprovado pela renda');
    }
}
else {
    alert('Reprovado pela idade');
}
