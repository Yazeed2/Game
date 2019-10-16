//make the borders so that no one can get away from the playing area 
$fixed = document.getElementById('fixed')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('fixedright')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('fixedleft')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('topfixed')

$fixed.addEventListener("mouseover", func);

//game over to desplay the score and reloads the page
function func() {
    alert('Game Over :(. your score is :'+ score)
    location.reload();
  }
//this hides the game  
$main = document.getElementById('main')
$main.setAttribute('style', 'display:none;')

$starting = document.getElementById('starting')

//displays the game and starts it 
function play(){
$main.setAttribute('style', 'display:block;')
$starting.setAttribute('style', 'display:none;')


}