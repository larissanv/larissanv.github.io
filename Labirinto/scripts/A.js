function Vizinhos(index,x,y){
    this.x = x;
    this.y = y;
    this.h = ( (59 - x) + (58 - y) );
    this.index = index;
}

function algoritmoDeBusca(){

    this.jogar = function(jogador,labirinto){
        if (this.vizinho(jogador,labirinto)){
            if (jogador.x == 59 && jogador.y ==58){
                alert("ganhou!");
                location.reload();
            }
        }
    },

    this.vizinho = function(jogador,labirinto){
        
        if (jogador.x == 0 && jogador.y == 1  ){
            jogador.context.fillStyle = '#0000ff';
            jogador.context.fillRect(jogador.x * 10, jogador.y * 10, 10, 10);
            jogador4 = new controladorDoJogador(jogador.context,labirinto,jogador.x+1,jogador.y);
            this.jogar(jogador4,labirinto);
        }else{
            var vizinhos = [
                new Vizinhos(0,jogador.x,jogador.y+1),
                new Vizinhos(1,jogador.x,jogador.y-1),
                new Vizinhos(2,jogador.x-1,jogador.y),
                new Vizinhos(3,jogador.x+1,jogador.y)
            ];

            vizinhos.sort(function(a ,b){return b.h - a.h});

            if (vizinhos[0].index == 0){
                this.vizinho0(jogador,labirinto);
            }
            if (vizinhos[0].index == 1){
                this.vizinho1(jogador,labirinto);
            }
            if (vizinhos[0].index == 2){
                this.vizinho2(jogador,labirinto);
            }
            if (vizinhos[0].index == 3){
                this.vizinho3(jogador,labirinto);
            }


            if (vizinhos[1].index == 0){
                this.vizinho0(jogador,labirinto);
            }
            if (vizinhos[1].index == 1){
                this.vizinho1(jogador,labirinto);
            }
            if (vizinhos[1].index == 2){
                this.vizinho2(jogador,labirinto);
            }
            if (vizinhos[1].index == 3){
                this.vizinho3(jogador,labirinto);
            }

            
            if (vizinhos[2].index == 0){
                this.vizinho0(jogador,labirinto);
            }
            if (vizinhos[2].index == 1){
                this.vizinho1(jogador,labirinto);
            }
            if (vizinhos[2].index == 2){
                this.vizinho2(jogador,labirinto);
            }
            if (vizinhos[2].index == 3){
                this.vizinho3(jogador,labirinto);
            }

            
            if (vizinhos[3].index == 0){
                this.vizinho0(jogador,labirinto);
            }
            if (vizinhos[3].index == 1){
                this.vizinho1(jogador,labirinto);
            }
            if (vizinhos[3].index == 2){
                this.vizinho2(jogador,labirinto);
            }
            if (vizinhos[3].index == 3){
                this.vizinho3(jogador,labirinto);
            }
        }


        return true;
    },

    this.vizinho0 = function(jogador,labirinto){    
        var imgd0 = jogador.context.getImageData(jogador.x*10, (jogador.y+1)*10, 1, 1);
        var pix0 = imgd0.data;
        if ( labirinto.estaAberto(jogador.x,jogador.y+1) && pix0[2] !=255){
            jogador.context.fillStyle = '#0000ff';
            jogador.context.fillRect(jogador.x * 10, jogador.y * 10, 10, 10);
            jogador0 = new controladorDoJogador(jogador.context,labirinto,jogador.x,jogador.y+1);
            this.jogar(jogador0,labirinto);
        }
    },

    this.vizinho1 = function(jogador,labirinto){ 
        var imgd1 = jogador.context.getImageData(jogador.x*10, (jogador.y-1)*10, 1, 1);
        var pix1 = imgd1.data;
        if ( labirinto.estaAberto(jogador.x,jogador.y-1) && pix1[2] !=255){
            jogador.context.fillStyle = '#0000ff';
            jogador.context.fillRect(jogador.x * 10, jogador.y * 10, 10, 10);
            jogador1 = new controladorDoJogador(jogador.context,labirinto,jogador.x,jogador.y-1);
            this.jogar(jogador1,labirinto);
        }
    },

    this.vizinho2 = function(jogador,labirinto){         
        var imgd2 = jogador.context.getImageData((jogador.x-1)*10, jogador.y*10, 1, 1);
        var pix2 = imgd2.data; 
        if ( labirinto.estaAberto(jogador.x-1,jogador.y) && pix2[2] !=255){
            jogador.context.fillStyle = '#0000ff';
            jogador.context.fillRect(jogador.x * 10, jogador.y * 10, 10, 10);
            jogador2 = new controladorDoJogador(jogador.context,labirinto,jogador.x-1,jogador.y);
            this.jogar(jogador2,labirinto);
        }       
    },

    this.vizinho3 = function(jogador,labirinto){ 
        var imgd3 = jogador.context.getImageData((jogador.x+1)*10, jogador.y*10, 1, 1);
        var pix3 = imgd3.data;
        if ( labirinto.estaAberto(jogador.x+1,jogador.y) && pix3[2] !=255){
            jogador.context.fillStyle = '#0000ff';
            jogador.context.fillRect(jogador.x * 10, jogador.y * 10, 10, 10);
            jogador3 = new controladorDoJogador(jogador.context,labirinto,jogador.x+1,jogador.y);
            this.jogar(jogador3,labirinto);
        }
    }   
     
};