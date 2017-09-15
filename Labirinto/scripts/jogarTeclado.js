function jogarPeloTeclado(jogador){

	this.jogar = function(){
		document.addEventListener('keydown', function(e){
			switch (e.keyCode) {
    			case 65:
	      			//console.log("esquerda");
	      			jogador.movimentarHumano(-1,0);
    			break;

			    case 87: 
      				//console.log("cima");
    				jogador.movimentarHumano(0,-1);
    			break;

			    case 68: 
				    //console.log("direita");
				    jogador.movimentarHumano(1,0);
    			break;

			    case 83: 
    				//console.log("baixo");
	   				jogador.movimentarHumano(0,1);
   				break;
			}
		}
		,true);
	}
}