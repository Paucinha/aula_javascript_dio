
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.dio.me/");
    //window.location.href = "https://www.dio.me/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade){
    validar = true;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade);
console.log(validar);
-/

//alert(soma(5, 10));
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplece(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplece("Vai Brasil", "Brasil", "Corinthians!"));
*/

/*
var d = new Date();
//alert(d);
//alert(d.getMonth());
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[1]);

//var nome = "Paucinha";
//var n1 = 5;
//var n2 = 3;
//var frase = "Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero."
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
// alert(frase.replace("programador", "devs"));