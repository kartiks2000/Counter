const dcr = document.querySelector(".dcr");
const inc = document.querySelector(".inc");
const reset = document.querySelector(".reset");
const screen = document.querySelector(".screen");

var i=1;
screen.innerHTML=i;

dcr.addEventListener("click",function(){
  if(i==0)
  {
    alert("cant have a negative number...");
  }
  else{
    i=i-1;
  }
  screen.innerHTML=i;
});

inc.addEventListener("click",function(){
    i=i+1;
  screen.innerHTML=i;
});

reset.addEventListener("click",function(){
  i=0;
  screen.innerHTML=i;
});