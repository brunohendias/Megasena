//Variaveis{
var cartel = [];var acerto = 0;var sortiados = [];var num;var nume;
// }

function cartela(){
	while(cartel.length < 15){
		nume = Math.ceil(Math.random()*100);
		while(cartel.indexOf(nume) != -1){
			nume = Math.ceil(Math.random()*100);
		}
		cartel.push(nume);
	}
	document.getElementById('cartela').innerHTML = cartel.sort(function(a,b){return a - b});
}
cartela();

function troca(){
	if(sortiados.length <= 0 ){
		cartel = [];
		cartela();
	}
}

function sorteio(){
	num = Math.ceil(Math.random()*100);
	while(sortiados.indexOf(num) != -1){
		num = Math.ceil(Math.random()*100);
	}
	if(cartel.indexOf(num) != -1){
		acerto++;
		var act = document.getElementById('acerto').innerHTML = ("Total de numeros acertado: " + acerto);
	}
	sortiados.push(num);
	var numeros = document.getElementById('numeros').innerHTML = num;
	var sorte = document.getElementById('grupo').innerHTML = sortiados.sort(function(a,b){return a - b});
}

