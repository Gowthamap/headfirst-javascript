var seats = [true, false, true, false, true, false]
var i = 0, finished = false;
while((i<seats.length) && !finished) {
    // See if the current seat plus the next two seats are available
    if (seats[i] && seats[i+1] && seats[i+2]) {
        // Set the seat selection and update the appearance of the seats

        // Prompt the user to accept the seats
        var accept = confirm("Seats " + (i+1) + " through " + (i+3) + 
        " are available. Accept?");
        if (accept) {
            // The user accepted the seats, so we're done
            finished = true;
        }
        else {
            // The user rejected the seats, so clear the seat selection and keep looking 
        }
    }
    // Increment the loop counter
    i++;
}