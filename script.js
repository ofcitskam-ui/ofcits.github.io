document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (greeting) {
        if (hour < 12) {
            greeting.textContent = "Good morning, welcome to TechFix";
        } else if (hour < 18) {
            greeting.textContent = "Good afternoon, welcome to TechFix";
        } else {
            greeting.textContent = "Good evening, welcome to TechFix";
        }
    }

    const serviceButton = document.getElementById("serviceButton");
    const serviceMessage = document.getElementById("serviceMessage");

    if (serviceButton && serviceMessage) {
        serviceButton.addEventListener("click", function () {
            if (serviceMessage.style.display === "block") {
                serviceMessage.style.display = "none";
                serviceButton.textContent = "View Service Message";
            } else {
                serviceMessage.style.display = "block";
                serviceButton.textContent = "Hide Service Message";
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                formResponse.textContent = "Please fill in all fields before submitting.";
                formResponse.style.color = "red";
                return;
            }

            if (!email.includes("@")) {
                formResponse.textContent = "Please enter a valid email address containing @.";
                formResponse.style.color = "red";
                return;
            }

            formResponse.textContent = "Thank you, " + name + ". Your message has been received.";
            formResponse.style.color = "green";
            contactForm.reset();
        });
    }
});
