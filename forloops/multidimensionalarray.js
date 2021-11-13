var seats = [[ false, true, false, true, true, true, false, true, false ],
[ false, true, false, false, true, false, true, true, true ],
[ true, true, true, true, true, true , false, true, false ],
[ true, true, true, false, true, false, false, true, false ]];

for (var i=0;i<seats.length;i++) {
    for (var j=0; j<seats[i].length;j++) {
        if (seats[i][j])
            console.log("Seat "+ i + " In row" +j+ " is available");
        else 
            console.log("Seat "+ i + " in row" + " is not available");
    }
}