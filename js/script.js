

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


button.on('click', function(){
    turns++
    //Disables the button that has been clicked
    $(this).attr('disabled', true)

    const imgXO = turns % 2 === 0;

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

    const turns9 = turns <= 9 ;

    const imgSrc1 = './images/sassy.png' ;
    const imgSrc2 = './images/pepe.png' ;

    let div1ImgSrc = String($('.d1 img').attr('src'))
    let div2ImgSrc = String($('.d2 img').attr('src'))
    let div3ImgSrc = String($('.d3 img').attr('src'))
    let div4ImgSrc = String($('.d4 img').attr('src'))
    let div5ImgSrc = String($('.d5 img').attr('src'))
    let div6ImgSrc = String($('.d6 img').attr('src'))
    let div7ImgSrc = String($('.d7 img').attr('src'))
    let div8ImgSrc = String($('.d8 img').attr('src'))
    let div9ImgSrc = String($('.d9 img').attr('src'))

    const winCondition1 = div1ImgSrc === imgSrc1 && div2ImgSrc === imgSrc1 && div3ImgSrc === imgSrc1 ;
    const winCondition2 = div1ImgSrc === imgSrc1 && div4ImgSrc === imgSrc1 && div7ImgSrc === imgSrc1 ;
    const winCondition3 = div2ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div8ImgSrc === imgSrc1 ;
    const winCondition4 = div1ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const winCondition5 = div4ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div6ImgSrc === imgSrc1 ;
    const winCondition6 = div7ImgSrc === imgSrc1 && div8ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const winCondition7 = div3ImgSrc === imgSrc1 && div6ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const winCondition8 = div7ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div3ImgSrc === imgSrc1 ;

    const winCondition9 = div1ImgSrc === imgSrc2 && div2ImgSrc === imgSrc2 && div3ImgSrc === imgSrc2 ;
    const winCondition10 = div1ImgSrc === imgSrc2 && div4ImgSrc === imgSrc2 && div7ImgSrc === imgSrc2 ;
    const winCondition11 = div2ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div8ImgSrc === imgSrc2 ;
    const winCondition12 = div1ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition13 = div4ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div6ImgSrc === imgSrc2 ;
    const winCondition14 = div7ImgSrc === imgSrc2 && div8ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition15 = div3ImgSrc === imgSrc2 && div6ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition16 = div7ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div3ImgSrc === imgSrc2 ;
    
    const randomIndex = Math.floor(Math.random() * 200);


    if(winCondition1 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition2 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible') 
        $('.XkeepingCount').append('I')
    } else if(winCondition3 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible') 
        $('.XkeepingCount').append('I')
    } else if(winCondition4 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition5 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition6 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition7 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition8 && turns9){
       button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Sassy wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.XkeepingCount').append('I')
    } else if(winCondition9 && turns9){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        
    } else if(winCondition10 && turns9){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
       
    } else if(winCondition11 && turns9){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')

    } else if(winCondition12 && turns9){
        $('.OkeepingCount').append('I')
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')

    } else if(winCondition13 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible');
        $('.OkeepingCount').append('I')
    } else if(winCondition14 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.OkeepingCount').append('I')
    } else if(winCondition15 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.OkeepingCount').append('I')
    } else if(winCondition16 && turns9){
        button.attr('disabled', true)
        gameOver.addClass('visible');
        gameOverText.html('Pepe wins')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        row.addClass('invisible')
        $('.OkeepingCount').append('I')
    } else if($('.btn').attr('disabled') && turns === 9){
        gameOver.addClass('visible')
        gameOverText.css({'transform': `translateX(${randomIndex}%)`})
        gameOverText.html('Draw')
        row.addClass('invisible')
        $('.OkeepingCount').append('I')
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

let computerTurn = turns % 2 !== 0

const robotTurn = function(turns){
    if(computerTurn){
        if($(`.d${randomDiv} div`).children().length === 0){
        $(`.d${randomDiv} div`).html(set0)
        }
    }
}



robotTurn(turns);









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


