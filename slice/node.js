function nodeval() {

    var node = document.getElementById("story");
    
    while (node.firstChild)
        node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode("OK, maybe you are alone."))
}



function changeScene() {

    document.getElementById("decision2").style.visibility = "visible";
    document.getElementById("decision2").style.visibility = "hidden";

}
