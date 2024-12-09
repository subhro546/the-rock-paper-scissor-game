let audio1 = new Audio("Ding Sound Effect.mp3");
let audio2 = new Audio("Samsung low battery sound effect.mp3");
let cnt1=0
let cnt2 = 0;
let humcnt = document.querySelector(".humcount");
humcnt.textContent = `your score is :${cnt1}`;

let compcnt = document.querySelector(".compcount");
compcnt.textContent = `A.I score is :${cnt2}`;

let chose = document.querySelector(".chose");

function rockres(){
    let y =(Math.random()*3);
    console.log(y);
    if( y>2){
        document.body.setAttribute("style","background:lime");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio1.play();
        cnt1=cnt1+1;
        humcnt.textContent = `your score is :${cnt1}`;
        chose.setAttribute("src" , "scissors.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
    if(y>1 && y<=2){
        document.body.setAttribute("style","background:red");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio2.play();
        cnt2=cnt2+1;
        compcnt.textContent = `A.I score is :${cnt2}`;
        chose.setAttribute("src" , "paper.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
    if(y<=1){
        document.body.removeAttribute("style");
        chose.setAttribute("src" , "rock.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
}
function paperres(){
    let y =(Math.random()*3);
    console.log(y);
    if( y>2){
        document.body.setAttribute("style","background:red");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio2.play();
        cnt2=cnt2+1;
        compcnt.textContent = `A.I score is :${cnt2}`;
        chose.setAttribute("src" , "scissors.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
    if(y>1 && y<=2){
        document.body.removeAttribute("style");
        chose.setAttribute("src" , "paper.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");

    }
    if(y<=1){
        document.body.setAttribute("style","background:lime");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio1.play();
        cnt1=cnt1+1;
        humcnt.textContent = `your score is :${cnt1}`;
        chose.setAttribute("src" , "rock.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
}
function scissorres(){
    let y =(Math.random()*3);
    console.log(y);
    if( y>2){
        document.body.removeAttribute("style");
        chose.setAttribute("src" , "scissors.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
    if(y>1 && y<=2){
        document.body.setAttribute("style","background:lime");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio1.play();
        cnt1=cnt1+1;
        humcnt.textContent = `your score is :${cnt1}`;
        chose.setAttribute("src" , "paper.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
    if(y<=1){
        document.body.setAttribute("style","background:red");
        setTimeout(()=>{document.body.removeAttribute("style")} ,2000);
        audio2.play();
        cnt2=cnt2+1;
        compcnt.textContent = `A.I score is :${cnt2}`;
        chose.setAttribute("src" , "rock.png");
        chose.setAttribute("style" , "width:170px ; height:200px;");
    }
}
function reset(){
    cnt1=0;
    humcnt.textContent = `your score is :${cnt1}`;
    cnt2=0;
    compcnt.textContent = `A.I score is :${cnt2}`;
    chose.removeAttribute("src");
    chose.removeAttribute("style");
}


const rock= document.querySelector(".rock");

rock.addEventListener("click" , rockres);

const paper= document.querySelector(".paper");

paper.addEventListener("click" , paperres);

const scissor= document.querySelector(".scissor");

scissor.addEventListener("click" , scissorres);

let btn = document.querySelector(".btn");
btn.addEventListener("click" , reset);

