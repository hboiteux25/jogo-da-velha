//Dados iniciais

let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
}

let player = '';
let warning = '';
let playing = false;


//Eventos
document.querySelector('.reset').addEventListener('click', reset);

//Funcoes

function reset(){
    warning = '';
    let random = Math.floor(Math.random() * 2);

    if (random === 0){
        player = 'x';
    }else{
        player = 'o';
    }

    for(let i in square){
        square[i] ='';
    }

    playing = true;

    renderSquare();
    renderInfo();

}

function renderSquare(){

}


function renderInfo(){
    
}





