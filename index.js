var random1 = Math.floor((Math.random() * 6) + 1);
var random2 = Math.floor((Math.random() * 6) + 1);

if (random1 === random2)
  document.querySelector(".container h1").innerHTML = "Draw";
else if (random1 > random2)
  document.querySelector(".container h1").innerHTML = "🎉 Player1 Wins!";
else {
  document.querySelector(".container h1").innerHTML = "🎉 Player2 Wins!";
}

var source="images/dice"+random1+".png";
document.querySelector(".img1").setAttribute("src", source);

var source="images/dice"+random2+".png";
document.querySelector(".img2").setAttribute("src", source);
