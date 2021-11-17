function validateNonEmpty(inputField) {

    inputField = document.getElementById("input").value
    // See if the input value contains any text
    if (inputField.length == 0) {
        // The datat is invalid, so notify the user 
        alert("Please enter a value.");
        return false;
    } else 
        return true;

}