// let nome = prompt("Digite aqui seu nome");

// console.log(`O nome digitado foi ${nome}`);

// alert(`Olá! Seja bem vindo, ${nome}!!!`);   (``: template string) ("": just string)

let numero = Number(prompt("Digite um número:"));

if(entrada.trim()){ //.trim é tratamento de entrada: começa e termina com caractere válido
    let numero = Number=(entrada);
    if(numero > 15){
        console.log("Número maior que quinze.")
    }
    else if(numero < 15){
        console.log("Número menor que quinze.")
    }
    else if(numero === 15){
        console.log("Número igual a 15.")
    }
    else{
        console.log("Valor inválido.")
    }
}
else{
    console.log("Nenhum valor digitado.")
}
