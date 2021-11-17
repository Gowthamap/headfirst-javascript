// chosenCase = "c"

// switch (chosenCase) {

//     case "A":
//        console.log("opencase('A')");
//         break;
//     case "B":
//         console.log("opencase('B')");       
//         break;
//     case "C":
//         console.log("opencase('C')");
//         break;
//     case "D":
//         console.log("opencase('D')");
//         break;
//     case "E":
//         console.log("opencase('E')");
//         break;
//     default:
//         console.log("Not a valid statement you have entered");
//         break;

// }  


let curScene = 0;
let message = "";
let decision = 1;
switch(curScene) {
    
    case 0:
        curScene = 1;
        message = "Your journey begins at a fork in the road";
        console.log(message);
        break;
    case 1:
        if (decision == 1) {
            curScene = 2;
            message = "You have arrived at a cute little house in the woods";
        }
        else {
            curScene = 3;
            message = "You are standing on the bridge overlooking a peaceful stream";
        }
        console.log(message);
        break;

}