function validateForm() {
    let name = document.forms["applicationForm"]["name"].value;
    let email = document.forms["applicationForm"]["email"].value;
    let phone = document.forms["applicationForm"]["phone"].value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill all required fields.");
        return false;
    }

    if (phone.length != 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Application submitted successfully!");
    return true;
}
