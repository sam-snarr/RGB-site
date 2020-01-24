var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById('color');
var messageDisplay = document.getElementById('message');
var resetButton = document.getElementById('reset');
var h1 = document.querySelector('h1');
var difficultyBtns = document.querySelectorAll('.difficulty');


initialize();

function initialize(){
    // adds event listener for difficulty buttons
    for(var i=0; i<difficultyBtns.length; i++){
        difficultyBtns[i].addEventListener('click', function(){
            difficultyBtns[0].classList.remove('selected');
            difficultyBtns[1].classList.remove('selected');
            this.classList.add('selected');
            if(this.textContent==='Easy'){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
    // adds event listener for reset button
    resetButton.addEventListener('click', reset);

    // adds event listeners for squares
    for(var i=0; i<squares.length; i++){
        // initial colors
        squares[i].style.background = colors[i];
        // add click listener
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.background;
            console.log(pickedColor, clickedColor)

            if (clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play Again?';
                changeColors(pickedColor);
                h1.style.background = clickedColor;
            }
            else{
                this.style.background = 'black';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
    reset();
}

// resets screen to initial setup
function reset(){
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';

    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';
        }
        else{
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}

// changes all colors of squares to the same color
function changeColors(color){
    for(var i=0; i<colors.length; i++){
        squares[i].style.background = color;
    }
}

// randomly chooses new color
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

// randomly generates `num` colors
function generateRandColors(num){
    var arr = [];
    for (var i=0; i<num; i++){
        arr[i] = randColor();
    }
    return arr;
}
 
// randomly creates rgb color
function randColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    return "rgb(" + red + ", " + green + ", " + blue + ")"
}