//BONUS 
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

//digits are rejected.
const NAME_PATTERN = /^[A-Za-z\s'-]+$/;


const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;


function checkName(value) {
    if (value === "") return "Please enter your full name.";
    if (value.length < 2) return "Your name is too short.";
    if (!NAME_PATTERN.test(value)) return "A name cannot contain numbers or symbols.";
    return "";
}

function checkEmail(value) {
    if (value === "") return "Please enter your email address.";
    if (!EMAIL_PATTERN.test(value)) return "Please enter a valid email, like you@example.com.";
    return "";
}

function checkSubject(value) {
    if (value === "") return "Please enter a subject.";
    if (value.length < 3) return "The subject is too short.";
    return "";
}

function checkMessage(value) {
    if (value === "") return "Please enter your message.";
    if (value.length < 10) return "Your message should be at least 10 characters.";
    return "";
}

// Every field, with the box that shows its error and the rule it must pass.
const fields = [
    { input: document.getElementById("name"), error: document.getElementById("nameError"), check: checkName },
    { input: document.getElementById("email"), error: document.getElementById("emailError"), check: checkEmail },
    { input: document.getElementById("subject"), error: document.getElementById("subjectError"), check: checkSubject },
    { input: document.getElementById("message"), error: document.getElementById("messageError"), check: checkMessage }
];

// Shows or clears the error of one field, and says whether it passed.
function validateField(field) {
    const message = field.check(field.input.value.trim());
    field.error.textContent = message;
    field.input.classList.toggle("invalid", message !== "");
    return message === "";
}

// Once a field is marked red, re-check it while the user types so the error
// disappears as soon as it is fixed.
fields.forEach(function (field) {
    field.input.addEventListener("input", function () {
        if (field.input.classList.contains("invalid")) {
            validateField(field);
        }
    });
});

form.addEventListener("submit", function (event) {
    // There is no server behind this page, so the browser must not send anything.
    event.preventDefault();

    // Check every field, and remember the first one that failed.
    let firstInvalid = null;
    fields.forEach(function (field) {
        const valid = validateField(field);
        if (!valid && firstInvalid === null) {
            firstInvalid = field.input;
        }
    });

    if (firstInvalid !== null) {
        formStatus.textContent = "Please fix the fields marked in red.";
        formStatus.className = "status failure";
        firstInvalid.focus();
        return;
    }

    formStatus.textContent = "Thanks! Your message has been sent.";
    formStatus.className = "status success";
    form.reset();
});