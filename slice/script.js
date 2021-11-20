// Initialize the current scene to Scene 0 (Intro)
var curScene = 0;

function changeScene(decision) {
    // Clear the scene message
    var message = "";

    switch (curScene) {
        case 0:
            curScene = 1;
            message = "Your journey begins at a fork in the road.";
            break;
        case 1:
            if (decision == 1) {
                curScene = 2;
                message = "You have arrived at a cute little house in the swoods.";
            }
            else {
                curScene = 3;
                message = "You are standing on the bridge overlooking a peaceful stream."
            }
            break;
    }

    // Update the scene image 
    document.getElementById("sceneimg").src = "scene" + curScene + ".png";

    // Update the scene description text
    document.getElementById("scenetext").innerHTML = message;

}