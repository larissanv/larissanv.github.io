function controladorDoJogador(context,labirinto, x, y) {
	this.x = x,
	this.y = y,
	this.context = context,
	this.labirinto = labirinto,
	
	this.movimentarHumano = function(directionx,directiony){
		
		var pontoX = directionx;
		var pontoY = directiony;

		if (this.labirinto.estaAberto(this.x+pontoX,this.y+pontoY)){
			this.context.fillStyle = '#000080';
			this.context.fillRect(this.x * 10, this.y * 10, 10, 10);
			
			this.x = this.x+pontoX;
			this.y = this.y+pontoY;	
			this.context.fillStyle = '#00ff00';
			this.context.fillRect(this.x * 10, this.y * 10, 10, 10);
		}
		if ((this.x == 60) && (this.y == 59)){
			alert("ganhou!");
			location.reload();
		}
		}
};