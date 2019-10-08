/* 
first game 
it shows you a name of a color and it has a color that yoy have to put 


setAttribute 


*/

var arr = ['Red','Black',"Green",'Blue'];
var lvl= []
var clr=[]
for(var i = 0; i< 20; i++){   
   lvl.push(arr[Math.round(Math.random() * (3 - 0) + 0)])   
}
console.log(lvl);
for(var i = 0; i< 20; i++){   
    clr.push(arr[Math.round(Math.random() * (3 - 0) + 0)])   
 }
 console.log(clr);
let $qus = document.getElementById('qus')
let $h = document.querySelector('h1') 
let $p = document.querySelector('p') 

var i = 0
var score = 0
var ans = []
let load = (function(){
   next()
})();

function next(col){
   if(i == clr.length){
       end()
   }else if(i <= clr.length){

   
   ans.push(col)
   $h.innerText = lvl[i]
   i++
   color = clr[i]
   $h.setAttribute('class', color)
   $qus.appendChild($h)
   
}else{
   $h.innerText = 'thats it:P'

}

}
function end(){
   // if(ans == clr){
   // $p.innerText ="You Won!"

   // }else{
   //    $p.innerText ="You Lost :("
   // }
   for(var i = 0; i< ans.length; i++) {
      if(ans[i] == clr[i]){
         score++ 
      }
   }
   alert("your score is "+ score)
   location.reload(true);

  

}
     

 