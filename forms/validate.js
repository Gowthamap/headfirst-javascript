function validateLength(minLength, maxLength, inputField, helpText) {

    inputField = document.getElementById("input")
    helpText = "helptext"
    // See if the input value contains at least at minLength but no more than maxLength characters
    if(inputField.value.length < minLength || inputField.value.length > maxLength) {
        // The data is invalid, so set the help message
        if (helpText != null)
           let total = helpText.innerHTML = "Please enter a value " + minLength + " to " + maxLength+ " characters in length";
        return false;
    }
    else {
        // The data is OK, so clear the help message
        if (helpText != null) 
            helpText = "";
            return true;
    }

}