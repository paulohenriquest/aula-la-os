// let numero = 0;
// let condicao =  'teste';
// let pessoas = ['João', 'Pedro', 'Lucas', 'Maria'];

// if(condicao == 'teste'){
//     console.log('fase 1');
//     // while(numero <= 3){
//     for(numero = 0; numero <= 3; numero++){
//         console.log('fase 2');
//         switch(numero){
//             case numero:
//                 alert(`Olá, ${pessoas[numero]}`)
//             break;
//         }
//         // numero++;
//     }
// }



// switch(pessoas){
//     case 0:
//         alert(`Olá ${pessoa[0]}`);
//     break;

//     case 1:

//     break;

//     case 2:

//     break;

//     case 3:

//     break;

//     default:
// }

// console.log(pessoas[2]);

// while(numero  < 10){
//     numero++;
//     alert('Esse é o número ' + numero);
//     console.log(numero);
// }

// do {
//     console.log(numero);
//     alert('Ele passou por aqui');
//     numero++;
// } while(numero < 10) {
//     alert(`Esse é o número  ${numero}`);
// }

// for (numero = 0; numero <= 10; numero++){
//     console.log(numero);
// }
let resultado = document.getElementById('tabuada');
for(let numero = 1; numero <= 10; numero=numero+1){
    for(let multiplica = 0; multiplica <= 10; multiplica=multiplica+1){
        let multiplicacao = numero * multiplica;
        let linha = "" + numero + " * " + multiplica + " = " + multiplicacao + "<br>";
        resultado.innerHTML += (linha);
    }
}
