function validateZIPCode(inputField, helpText) {
    console.log("funtion execute succefully");


    inputField = document.getElementById("input")
    helpText = document.getElementById("helpText")

    
    // First see if the input value length is anything other than 5
    if (inputField.value.length != 5) {
        // The data is invalid, so set the help message
        if (helpText != null)
            helpText.innerHTML = "Please enter exactly five digits."
            return false;
            // console.log("First condition is true");
    }
    // Then see if the input value is a number
    else if (isNaN(inputField.value)) {
        // The data is invalid, so set the help message 
        if (helpText != null)
            helpText.innerHTML = "Please enter a number.";
            return false;
    }
    else {
        // The data is ok, so clear the help message
        if (helpText != null)
            helpText.innerHTML = "";
            return true;
    }
    
}
