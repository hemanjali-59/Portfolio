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
