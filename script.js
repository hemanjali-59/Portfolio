// Tabs script
var tabdetails = document.getElementsByClassName("tabdetails");
var tabdata = document.getElementsByClassName("tabdata");
function opentab(tabname) {
  for (tab of tabdetails) {
    tab.classList.remove("act");
  }
  for (tabda of tabdata) {
    tabda.classList.remove("act");
  }
  event.currentTarget.classList.add("act");
  document.getElementById(tabname).classList.add("act");
}
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hemanjali";
  let index = 0;
  let isDeleting = false;
  const typingSpeed = 150; // Typing speed
  const deletingSpeed = 100; // Deleting speed
  const delayBetweenCycles = 1000; // Pause before restarting
  const spanElement = document.querySelector(".headertext h1 span");

  function typeEffect() {
    if (!isDeleting) {
      // Typing effect
      if (index <= text.length) {  // Change from < to <= to fully print last letter
        updateText(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenCycles); // Wait before deleting
      }
    } else {
      // Deleting effect
      if (index >= 0) {  // Ensure full deletion before restarting
        updateText(index);
        index--;
        setTimeout(typeEffect, deletingSpeed);
      } else {
        isDeleting = false;
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  function updateText(endIndex) {
    let part1 = text.substring(0, Math.min(4, endIndex)); // "Hema"
    let part2 = text.substring(4, endIndex); // "njali"
    spanElement.innerHTML = `<span style="color: white">${part1}</span><span style="color: #8a5c1c">${part2}</span>`;
  }

  typeEffect(); // Start animation
});

// sidebar
var side = document.getElementById("sidebar");
function openside() {
  side.style.right = "0";
}
function closeside() {
  side.style.right = "-200px";
}

// contact
const contact = document.getElementById("con"),
  contactMessage = document.getElementById("contactmessage");
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_47ghg1m",
      "template_cv8hu35",
      "#con",
      "pevG53MoG92QrOufC"
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    });
  contact.reset();
};
contact.addEventListener("submit", sendEmail);
