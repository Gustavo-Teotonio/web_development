// let idade = 16

// let verificacao = idade >= 18 
//     ? "Maior de idade"
//     : "Menor de idade";

// console.log(verificacao)

// let valor = null

// let resultado = valor ?? "valor padrão" //Se for verdadeiro atribui, caso não vai ser a segunda opção

// console.log(resultado)

// let idade = 25
// let temCarteira = true

// if(idade >= 18 && temCarteira)  
//     console.log("Pode dirigir")

// if(idade <= 18 || !temCarteira)  
//     console.log("Não pode dirigir")

// if(!temCarteira)  
//     console.log("Não pode dirigir")

// let tarefaConcluida = true

// if(tarefaConcluida)
//     console.log("A tarefa está concluida")

// let prioridade = 2

// if(prioridade === 3)
//     console.log("Prioridade alta")
// else if(prioridade === 2)
//     console.log("Prioridade média")
// else
//     console.log("Prioridade não é alta")

// console.log(prioridade === 3 ? "Alta" : "Baixa")

// let diaSemana = new Date().getDay()

// console.log(diaSemana)

// switch (diaSemana) {
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Segunda")
//         break;
//     case 2:
//         console.log("Terça")
//         break;
//     case 3:
//         console.log("Quarta")
//         break;
//     case 4:
//         console.log("Quinta")
//         break;
//     case 5:
//         console.log("Sexta")
//         break;
//     case 6:
//         console.log("Sábado")
//         break;
//     default:
//         break;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Contagem: ${i}`)
// }

// let contador = 0

// while(contador > 5){
//     contador ++
//     console.log("Contagem: " + contador)
// }

// do{
//     console.log(`Número é: ${numero}`)
//     numero--
// }while(numero > 0)

//Exercício 1

/*
Exercício 1: Condicional de Acesso
Crie uma variável nivelAcesso (1, 2 ou 3). Se o acesso for 3, exiba "Acesso Total"; se for 2, exiba "Acesso Parcial"; senão, exiba "Acesso Negado".
*/

let nivelAcesso = 1

switch (nivelAcesso) {
    case 3:
        console.log("Acesso Total")
        break;

    case 2:
        console.log("Acesso Parcial")
        break;

    default:
        console.log("Acesso negado")
        break;
}