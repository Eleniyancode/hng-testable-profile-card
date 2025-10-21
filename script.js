const timeElement = document.getElementById("time-display");

function displayTime() {
  setInterval(() => {
    const currentTime = Date.now();
    if (timeElement) timeElement.textContent = `${currentTime}s`;
  }, 1000);
}

displayTime();

//form validation
const form = document.querySelector("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const emailErrorMsg = document.getElementById("email-error");
const fullNameErrorMsg = document.querySelector(".error-name-message");
const subjectErrorMsg = document.querySelector(".error-subject-message");
const messageErrorMsg = document.querySelector(".error-message-message");

const modal = document.getElementById("successModal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeModal");

// //email input validation logic
// function emailValidation() {
//   // Regular expression for email validation as per HTML specification
//   const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

//   // Check if the email is valid
//   const isValidEmail = () => {
//     const validity =
//       emailEl.value.length !== 0 && emailRegExp.test(emailEl.value);
//     return validity;
//   };

//   // Update email input class based on validity
//   const setEmailClass = (isValid) => {
//     emailEl.className = isValid ? "valid" : "invalid";
//   };

//   // Update error message and visibility
//   const updateError = (isValid) => {
//     if (isValid) {
//       emailErrorEl.textContent = "";
//       emailErrorEl.removeAttribute("class");
//     } else {
//       emailErrorEl.textContent = "Please enter a valid email address";
//       emailErrorEl.setAttribute("class", "active");
//     }
//   };

//   // Handle input event to update email validity
//   const handleInput = () => {
//     const validity = isValidEmail();
//     setEmailClass(validity);
//     updateError(validity);
//   };

//   // explicitly set the valid/invalid class on our email field
//   const validity = isValidEmail();
//   setEmailClass(validity);

//   // This defines what happens when the user types in the field
//   emailEl.addEventListener("input", handleInput);
// }

// emailValidation();

form.addEventListener("submit", function (e) {
  //prevent default behaviour of the form
  e.preventDefault();

  //clear all previous error message
  fullNameErrorMsg.textContent = "";
  emailErrorMsg.textContent = "";
  subjectErrorMsg.textContent = "";
  messageErrorMsg.textContent = "";

  let isValid = true;
  //Regular expression for email validation as per HTML specification
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  // Fullname validation
  if (fullName.value.trim() === "") {
    fullNameErrorMsg.textContent = "Full name is required";
    fullName.classList.add("invalid");
    isValid = false;

    setTimeout(() => {
      fullNameErrorMsg.textContent = "";
      isValid = false;
      fullName.classList.remove("invalid");
    }, 2000);
  }

  // Email validation
  if (email.value.trim() === "") {
    emailErrorMsg.textContent = "Email is required";
    isValid = false;
    email.classList.add("invalid");

    setTimeout(() => {
      emailErrorMsg.textContent = "";
      isValid = false;
      email.classList.remove("invalid");
    }, 2000);
  } else if (!emailRegExp.test(email.value.trim())) {
    emailErrorMsg.textContent = "Enter a valid email (name@example.com)";
    isValid = false;
    email.classList.add("invalid");

    setTimeout(() => {
      emailErrorMsg.textContent = "";
      isValid = false;
      email.classList.remove("invalid");
    }, 2000);
  }

  // Subject validation
  if (subject.value.trim() === "") {
    subjectErrorMsg.textContent = "Subject is required";
    isValid = false;
    subject.classList.add("invalid");

    setTimeout(() => {
      subjectErrorMsg.textContent = "";
      isValid = false;
      subject.classList.remove("invalid");
    }, 2000);
  }

  // Message validation
  if (message.value.trim() === "") {
    messageErrorMsg.textContent = "Message is required";
    isValid = false;

    setTimeout(() => {
      messageErrorMsg.textContent = "";
      isValid = false;
      message.classList.remove("invalid");
    }, 2000);
  } else if (message.value.trim().length < 10) {
    messageErrorMsg.textContent = "Message must be at least 10 characters long";
    isValid = false;

    setTimeout(() => {
      messageErrorMsg.textContent = "";
      isValid = false;
      message.classList.remove("invalid");
    }, 2000);
  }

  // If all valid
  if (isValid) {
    console.log("Form Submitted");
    modal.classList.add("active");
    overlay.classList.add("active");
    form.reset();
  }
});

// Close modal and overlay
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
