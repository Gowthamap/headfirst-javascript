var count = prompt("Enter a number greater that 0:", "10");
if (count > 0){
    for(var x = count; x > 0; x--)
    alert("Starting in " + x);
    alert("Roll film");
}
else 
alert("The number wasn't greater than 0 No movie for you");



var seats = [false, true, false, true, true, true, false, true, false];
for (var i=0; i < seats.length; i++){
    if (seats[i])
    alert("Seat " +i+ " is available");
    else
    alert("Seat " +i+ " is not available")
}


