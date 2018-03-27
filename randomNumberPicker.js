var randomNumber = prompt("Pick a random number!");
var playersNumber = parseInt(randomNumber);
console.log(playersNumber);

var randomNumber2 = Math.floor( Math.random() * (playersNumber)) +1;
alert(randomNumber2);