/*
    Name: Raven Moore
    File: homework1.js
    Date Created: 2025-01-05
    Date Updated:2025-01-09
    Purpose: Homework1 MIS 3376
**/
/*got resources from misso but heavily edited them to do what I wanted using online learning resources like W3.
no code except the misso template was directly copied unless direct credit shown*/
//from w3schools
document.getElementById("today").innerHTML = new Date().toLocaleDateString();
const today = new Date();
const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
// Format the dates to 'YYYY-MM-DD'
const minDateString = minDate.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
const maxDateString = maxDate.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
// Set the min and max attributes for the date input
document.getElementById('DOB').setAttribute('min', minDateString);
document.getElementById('DOB').setAttribute('max', maxDateString);

//end of w3 schools
function show1() {
  var x = document.getElementById("socialsec");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function show2() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function show3() {
  var x = document.getElementById("confirmPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validateFname() {
  return validateNameField("firstname", "fname-error");
}

function validateLname() {
  return validateNameField("lastname", "lname-error");
}

// Shared logic for both
function validateNameField(fieldId, errorId) {
  var name = document.getElementById(fieldId).value.trim();
  var errorDisplay = document.getElementById(errorId);
  errorDisplay.textContent = "";

  var namePattern = /^[a-zA-Z'-]{1,30}$/;

  if (name === "") {
    errorDisplay.textContent = "This field cannot be empty.";
    return false;
  }
  if (!namePattern.test(name)) {
    errorDisplay.textContent = "Only letters, apostrophes, and dashes are allowed.";
    return false;
  }

  if (name.length < 1 || name.length > 30) {
    errorDisplay.textContent = "Must be between 1 and 30 characters.";
    return false;
  }

  return true;
}

function validateMidin() {
    let mini = document.getElementById("middleinit").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("middleinit").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("midin-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("midin-error").innerHTML = "";
        return true;
    }
}

function validateSsn() {
    const ssn = document.getElementById("socialsec").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid 9 digit SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
function validateDob() {
    dob = document.getElementById("DOB");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Invalid date(cannot be more than 120 years old";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateAddr1() {
    var address = document.getElementById("addr1").value.trim();
    var addressError = document.getElementById("addr1-error");
    addressError.textContent = "";
    var pattern = /^[a-zA-Z0-9\s.,#-]{5,50}$/;

    if (address === "") {
        addressError.textContent = "Address cannot be empty.";
        return false;
    }

    if (!pattern.test(address)) {
        addressError.textContent = "Invalid characters in address.";
        return false;
    }

    if (address.length < 5 || address.length > 50) {
        addressError.textContent = "Address must be 5–50 characters.";
        return false;
    }

    return true;
}

function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}
function validateZcode() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById("username").addEventListener("input", function () {
  this.value = this.value.replace(/\s+/g, '').toLowerCase();
});
// https://www.geeksforgeeks.org/password-matching-using-javascript/
function validateUsername() {
    uid = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      emailError.innerHTML = "Email cannot be blank.";
      return false;
    } 
    else if (!emailR.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      return false;
    }
    else {
          return true;
    }
  }
function validatePassword() {
    var uid = document.getElementById("username").value;
    var pword = document.getElementById("password").value;
    var errorMessage = [];
    var errorDisplay = document.getElementById("pwordErrors");

    errorDisplay.innerHTML = ""; // clear previous errors

    // Validation rules
    if (!pword.match(/[a-z]/)) {
      errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pword.match(/[A-Z]/)) {
      errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pword.match(/[0-9]/)) {
      errorMessage.push("Enter at least one number");
    }
    if (!pword.match(/[!\@#\$%&*\-_\\.\+\(\)]/)) {
      errorMessage.push("Enter at least one special character");
    }
    if (pword.includes(uid) && uid !== "") {
      errorMessage.push("Password can't contain username");
    }
    if (errorMessage.length > 0) {
      for (var i = 0; i < errorMessage.length; i++) {
        var li = document.createElement("li");
        li.textContent = errorMessage[i];
        errorDisplay.appendChild(li);
      }
      return false; 
    }
    else{
        return true;
    }
}

 function validateconfirmPassword() {
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirmPassword").value;

  var error = document.getElementById("pword2-error");

  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

// COOKIE FUNCTIONS
function setCookie(cname, cvalue, expDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var cookieId = cname + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieId) == 0) {
            return decodeURIComponent(cookie.substring(cookieId.length, cookie.length));
        }
    }
    return "";
}
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

// WRAP COOKIE LOGIC IN DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  const inputs = [
    { id: "firstname", cookieId: "firstname" },
    { id: "lastname",  cookieId: "lastname"  },
    { id: "DOB",       cookieId: "DOB"       },
    { id: "username", cookieId: "username" },
    { id: "email",    cookieId: "email"    },
    { id: "password", cookieId: "password" }
  ];

  inputs.forEach(function (input) {
    var el = document.getElementById(input.id);
    if (!el) return;
    var val = getCookie(input.cookieId);
    if (val) el.value = val;
    el.addEventListener("input", function () {
      setCookie(input.cookieId, el.value, 30);
    });
  });

  var firstName = getCookie("firstName");
  if (firstName) {
    document.getElementById("welgreet1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welgreet2").innerHTML =
      "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";
    document.getElementById("new-user").addEventListener("click", function () {
      inputs.forEach(function (input) {
        setCookie(input.cookieId, "", -1);
      });
      location.reload();
    });
  }

  document.getElementById("save-info").addEventListener("change", function () {
    if (!this.checked) {
      deleteAllCookies();
      console.log("Cookies deleted; 'Save-info' is unchecked.");
    } else {
      inputs.forEach(function (input) {
        var elm = document.getElementById(input.id);
        if (elm && elm.value.trim() !== "") {
          setCookie(input.cookieId, elm.value, 30);
        }
      });
      console.log("Save-info is checked; cookies enabled.");
    }
  });
});
