//recupera o elemento
const canvas=document.getElementById('painel');
//obtem o contexto 2d
const ctx=canvas.getContext('2d');

//calcula o tamanho do elemento canvas
ctx.canvas.width=COLUNA*TAM_BLOCO;
ctx.canvas.height=LINHA*TAM_BLOCO;

//escala o tamanho dos blocos
ctx.scale(TAM_BLOCO,TAM_BLOCO);

let panel=new painel();

function play(){
	painel.reset();
	console.table(painel.grid)
}
document.addEventListener('keydown',event=>{

	if(movimento[event.keycode]) {
		event.preventDefault();
		let p=movimento[event.keyCode](painel.peca);
		if(event.keyCode===KEY.SPACE){
	while(painel.validar(p)){
		painel.peca.mover(p);
		p=movimento[KEY.DOWN](painel.peca);
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		painel.peca.desenho();
	}
}
		if(painel.validar(p)){
			painel.peca.mover(p);
			ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
			painel.peca.desenho();
		}
	}
});