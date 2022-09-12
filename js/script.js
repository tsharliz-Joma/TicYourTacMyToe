const button = $('.game-button');
const img = $('img');
let turns = 0 ;
let xScore = 0;
let yScore = 0;

const buttonsContainer = $('.buttons-container');

let set0 = '<img class="o " id="img-square" src="./images/blue.png">';
let set0win = '<img class="o " id="img-square" src="./images/pepeGold.png">';
let setX = '<img class="x " id="img-square" src="./images/robinhood.png">'
let setXwin = '<img class="x " id="img-square" src="./images/SassyGold.png">'
const gameOver = $('.gameOver')
const gameOverText = $('.gameOverText')

let robinhood = $('.robinhood');
let blue = $('.blue');
let pepe = $('.pepe');
let sassy = $('.sassy');
let charButton = $('.char-button')

const resetButton = $('.reset');

button.attr('disabled', true)


const characterSelect = () => {

    let charactersSelected = [];

    let charTurn = 0;

    const checkSelected = () => {
        if(charTurn < 2){
            button.attr('disabled', true)
        } else if(charTurn === 2){
            charButton.attr('disabled', true)
            button.attr('disabled', false)
        } 
    }
  
    robinhood.on('click', function(){
        charTurn++
        if(charTurn <= 1){
            robinhood.attr('disabled', true);
            $('.player1').text('Robin');
            charactersSelected.push('robinhood')
            set0 = '<img class="x" id="img-square" src="./images/robinhood.png">';
            set0win = '<img class="x" id="img-square" src="./images/robinhood.png">';
            checkSelected();
        } else if(charTurn === 2){
            robinhood.attr('disabled', true);
            $('.player2').text('Robin');
            charactersSelected.push('robinhood')
            setX = '<img class="o" id="img-square" src="./images/robinhood.png">';
            setXwin = '<img class="o" id="img-square" src="./images/robinhood.png">';
            checkSelected();
        }
    });

    blue.on('click', function(){
        charTurn++ 
        if(charTurn <= 1){
            blue.attr('disabled', true);
            $('.player1').text('Blue')
            charactersSelected.push('blue');
            set0 = '<img class="x" id="img-square" src="./images/blue.png">';
            set0win = '<img class="x" id="img-square" src="./images/blue.png">';
            checkSelected();
        } else if(charTurn === 2){
            blue.attr('disabled', true);
            $('.player2').text('Blue')
            charactersSelected.push('blue');
            setX = '<img class="o" id="img-square" src="./images/blue.png">';
            setXwin = '<img class="o" id="img-square" src="./images/blue.png">';
            checkSelected();
        }  
    });

    sassy.on('click', function(){
        charTurn++
        if(charTurn <= 1){
            sassy.attr('disabled', true);
            $('.player1').text('Sassy')
            charactersSelected.push('sassy')
            set0 = '<img class="x" id="img-square" src="./images/sassy2.png">';
            set0win = '<img class="x" id="img-square" src="./images/sassyGold.png">';
            checkSelected();
        } else if(charTurn === 2 ){
            sassy.attr('disabled', true);
            $('player2').text('Sassy');
            charactersSelected.push('sassy')
            setX = '<img class="o" id="img-square" src="./images/sassy2.png">';
            setXwin = '<img class="o" id="img-square" src="./images/sassyGold.png">';
            checkSelected();
        }  
    });

    pepe.on('click', function(){
        charTurn++
        if(charTurn <= 1){
        pepe.attr('disabled', true);
        $('.player1').text('Pepe');
        charactersSelected.push('pepe');
        set0 = '<img class="x" id="img-square" src="./images/pepe2.png">';
        set0win = '<img class="x" id="img-square" src="./images/pepeGold.png">';
        checkSelected();
        } else if(charTurn === 2){
        pepe.attr('disabled', true);
        $('.player2').text('Pepe');
        charactersSelected.push('pepe');
        setX = '<img class="o" id="img-square" src="./images/pepe2.png">';
        setXwin = '<img class="o" id="img-square" src="./images/pepeGold.png">';
        checkSelected();
        }

    });

}

