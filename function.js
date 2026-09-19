// Practice 2: CSS Update
function changeStyle() {
    var r = document.getElementById("red").value;
    var g = document.getElementById("green").value;
    var b = document.getElementById("blue").value;
    var w = document.getElementById("width").value;

    var box = document.getElementById("box");

    // Update border color and border width
    box.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
    box.style.borderWidth = w + "px";
}

// Practice 3: Password Verification
function validatePassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8 || pass2.length < 8) {
        alert("Password must be at least 8 characters long!");
    } else if (pass1 !== pass2) {
        alert("Passwords do not match!");
    } else {
        alert("Passwords match!");
    }
}