// let decision = 0;

// if (decision == 1) 
// curScene = 2;
// else 
// curScene = 3;

// console.log(curScene);

// let chosenDoor = prompt("Enter a chosenDoor");

// if (chosenDoor == "A") {
//     prize = "donuts";
//     alert("You won a box of donuts!")
// } 
// else {
//     prize = "pet rock";
//     alert("You won a pet rock!")
// }

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