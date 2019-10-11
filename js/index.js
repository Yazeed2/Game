// let $obsticle = document.createElement('div')
// $obsticle.classList.add("obs")

// document.body.appendChild($obsticle)

// $obsticle.addEventListener("mousemove", func);
// function func(){
//     alert('Game Over :(')
    
// }
// function myMove() {
//     var elem = document.getElementById("animate");   
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
//   }
setInterval(function(){
    myMove()
},100)
function myMove() {
    let upper = [100]

    var elem = document.querySelectorAll(".animate");
    console.log(elem);
    
    elem.forEach(function(el){
        y = upper[upper.length - 1]
        el.style.top = y + "px"; 
        upper.push(y+100)
        el.addEventListener("mousemove", func);
        var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 1000) {
        clearInterval(id);
      } else {
        pos++; 
     
        el.style.left = pos + "px"; 
      }
    }
  })
    
}
      
    
  function func(){
      alert('Game Over :(')
  }