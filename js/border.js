
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