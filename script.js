let entrada = prompt("Digite um número:");

if(entrada){ //.trim é tratamento de entrada: começa e termina com caractere válido
    let numero = Number(entrada.trim());
    if(numero > 15){
        console.log("Número maior que 15.")
    }
    else if(numero < 15){
        console.log("Número menor que 15.")
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
