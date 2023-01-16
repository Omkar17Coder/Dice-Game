
// conctenation can be used to add other elements
// in the image.

var al=Math.floor((Math.random()*6))+1;

var randomImage1="images/dice"+ al +".png";
var bl=Math.floor((Math.random())*6)+1;
var randomImage2="images/dice"+bl+".png";

if(al>bl){
document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(al<bl){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";



}
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);





