var seats = [false, true, false, true, true, true, false, true, false];


function initSeats() {
    // Initialize the appearance of all seats
    for (var i = 0; i < seats.length; i++) {
        if (seats[i]) {
            // Set the seat to available
            document.getElementById("seat" + i).src = "https://image.shutterstock.com/image-illustration/icon-black-circle-green-sign-600w-1862676946.jpg"
            document.getElementById("seat" + i).alt = "Available seat";
        }
        else {
            // Set the seat to unavailable
            document.getElementById("seat" + i).src = "https://m.media-amazon.com/images/I/61-IpjgiEdL._SX522_.jpg"
            document.getElementById("seat" + i).alt = "Available seat";
        }
    }
}


function findSeat() {
    var selSeat = 1
    // If seat is already selected, reinitialize all seats to clear them
    if(selSeat >= 0) {
        selSeat = -1;
        initSeats();
    }

    // Search through all the seats for availability 
    for (var i = 0; i < seats.length; i++) {
        // See if the current seat is available 
        if(seats[i]) {
            // Set the seat selection and update the appearance of the seat 
            selSeat = i;
            document.getElementById("seat" + i).src = "https://www.marutisuzuki.com/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m75lb3-250_1.jpg";
            document.getElementById("seat" + i).alt = "your seat";

            // Prompt the user to accept the seat
            var accept = confirm("Seat " + (i + 1) + " is available. Accept?");
            if (!accept) {
                // The use rejected the seat, so clear the seat selection and keep looking 
                selSeat = -1;
                document.getElementById("seat" + i).src = "https://image.shutterstock.com/image-illustration/icon-black-circle-green-sign-600w-1862676946.jpg"
                document.getElementById("seat" + i).alt = "Available seat"
            }
        }
    }
}