const start = () => {

    $('.player1').text('')
    $('.player2').text('')

    characterSelect();
  

    button.on('click', function(){
    turns++

    const imgXO = turns % 2 === 0;
    const noMoreTurns = turns === 10 ;
    const buttonDisabled = $(this).attr('disabled', true);

    if(imgXO){
        $(this).html(setX); 
    } else {
        $(this).html(set0);
    };
    
    if(noMoreTurns){
        buttonDisabled;
    }

    const winCondition1 = $('.d1 img').hasClass('x') && $('.d2 img').hasClass('x') && $('.d3 img').hasClass('x');
    const winCondition2 = $('.d1 img').hasClass('x') && $('.d4 img').hasClass('x') && $('.d7 img').hasClass('x');
    const winCondition3 = $('.d2 img').hasClass('x') && $('.d5 img').hasClass('x') && $('.d8 img').hasClass('x');
    const winCondition4 = $('.d1 img').hasClass('x') && $('.d5 img').hasClass('x') && $('.d9 img').hasClass('x');
    const winCondition5 = $('.d4 img').hasClass('x') && $('.d5 img').hasClass('x') && $('.d6 img').hasClass('x');
    const winCondition6 = $('.d7 img').hasClass('x') && $('.d8 img').hasClass('x') && $('.d9 img').hasClass('x');
    const winCondition7 = $('.d3 img').hasClass('x') && $('.d6 img').hasClass('x') && $('.d9 img').hasClass('x');
    const winCondition8 = $('.d7 img').hasClass('x') && $('.d5 img').hasClass('x') && $('.d3 img').hasClass('x');

    const winCondition9 = $('.d1 img').hasClass('o') && $('.d2 img').hasClass('o') && $('.d3 img').hasClass('o');
    const winCondition10 = $('.d1 img').hasClass('o') && $('.d4 img').hasClass('o') && $('.d7 img').hasClass('o');
    const winCondition11 = $('.d2 img').hasClass('o') && $('.d5 img').hasClass('o') && $('.d8 img').hasClass('o');
    const winCondition12 = $('.d1 img').hasClass('o') && $('.d5 img').hasClass('o') && $('.d9 img').hasClass('o');
    const winCondition13 = $('.d4 img').hasClass('o') && $('.d5 img').hasClass('o') && $('.d6 img').hasClass('o');
    const winCondition14 = $('.d7 img').hasClass('o') && $('.d8 img').hasClass('o') && $('.d9 img').hasClass('o');
    const winCondition15 = $('.d3 img').hasClass('o') && $('.d6 img').hasClass('o') && $('.d9 img').hasClass('o');
    const winCondition16 = $('.d7 img').hasClass('o') && $('.d5 img').hasClass('o') && $('.d3 img').hasClass('o');

    const Xwon = function(){
        xScore++
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html(`${set0win} wins`);
        buttonsContainer.addClass('invisible')
        $('.XkeepingCount').text(xScore)
    }
    
    const Ywon = function(){
        yScore++
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html(`${setXwin} wins`)
   
        buttonsContainer.addClass('invisible')
        $('.OkeepingCount').text(yScore)
        
    }

    const draw = function(){
        gameOver.addClass('visible')
        gameOverText.html('Draw')
        buttonsContainer.addClass('invisible')
    }

        if(winCondition1 || winCondition2 || winCondition3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8){
            Xwon()
        } else if(winCondition9 || winCondition10 || winCondition11 || winCondition12 || winCondition13 || winCondition14 || winCondition15 || winCondition16){
            Ywon()
        } else if($('.game-button').attr('disabled') && turns >= 9){
            draw()
        } ;
    })
};

$('.full-restart').on('click', function(){
    window.location.reload()
})

resetButton.on('click', function(){
    $('button, btn').attr('disabled', false);
    gameOver.removeClass('visible');
    buttonsContainer.removeClass('invisible');
    $('button img').remove();
    turns = 0;
});

start();






