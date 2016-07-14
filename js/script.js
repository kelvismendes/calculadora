window.onload = function(){
	
	//preencher visor com numeros
	var btnNumeros = document.getElementsByClassName("numero");
	
	for(var i=0;i<btnNumeros.length;i++){
		//o button que tiver a class numero vai ser adicionado uma função a ele
		document.getElementsByClassName("numero")[i].onclick = function(){
			document.getElementsByClassName("visor")[0].value += this.innerHTML;
		}
		// i<4 pois existe apenas 4 operadores(* - + /)
		if(i < 4){

			document.getElementsByClassName("operador")[i].onclick = function(){
				var valorAtualVisor = document.getElementsByClassName("visor")[0].value;
				//condição que verifica o ultimo valor do visor e só permite que seja preenchido um operador se as condições forem aceitas
				if(valorAtualVisor[valorAtualVisor.length-1] != "/" && valorAtualVisor[valorAtualVisor.length-1] != "*" && valorAtualVisor[valorAtualVisor.length-1] != "-" && valorAtualVisor[valorAtualVisor.length-1] != "+" &&valorAtualVisor[valorAtualVisor.length-1] != undefined && valorAtualVisor[valorAtualVisor.length-1] != "." ){
					document.getElementsByClassName("visor")[0].value += this.innerHTML;
				}
			}

		}

	}


	//preenche com .

	document.getElementsByClassName("btn-virgula")[0].onclick = function(){
		var valorAtualVisor = document.getElementsByClassName("visor")[0].value;
		if(valorAtualVisor[valorAtualVisor.length-1] != "/" && valorAtualVisor[valorAtualVisor.length-1] != "*" && valorAtualVisor[valorAtualVisor.length-1] != "-" && valorAtualVisor[valorAtualVisor.length-1] != "+" &&valorAtualVisor[valorAtualVisor.length-1] != undefined && valorAtualVisor[valorAtualVisor.length-1] != "."){
			document.getElementsByClassName("visor")[0].value += this.innerHTML;
		}
	}

	//limpar visor
	document.getElementsByClassName("btn-limparVisor")[0].onclick = function(){
		document.getElementsByClassName("visor")[0].value = "";
	}

	//inverter valor(positivo/negativo)
	document.getElementsByClassName("btn-inverterValor")[0].onclick = function(){
		var valorAtualVisor = document.getElementsByClassName("visor")[0].value;
		document.getElementsByClassName("visor")[0].value = (valorAtualVisor)*-1;
	}

	//realiza o calculo da expressao matematica no visor
	document.getElementsByClassName("btn-calcular")[0].onclick = function(){
		document.getElementsByClassName("visor")[0].value = eval(document.getElementsByClassName("visor")[0].value);
	}


	//apaga o ultimo caractere
	document.getElementsByClassName("btn-apagarUltimo")[0].onclick = function(){
		
		var valorAtualVisor = document.getElementsByClassName("visor")[0].value ; 
		
		document.getElementsByClassName("visor")[0].value = "";

		for(var i =0 ;i < valorAtualVisor.length-1 ; i++){ //faz com que o visor receba caracterer por caractere exceto o ultimo
			document.getElementsByClassName("visor")[0].value +=valorAtualVisor[i]; 
		}	
	}

	



	
	


}