// q learning 

 


let score = 0
// code from stack overflow 
function showCoords(event) {
  
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  // console.log(coor);

}
var reset = 2500
setInterval(
  start, reset
  );

// function getWidth() {
//   return Math.max(
//     document.body.scrollWidth,
//     document.documentElement.scrollWidth,
//     document.body.offsetWidth,
//     document.documentElement.offsetWidth,
//     document.documentElement.clientWidth
//   );
// }

// function getHeight() {
//   return Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.documentElement.clientHeight
//   );
// }

// end of code from stack overflow 
setInterval(add, 110)
function add(){
  score++
  $score = document.querySelector('h1')
  $score.innerText = score
  // console.log(score);
  
}
let left = function(velocity, num){
let upper = [10]

  // console.log('here');
  // var elem = document.querySelectorAll(".animate");

  for (let index = 0; index < num; index++) {
    $elem = document.createElement('div')
    $elem.setAttribute("class", "animate");
    document.body.appendChild($elem)
  }

  var elem = document.querySelectorAll(".animate");
  // console.log(elem);

  elem.forEach(function (el) {
  let space = Math.round(Math.random() * (100) + 60)  

    y = upper[upper.length - 1]
    el.style.top = y + "px";
    upper.push(y + space)
    el.addEventListener("mouseover", func);
  
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos >= 1360) {
        clearInterval(id);
        el.remove()
        // console.log('removed');
        // alert("done")
        // console.log("no stop")
        // pos =0  ern
        // start()



      } else {
        pos += velocity; 
        // console.log('working -_-');
        // console.log(getWidth());

        el.style.left = pos + "px";
      }
    }
  })
// start()
}
let bottom = function(velocity, num){
  let upper = [10]
  
    // console.log('here');
    // var elem = document.querySelectorAll(".animate");
  
    for (let index = 0; index < num; index++) {
      $elem = document.createElement('div')
      $elem.setAttribute("class", "animate");
      document.body.appendChild($elem)
    }
  
    var elem = document.querySelectorAll(".animate");
    // console.log(elem);
  
    elem.forEach(function (el) {
      y = upper[upper.length - 1]
      el.style.left = y + "px";
      upper.push(y + 100)
      el.addEventListener("mouseover", func);

      var pos = 0;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos >= 1360) {
          clearInterval(id);
          el.remove()
          // console.log('removed');
          // alert("done")
          // console.log("no stop")
          // pos =0  ern
          // start()
  
  
  
        } else {
          pos += velocity; 
          // console.log('working -_-');
          // console.log(getWidth());
  
          el.style.bottom = pos + "px";
        }
      }
    })
  // start()
  }
let right = function(velocity, num){
  let upper = [10]
  
    // console.log('here');
    // var elem = document.querySelectorAll(".animate");
  
    for (let index = 0; index < num; index++) {
      $elem = document.createElement('div')
      $elem.setAttribute("class", "animate");
      document.body.appendChild($elem)
    }
  
    var elem = document.querySelectorAll(".animate");
    // console.log(elem);
  
    elem.forEach(function (el) {
      y = upper[upper.length - 1]
      el.style.top = y + "px";
      upper.push(y + 100)
      el.addEventListener("mouseover", func);
      var pos = 0;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos >= 1360) {
          clearInterval(id);
          el.remove()
          // console.log('removed');
          // alert("done")
          // console.log("no stop")
          // pos =0  ern
          // start()
  
  
  
        } else {
          pos += velocity; 
          // console.log('working -_-');
          // console.log(getWidth());
  
          el.style.right = pos + "px";
        }
      }
    })
  // start()
  }
  let fook = function(velocity, num){
    let upper = [10]
    
      // console.log('here');
      // var elem = document.querySelectorAll(".animate");
    
      for (let index = 0; index < num; index++) {
        $elem = document.createElement('div')
        $elem.setAttribute("class", "animate");
        document.body.appendChild($elem)
      }
    
      var elem = document.querySelectorAll(".animate");
      // console.log(elem);
    
      elem.forEach(function (el) {
        y = upper[upper.length - 1]
        el.style.left = y + "px";
        upper.push(y + 100)
        el.addEventListener("mouseover", func);
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
          if (pos >= 1360) {
            clearInterval(id);
            el.remove()
            // console.log('removed');
            // alert("done")
            // console.log("no stop")
            // pos =0  ern
            // start()
    
    
    
          } else {
            pos += velocity; 
            // console.log('working -_-');
            // console.log(getWidth());
    
            el.style.top = pos + "px";
          }
        }
      })
    // start()
    }
let num = 0

let speed = 2 ;
let count = 0 
function start(){
var arr = [fook,bottom,left,right];
  let vel = 1360/speed 
  reset = 500
  
  num = Math.round(Math.random() * (10) + 5)  

  ranDir = Math.round(Math.random() * (3 - 0) + 0)  
  speed = speed + 0.4
  if (speed > 8){
    speed = 8
    // console.log('top speed');
    
    
  }
  count++
  arr[ranDir](speed, num)
  if(count > 13){
    reset = 2000
  }else if(count > 22){
    reset = 1000
  }else if(count > 50){
    
  }
  
}




function myMove() {
  start()
}
function func() {
  alert('Game Over :(. your score is :'+ score)
  location.reload();
}

