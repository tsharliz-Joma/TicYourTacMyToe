

const button = $('.btn');
const img = $('img');
let turns = 0 ;

const row = $('.row');

const set0 = '<img class="o" src="./images/pepe2.png">';
const set0win = '<img class="o" src="./images/pepeGold.png">';
const setX = '<img class="x" src="./images/sassy2.png">'
const setXwin = '<img class="x" src="./images/SassyGold.png">'
const gameOver = $('.gameOver')
const gameOverText = $('.gameOverText')
const Ywins = $('.Xwins');
const Xwins = $('.Ywins');

const resetButton = $('.reset')



button.on('click', function(){
    turns++

    const imgXO = turns % 2 === 0;
    const noMoreTurns = turns === 10 ;
    const buttonDisabled = $(this).attr('disabled', true);

    if(imgXO){
        $(this).html(set0); 
    } else {
        $(this).html(setX);
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
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html(`${setXwin} wins`)
        gameOverText.css({'transform': `translateX(${150}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    }

    const Ywon = function(){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html(`${set0win} wins`)
        gameOverText.css({'transform': `translateX(${150}%)`})
        row.addClass('invisible')
    }
    const draw = function(){
        gameOver.addClass('visible')
        gameOverText.css({'transform': `translateX(${390}%)`})
        gameOverText.html('Draw')
        row.addClass('invisible')
        
    }

        if(winCondition1 || winCondition2 || winCondition3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8){
            Xwon()
        } else if(winCondition9 || winCondition10 || winCondition11 || winCondition12 || winCondition13 || winCondition14 || winCondition15 || winCondition16){
            Ywon()
        } else if($('.btn').attr('disabled') && turns >= 9){
            draw()
        } ;

});

resetButton.on('click', function(){
    $('button, btn').attr('disabled', false);
    gameOver.removeClass('visible');
    row.removeClass('invisible');
    $('button img').remove();
    turns = 0;
});






