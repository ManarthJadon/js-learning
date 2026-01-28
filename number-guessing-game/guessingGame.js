const max = Number(prompt("Enter the Max range"));
console.log(max);

let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    guess = Number(guess);

    if (guess === random) {
        alert("You guessed the number!");
        break;
    } else if (guess > random) {
        guess = prompt("Too high! Try again or type 'quit'");
    } else if (guess < random) {
        guess = prompt("Too low! Try again or type 'quit'");
    } else {
        guess = prompt("Invalid input. Try again or type 'quit'");
    }
}


