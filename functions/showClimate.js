function showClimateMsg() {
   return (constructClimateMsg());
}

function constructClimateMsg() {

    var msg = "";
    msg += "Local";

    if (getTemp() > 80)
    msg += " warming ";
    else 
    msg += " cooling ";

    msg += "is ";

    if (getTemp() <=70)
    console.log(msg + "a hoax!");
    else
    console.log(msg + "real");

}

function getTemp() {
    // Read the actual temperature
    var actualTemp = 81;
    return actualTemp;
}

showClimateMsg();





