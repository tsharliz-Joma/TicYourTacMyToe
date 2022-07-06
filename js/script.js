

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

    
    const o1 = div1ImgSrc === imgSrc1;
    const o2 = div2ImgSrc === imgSrc1;
    const o3 = div3ImgSrc === imgSrc1;

    const o4 = div1ImgSrc === imgSrc1;
    const o5 = div4ImgSrc === imgSrc1;
    const o6 = div7ImgSrc === imgSrc1;

    const o7 = div2ImgSrc === imgSrc1;
    const o8 = div5ImgSrc === imgSrc1;
    const o9 = div8ImgSrc === imgSrc1;

    const win123 = o1 && o2 && o3 ;
    const win147 = o4 && o5 && o6 ;
    const win258 = o7 && o8 && o9 ;
    const win159 = div1ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const win456 = div4ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div6ImgSrc === imgSrc1 ;
    const win789 = div7ImgSrc === imgSrc1 && div8ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const win369 = div3ImgSrc === imgSrc1 && div6ImgSrc === imgSrc1 && div9ImgSrc === imgSrc1 ;
    const win753 = div7ImgSrc === imgSrc1 && div5ImgSrc === imgSrc1 && div3ImgSrc === imgSrc1 ;

    const winCondition9 = div1ImgSrc === imgSrc2 && div2ImgSrc === imgSrc2 && div3ImgSrc === imgSrc2 ;
    const winCondition10 = div1ImgSrc === imgSrc2 && div4ImgSrc === imgSrc2 && div7ImgSrc === imgSrc2 ;
    const winCondition11 = div2ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div8ImgSrc === imgSrc2 ;
    const winCondition12 = div1ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition13 = div4ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div6ImgSrc === imgSrc2 ;
    const winCondition14 = div7ImgSrc === imgSrc2 && div8ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition15 = div3ImgSrc === imgSrc2 && div6ImgSrc === imgSrc2 && div9ImgSrc === imgSrc2 ;
    const winCondition16 = div7ImgSrc === imgSrc2 && div5ImgSrc === imgSrc2 && div3ImgSrc === imgSrc2 ;
    
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
    if(win123 && turns9){
        Xwon()
    } else if(win147 && turns9){
        Xwon()
    } else if(win258 && turns9){
       Xwon()
    } else if(win159 && turns9){
       Xwon()
    } else if(win456 && turns9){
       Xwon()
    } else if(win789 && turns9){
        Xwon()
    } else if(win369 && turns9){
        Xwon()
    } else if(win753 && turns9){
        Xwon()
    } else if(winCondition9 && turns9){
        Ywon()
    } else if(winCondition10 && turns9){
        Ywon()
    } else if(winCondition11 && turns9){
        Ywon()
    } else if(winCondition12 && turns9){
        Ywon()
    } else if(winCondition13 && turns9){
        Ywon()
    } else if(winCondition14 && turns9){
        Ywon()
    } else if(winCondition15 && turns9){
        Ywon()
    } else if(winCondition16 && turns9){
        Ywon()
    } else if($('.btn').attr('disabled') && turns === 9){
        draw()
    } ;

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


