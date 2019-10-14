
$fixed = document.getElementById('fixed')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('fixedright')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('fixedleft')

$fixed.addEventListener("mouseover", func);

$fixed = document.getElementById('topfixed')

$fixed.addEventListener("mouseover", func);

function func() {
    alert('Game Over :(. your score is :'+ score)
    location.reload();
  }
$main = document.getElementById('main')
$main.setAttribute('style', 'display:none;')

$starting = document.getElementById('starting')

function play(){
$main.setAttribute('style', 'display:block;')
$starting.setAttribute('style', 'display:none;')


}