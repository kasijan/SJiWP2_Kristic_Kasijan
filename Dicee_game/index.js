function rand_number(){

    return Math.floor(Math.random()*6)+1

}

let rand1=rand_number();
let rand2=rand_number();
let rand3=rand_number();
let rand4=rand_number();

let rand_img_src1="./images/dice"+rand1+".png";
let rand_img_src2="./images/dice"+rand2+".png";
let rand_img_src3="./images/dice"+rand3+".png";
let rand_img_src4="./images/dice"+rand4+".png";

document.querySelectorAll("img")[0].setAttribute("src", rand_img_src1);
document.querySelectorAll("img")[1].setAttribute("src", rand_img_src2);
document.querySelectorAll("img")[2].setAttribute("src", rand_img_src3);
document.querySelectorAll("img")[3].setAttribute("src", rand_img_src4);

document.querySelectorAll("h2")[0].innerHTML=rand1+rand2
document.querySelectorAll("h2")[1].innerHTML=rand3+rand4


if(rand1+rand2>rand3+rand4){

    document.querySelector("h1").innerHTML="Player 1 won!"

}else if(rand3+rand4>rand1+rand2){
    
    
document.querySelector("h1").innerHTML="Player 2 won!"


}else{

    document.querySelector("h1").innerHTML="Draw!"

}




