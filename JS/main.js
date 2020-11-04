function trocar(elemento){
    //document.getElementById("elemento").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML =  "<b>Obrigado por passar o mouse</b>";
};

function voltar(elemento){
    //document.getElementById("elemento").innerHTML = "<b>Passe o mouse aqui</b>";    
    elemento.innerHTML =  "<b>Passe o mouse aqui</b>";    
};

function load(){
   alert("Página carregada");
};

function funcaoChange(elemento){
    console.log(elemento.value);
};

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //return alert("Obrigado por clicar");
};

function redirecionar(){
    //window.open("https://codigofonte.com.br/codigos/estrutura-basica-pagina-html5"); // outra janela
    window.location.href = "https://codigofonte.com.br/codigos/estrutura-basica-pagina-html5";
};


/*
function soma(n1, n2){
    return n1 + n2;
};


var validar = 0;
function validaIdade(idade){
    //var validar;
    validar;
    if (idade >= 18) {
       validar = true 
    }else{
        validar = false
    }
    return validar
};
var idade = prompt("Qual a sua Idade");
//console.log(validaIdade(idade));
validaIdade(idade);
console.log(validar);

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};


alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getMonth()+1); // mes sempre adicione 1
alert(d.getFullYear());
*/

/*
var count;

for(count= 0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade ");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; // dicionario similar a Json 
console.log(frutas);
//console.log(fruta[1].nome);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}; // dicionario similar a Json 
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça","pêra","laranja"];
//console.log(lista);
//console.log(lista[1]);
//lista.push("uva");
//console.log(lista);
//console.log(lista.length);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//var nome = "Wilton Ferreira";
//var idade = 59;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo.";
//alert(nome+ " tem " + idade +" anos. ");
//alert( idade+idade2);
//console.log(nome);
//console.log( idade+idade2);
//console.log(frase.replace("Japão","Brasil"));
//alert( frase.replace("Japão","Brasil"))
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log( idade*idade2);