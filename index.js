var readline = require('readline-sync');
var tl =0
var total =0
var valor = 0;
var media =0;
var i =0;
var resp = "sim";


console.log("Programa que calcula a media de N numeros");
while (resp == "sim"){
tl = parseInt(readline.question("Informe a quantidade de valores que quer fazer a media"));
i = 0;

while (i<tl){
    valor = parseFloat(readline.question("Informe o número "+ (i+1)+ ": "));
    total = total + valor; 
    i = i +1;
}

media = total/tl;
console.log("A média é: "+media);
console.log("Digite sim para calcular outra média ou qualquer outro valor para sair do programa");
resp = readline.question("Informe a resposta: ");
resp = resp.toLowerCase ();

}