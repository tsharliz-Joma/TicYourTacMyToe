

const button = $('.btn');
const img = $('img');
let turns = 0 ;

const row = $('.row');


const set0 = '<img class="o" src="./images/pepe.png">'
const setX = '<img class="x" src="./images/sassy.png">'
const gameOver = $('.gameOver')
const gameOverText = $('.gameOverText')
const Ywins = $('.Xwins');
const Xwins = $('.Ywins');

const resetButton = $('.reset')


    



    
// ===
button.on('click', function(){
    turns++
    //Disables the button that has been clicked
    $(this).attr('disabled', true)

    const imgXO = turns % 2 === 0;
    const turns9 = turns <= 9 ;

    if(imgXO){
        $(this).html(set0); 
    } else {
        $(this).html(setX);
    };
    
    const noMoreTurns = turns === 10 ;

    const buttonDisabled = $(this).attr('disabled', true)

    if(noMoreTurns){
        buttonDisabled;
    }

    // const imgSrc1 = './images/sassy.png' ;
    // const imgSrc2 = './images/pepe.png' ;

    /*
    const imgSrcCheck
    const imgSrcCheck = function(){
        for(let i = 0; i < imgSrc.length; i++){
            if(){}
        }
    }
    */
    const winCondition1 = $('.d1 img').hasClass('x') && $('.d2 img').hasClass('x') && $('.d3 img').hasClass('x');
    const winCondition2 = $('.d1 img').hasClass('x') && $('.d4 img').hasClass('x') && $('.d7 img').hasClass('x');
    const winConditino3 = $('.d2 img').hasClass('x') && $('.d5 img').hasClass('x') && $('.d8 img').hasClass('x');
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


    
    const randomIndex = Math.floor(Math.random() * 200);

    const Xwon = function(){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    }

    const Ywon = function(){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
    }

    const draw = function(){
        gameOver.addClass('visible')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        gameOverText.html('Draw')
        row.addClass('invisible')
        
    }

    //Array or object that holds the winconditions for X 
        // it loops through the win conditons 
            //if any match it return that condition and the next funcitonn that accepts conditons 
                //checks add turns9 to the condtion and returns Xwon
        // Turn this into a function that accepts a win conditon
        
//Group the X in one if || and the Y in an else if || 
    if(turns9){
        if(winCondition1 || winCondition2 || winConditino3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8){
            Xwon()
        } else if(winCondition9 || winCondition10 || winCondition11 || winCondition12 || winCondition13 || winCondition14 || winCondition15 || winCondition16){
            Ywon()
        } else if($('.btn').attr('disabled')){
            draw()
        } ;
    }
});

// I need a funtion that clears that div when either X or O reach 5 wins

resetButton.on('click', function(){
    $('button, btn').attr('disabled', false);
    gameOver.removeClass('visible');
    row.removeClass('invisible');
    $('button img').remove();
    turns = 0;
})


/* NOt WORKING
let computerTurn = turns % 2 !== 0

const robotTurn = function(turns){
    if(computerTurn){
        if($(`.d${randomDiv} div`).children().length === 0){
        $(`.d${randomDiv} div`).html(set0)
        }
    }
}
robotTurn(turns);

*/
// Alright so to have a robot play
        //if the turn is on an odd number 
            //get a function that generates a random number, 
                // a random number between 0 and 9
                    // the number will corrospond with a div number 
                        //and set the img to setX
                            // Maybe slow down the transiton


// 123, 456, 789, 147 ,258, 369 , 357, 159

    //or if the class  or class for  are the 
        // or 369
            //or 753 or
    //if any of them are the same then return/consolelog/print ${class}//retrieve that class somehow


