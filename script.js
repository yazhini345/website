function SendMail() {
    // Retrieve values from the form fields
    var fromName = document.getElementById("fullname").value;
    var emailId = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all required fields are filled
    if (!fromName || !emailId || !message) {
        alert("Please fill out all required fields.");
        return; // Exit the function if any field is empty
    }
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(emailId)) {
        alert("Please enter a valid Gmail address ending with @gmail.com.");
        return; // Exit the function if email does not match pattern
    }

    // Create parameters object
    var params = {
        from_name: fromName,
        email_id: emailId,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_7zn0qcn", "template_7mpiev5", params)
        .then(function (res) {
            alert("Success: " + res.status);
        })
        .catch(function (error) {
            alert("Error: " + error.text);
        });
}

