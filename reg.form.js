let name = document.getElementById("name")
let nameerror = document.getElementById("nameerror")

let address = document.getElementById("address")
let adderror = document.getElementById("adderror")

let email = document.getElementById("email")
let emailerror = document.getElementById("emailerror")

let male = document.getElementById("male")
let female = document.getElementById("female")
let gendererror = document.getElementById("gendererror")

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let password = document.getElementById("password")
let passerror = document.getElementById("passerror")
let getpassword = document.getElementById("password")

let confpassword = document.getElementById("confpassword")
let confpasserror = document.getElementById("confpasserror")
let getconfpassword = document.getElementById("confpassword")

let mobile = document.getElementById("mobile")
let moerror = document.getElementById("moerror")
let mo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

let cbtest = document.getElementById("cbtest-19")
let tcerror = document.getElementById("tcerror")

let course = document.getElementById("course")

let submit = document.getElementById("submit")
let reset = document.getElementById("reset")

function regForm() {
    if (name.value == "") {
        // document.getElementById("usererror").innerHTML = "enter your name"
        nameerror.innerHTML = "Please enter your name"
        event.preventDefault()
    }
    else {
        document.getElementById("nameerror").innerHTML = ""
    }

    if (address.value == "") {
        adderror.innerHTML = "Please enter your Address"
        event.preventDefault()
    }
    else {
        document.getElementById("adderror").innerHTML = ""
    }

    if (email.value == "") {
        emailerror.innerHTML = "Please Enter Your Email"
        event.preventDefault()
    }

    else {
        document.getElementById("emailerror").innerHTML = ""
    }

    if (male.checked == false && female.checked == false) {
        document.getElementById("gendererror").innerHTML = "Please select your gender"
        event.preventDefault()
    }
    else {
        gendererror.innerHTML = ""
    }

    if (password.value == "") {
        passerror.innerHTML = 'Please enter your password'
        event.preventDefault()
    }
    else if (password.value.length < 8) {
        passerror.innerHTML = 'Value must be more than 8 letters'
        event.preventDefault()
    }
    else if (password.value != '') {
        if (password.value.search(/[0-9]/) == -1) {
            passerror.innerHTML = 'Include atleast 1 numeric value'
            event.preventDefault()
        }
        else if (password.value.search(/[a-z]/) == -1) {
            passerror.innerHTML = 'Include atleast 1 lowercase character'
            event.preventDefault()
        }
        else if (password.value.search(/[A-Z]/) == -1) {
            passerror.innerHTML = 'Include atleast 1 uppercase character'
            event.preventDefault()
        }
        else if (password.value.search(/[!\@\#\$\%\^\&\*]/) == -1) {
            passerror.innerHTML = 'Include atleast 1 special symbol from this (!,@,#,$,%,^,&,*)'
            event.preventDefault()
        }
        else {
            passerror.innerHTML = 'Valid password'
        }
    }
    else {
        passerror = innerHTML = ''
    }

    if (confpassword.value == "") {
        confpasserror.innerHTML = 'Please Re-enter your password'
        event.preventDefault()
    }
    else if (confpassword.value != password.value) {
        confpasserror.innerHTML = 'Password not matches'
        event.preventDefault()
    }
    else {
        confpasserror.innerHTML = 'Password is matches';
    }

    if (mobile.value == "") {
        moerror.innerHTML = "Please Enter Your Mobile Number"
        event.preventDefault()
    }
    else if (isNaN(mobile.value)) {
        moerror.innerHTML = "Enter only Numeric value"
        event.preventDefault()
    }
    else if (mobile.value.length < 10) {
        moerror.innerHTML = "Enter 10 digit Mobile number"
        event.preventDefault()
    }
    else {
        moerror.innerHTML = ""
    }

    if (course.value == "") {
        courseerror.innerHTML = "Please choose your course"
        event.preventDefault()
    }
    else {
        courseerror.innerHTML = ""
    }

    if (cbtest.checked == true) {
        document.getElementById("tcerror").innerHTML = ""
    }
    else {
        document.getElementById("tcerror").innerHTML = "Please accept T & C"
        event.preventDefault()
    }
}

function toggleVisibility() {
    if (getpassword.type === "password") {
        getpassword.type = "text";
    }
    else {
        getpassword.type = "password";
    }

    if (getconfpassword.type === "password") {
        getconfpassword.type = "text";
    }
    else {
        getconfpassword.type = "password";
    }
}
