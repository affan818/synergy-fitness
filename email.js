// Initialize Email.js with your Public Key
// synergyfitnessnagpur@gmail.com   email id
(function () {
  emailjs.init("kJ9GeF_5A5oWlhA5P"); // Replace with your actual Public Key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let branch = document.querySelector('input[name="branch"]:checked')?.value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let city = document.getElementById("city").value;

    // EmailJS parameters
    let Params = {
      branch: branch,
      name: name,
      email: email,
      contact: contact,
      city: city,
    };

    // Send email using Email.js
    emailjs
      .send("service_vrami45", "template_y7csqrj", Params)
      .then((response) => {
        window.location.replace("thankyou.html");
        document.getElementById("contact-form").reset(); // Clear form after success
      })
      .catch((error) => {
        alert("Error sending email: " + error);
      });
  });
