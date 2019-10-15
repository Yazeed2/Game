// q learning 
// var fs = require('fs'); 


let score = 0
// code from stack overflow 
function showCoords(event) {

  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  // console.log(coor);

}
var reset = 2500


// end of code from stack overflow 
function add() {
  score++
  $score = document.querySelector('h1')
  $score.innerText = score
  // console.log(score);

}
let left = function (velocity, num) {
  let upper = [30]

  // console.log('here');
  // var elem = document.querySelectorAll(sss".animate");

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
let bottom = function (velocity, num) {
  let upper = [30]

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
let right = function (velocity, num) {
  let upper = [30]

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
let fook = function (velocity, num) {
  let upper = [30]

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

let speed = 4;
let count = 0
function start() {

  var arr = [fook, bottom, left, right];
  let vel = 1360 / speed
  if (score < 200) {
    reset = 2000




    num = Math.round(Math.random() * (10) + 5)

    ranDir = Math.round(Math.random() * (3 - 0) + 0)
    speed = speed + 0.4
    if (speed > 12) {
      speed = 12
      // console.log('top speed');


    }
    count++
    arr[ranDir](speed, num)
    if (score > 50) {
      reset = 2000
    } else if (score > 100) {
      reset = 1000
    }
  } else if (score >= 200) {
    ranDir = Math.round(Math.random())
    console.log(ranDir);
    num = Math.round(Math.random() * (10) + 5)
    $elem = document.createElement('div')
    $elem.setAttribute("class", "obc");
    document.body.appendChild($elem)
    $elem.addEventListener("mouseover", func);

    $elem.style.top = 200 + "px";
    $elem.style.left = 200 + "px";


    $elem = document.createElement('div')
    $elem.setAttribute("class", "obc");
    document.body.appendChild($elem)
$elem.addEventListener("mouseover", func);
$elem.style.top = 200 + "px";
$elem.style.left = 200 + "px";


    if (ranDir == 1) {
      fook(speed, num)
      bottom(speed, num)
      
      console.log('top');
      
    } else {
      left(speed, num)
      right(speed, num)
      console.log('bottom');
      
    }

  }

}
function begin() {

  setInterval(
    start, reset
  );
  setInterval(add, 110)

}



function myMove() {
  start()
}
function func() {

  var fs = require('fs')

  scorethis('123')
  // alert('Game Over :(. your score is :'+ score)
  location.reload();
}


function scorethis(score) {
  var logger = fs.createWriteStream('db.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })

  logger.write(score)
  console.log(score + '---------------')
}
