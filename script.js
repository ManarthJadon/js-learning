const fav = "scary movie";
let guess = prompt("what is my favorite movie?");

const favNormalized = fav.trim().toLowerCase();
if (guess) guess = guess.trim().toLowerCase();

while ((guess !== favNormalized) && (guess !== 'quit') && (guess !== null)) {
    guess = prompt("wrong guess — try again or type 'quit' to exit");
    if (guess) guess = guess.trim().toLowerCase();
}

if (guess === favNormalized) {
    alert('+10000 aura points granted');
}



