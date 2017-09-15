function controladorGeral(){

	this.labirinto = null,
	this.jogador = null,
	this.context = null,

	this.iniciar = function(){
		var canvas = document.getElementById("imageView");
		this.context  = canvas.getContext('2d');
			
		canvas.width = 610;
		canvas.height = 610;

		this.labirinto = new controladorDoLabirinto(this.context ,this.labirinto);
		this.labirinto.desenharLabirinto();

		this.jogador = new controladorDoJogador(this.context ,this.labirinto,0,1);		
	},
	this.jogarA = function(jogador, labirinto){
		var tamanho = 61;
		
		var algoritmo = new algoritmoDeBusca();
		algoritmo.jogar(this.jogador,this.labirinto);	
	},

	this.jogarTeclado = function(jogador){
		var teclado = new jogarPeloTeclado(this.jogador);
		teclado.jogar();
	}

};
