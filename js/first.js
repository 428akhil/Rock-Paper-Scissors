let userct=0;
let compct=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#turn");
const usercount=document.querySelector("#you");
const compcount=document.querySelector("#comp");

const computerChoice=()=>{
  const arr=["rock","paper","scissors"];
  const select=Math.floor(Math.random()*3);
  return arr[select];
}
const playgame=(userChoice)=>{
  console.log("user choice =",userChoice);
  const compChoice=computerChoice();
  console.log("comp choice =",compChoice);
  wincondition(userChoice,compChoice);
}
const wincondition=(user,comp)=>{
  
  if((user=="rock" && comp=="scissor")||(user=="scissors"&&comp=="paper")||(user=="paper"&&comp=="rock"))
    {
      userct++;
      console.log("user wins!!");
      msg.innerText = `you won, comp chose ${comp}`;
      
      usercount.innerText=userct;
      msg.style.backgroundColor="green";
      
    }
    else if(user==comp){
      console.log("draw");
      msg.innerText="draw";
      msg.style.backgroundColor="black";
    }
    else{
      compct++;
      console.log("comp wins");
      msg.innerText=`you lose comp choose ${comp}`;
      compcount.innerText=compct;
      msg.style.backgroundColor="red";
    }
}


choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    console.log("clicked!",userChoice);
    playgame(userChoice);
  });
});