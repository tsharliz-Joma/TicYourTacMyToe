

const button = $('button')

const addX = function(){
    $(button).html('<img class="x" src="./images/X.jpeg">');
}

const removeX = function(){
    $(button).remove('img')
}

button.on()

