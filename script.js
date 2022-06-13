//Dados iniciais

let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
}

let player = '';
let warning = '';
let playing = false;

reset()


//Eventos
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('div[data-item=a1]').addEventListener('click', itemClick)
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click', itemClick)
})

//Funcoes
function itemClick(event){
    console.log(event.target);
    let item = event.target.getAttribute('data-item');
    if(square[item] === ''){
        square[item] = player;
        renderSquare()
        togglerPlayer()
    }
}


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
    for(let i in square){
        console.log("ITEM: ", i)
        let item = document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = square[i];  
    }      
    
}


function renderInfo(){
  document.querySelector('.vez').innerHTML = player;
  document.querySelector('.resultado').innerHTML = warning  
}


function togglerPlayer() {
    if(player == 'x'){
        player = 'o'
    }else{
        player = 'x'
    }

}


function checkGame(){
    if(checkWinnerFor('x')){

        warning = 'O "x" venceu';
        playing = false;

    }else if(checkWinnerFor('o')){

        warning = 'O "o" venceu';
        playing = false;

    } else if(isFull()){

        warning = 'Deu empate';
        playing = false;
    }
}


function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c3',

    ];

for(let w in pos){
        let pArray = pos[w].split(','); //a1, a2, a3
        let hasWon = pArray.every((option) =>{
           if(square[option] === player){
            return true;
           }else{
               return false;
           }
           if(hasWon){
               return true;
           }
        })
    }

    return false
}

function isFull(){

    for(let i in square){
        if(square[i] === '')
            return false;
    }

}


