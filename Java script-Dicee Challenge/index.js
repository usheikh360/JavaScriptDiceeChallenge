
var randomNumber1 = Math.random() ;
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
// var s = "images/dice" + randomNumber1 + ".png";
// alert(s);
var randomNumber2 = Math.random() ;
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);
//-------------PREVIOUS WORKING OUT-------------
// document.querySelector("img").innerHTML = "    <img class = 'img1' src='images/dice' + randomNumber1 +'.png'>         ";
// alert("<img class='img1' src='images/dice' + randomNumber1 + '.png'>");
// document.querySelector("img").innerHTML = "<img class='img1' src='images/dice' + randomNumber1 + '.png'>";
// document.selectByClass("img1").innerHTML =  " <img class='img1' src='images/dice1.png'> ";
// <img class="img1" src="images/dice6.png">
// img1.src="<img class='img1' src='images/dice1.png";
// document.getElementByClassName(".img1")[0].innerHTML = " <img class='img1' src='images/dice1.png'> ";
// document.querySelector("img.img1")[0].innerHTML = " <img class='img1' src='images/dice1.png'> ";


// document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// document.querySelector("img.img1").setAttribute("src", "'images/dice' + randomNumber1 + '.png'");
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1>randomNumber2)
{
 document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1<randomNumber2)
{
   document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else {
 document.  querySelector("h1").innerHTML = "Draw";
}
