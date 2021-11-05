let decision = 0;

if (decision == 1) 
curScene = 2;
else 
curScene = 3;

console.log(curScene);

let chosenDoor = prompt("Enter a chosenDoor");

if (chosenDoor == "A") {
    prize = "donuts";
    alert("You won a box of donuts!")
} 
else {
    prize = "pet rock";
    alert("You won a pet rock!")
}



let curScene = 1;
decision = 2;

if (curScene == 0) {
    curScene = 1;
    message = "Your journey begins at a fork in the road";
}
else if (curScene == 1) {
    if (decision == 1) {
        curScene = 2;
        message = "You have arrived at a cute little house in the wood";
    }
    else{
        curScene = 3;
        message = "You are standing on the bridge overlooking a peaceful stream"
    }
}

console.log(message);

if (curScene != 6) {
    alert("Thankfully, you haven't been eaten by the troll")
}



let a = 10;
let b = 30;
let c = 5;
let d = false;
var quote = "";

if (a != 10)
quote += "Some guy";
else
quote += "I";
if (b == (a * 3)) {
    if (c < (b / 6))
    quote += " don't care for";
    else if (c >= (b / 5))
    quote += " can't remember";
    else 
    quote += " love";
}
else {
    quote += " really hates";
}
if (!d) {
    quote += " Stick Figure";
}
else {
    quote += " Rock, Paper, Scissors";
}

alert(quote + " Adventure")




// Nested if else statements
let chosenCase = "A";

if (chosenCase == "A") 
console.log("opencase('A')");
else if (chosenCase == "B")
console.log("opencase('B')"); 
else if (chosenCase == "C")
console.log("opencase('C')"); 
else if (chosenCase == "D")
console.log("opencase('D')"); 
else if (chosenCase == "E") 
console.log("opencase('E')"); 
