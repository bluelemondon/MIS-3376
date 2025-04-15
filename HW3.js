/*
    Name: Raven Moore
    File: homework1.js
    Date Created: 2025-01-05
    Date Updated:2025-01-09
    Purpose: Homework1 MIS 3376
**/

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
  var fname = document.getElementById("fname").value.trim();
  var fnameError = document.getElementById("fnameError");
  fnameError.textContent = ""; // Clear previous error

  var pattern = /^[a-zA-Z'-]{1,30}$/;

  if (fname === "") {
    fnameError.textContent = "First name cannot be empty.";
    return false;
  }

  if (!pattern.test(fname)) {
    fnameError.textContent = "Only letters, apostrophes, and dashes are allowed.";
    return false;
  }

  if (fname.length < 1 || fname.length > 30) {
    fnameError.textContent = "First name must be between 1 and 30 characters.";
    return false;
  }

  return true;
}
function validateLname() {
  var lname = document.getElementById("lname").value.trim();
  var lnameError = document.getElementById("lnameError");
  lnameError.textContent = ""; // Clear previous error

  var pattern = /^[a-zA-Z'-]{1,30}$/;

  if (lname === "") {
    lnameError.textContent = "Last name cannot be empty.";
    return false;
  }

  if (!pattern.test(lname)) {
    lnameError.textContent = "Only letters, apostrophes, and dashes are allowed.";
    return false;
  }

  if (lname.length < 1 || lname.length > 30) {
    lnameError.textContent = "Last name must be between 1 and 30 characters.";
    return false;
  }

  return true;
}



function validateMinin() {
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
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
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

 function confirmPassword(form) {
           var x= document.getElementById("password");
          var y= document.getElementById("confirmPassword");

          if (x!= y) {
                alert("\nPassword did not match: Please try again...")
                return false;
                    }    
              else {
                  return true;
                   }
        }

//your example with new ids and edits
function reviewdata() {
    var formcontents = document.getElementById("careform");
    var formoutput = "Form Data:\n";
    var datatype;
    var i;

    for (i = 0; i < formcontents.elements.length; i++) {
        var element = formcontents.elements[i];
        var name = element.name;
        var value = element.value;
        datatype = element.type;

        if (value !== "") {
            switch (datatype) {
                case "checkbox":
                    if (element.checked) {
                        formoutput += `${name}: ${value} (Checked)\n`;
                    }
                    break;
                case "radio":
                    if (element.checked) {
                        formoutput += `${name}: ${value} (Selected)\n`;
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput += `${name}: ${value}\n`;
            }
        }
    }
}
    function validateAll() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }
    function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("closealert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}
    
    var iframe = document.getElementById("reviewFrame");
    iframe.style.display = "block"; 
    // Show form output in iframe
    var iframe = document.getElementById("reviewFrame");
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(formoutput);
    doc.close();
}
