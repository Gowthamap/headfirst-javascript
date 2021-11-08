function findSeat() {
    var seats = [false, true, false, true, true, true, false, true, false];
    document.getElementById("seat").src = "https://media.istockphoto.com/photos/leather-car-seat-picture-id641117244?k=20&m=641117244&s=612x612&w=0&h=e4yfZ-i3fcZZdVfIXWcRFJVmSLTERbGpKoLjQUQBDLE=";

    // Search through all the seats for availability 
    for (var i = 0; i < seats.length; i++) {
        // See if the current seat is available
        if (seats[i]) {
        // See the seat selection and update the appearance of the seat 
        var selSeat = i;
        document.getElementById("seat").src = "https://www.marutisuzuki.com/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m75lb3-250_1.jpg";
        document.getElementById("seat" + i).alt = "Your seat";
    
        // Prompt the user to accept the seat
        var accept = confirm("Seat " + (i+1) + " is available. Accept?");
        if(accept) {
            // The use accepted the seat, so we're done;
            break;
        }
        else {
            // The user rejected the seat, so clear the seat selection and keep looking 
            selSeat = -1;
            document.getElementById("seat" + i).src = "";
            document.getElementById("seat" + i).alt = "Available seat";
        }
    }
    }
}
