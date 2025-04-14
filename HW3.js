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
function show1() {
  var x = document.getElementById("socialsec");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      emailError.innerHTML = "Email cannot be blank.";
      return false;
    } else if (!emailR.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      return false;
    } else {
      emailError.innerHTML = "";
      alert("Email is valid!");
      return true;
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

document.getElementById("username").addEventListener("input", function () {
  this.value = this.value.replace(/\s+/g, '').toLowerCase();
});
// https://www.geeksforgeeks.org/password-matching-using-javascript/
 function checkPassword(form) {
           var x= document.getElementById("password");
          var y= document.getElementById("confirmPassword");

          if (x!= y) {
                alert("\nPassword did not match: Please try again...")
                return false;
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
    var iframe = document.getElementById("reviewFrame");
    iframe.style.display = "block"; 
    // Show form output in iframe
    var iframe = document.getElementById("reviewFrame");
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(formoutput);
    doc.close();
}
