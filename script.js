let header = document.querySelector(“header”);
let menu = document.querySelector(“#menu-icon”);
let navbar = document.querySelector(“.navbar”);
window.addEventListener(“scroll”, () => {
  header.classList.toggle(“shadow”, window.scrollY > 0);
});
menu.onclick = () => {
  navbar.classList.toggle(“active”);
};
window.onscroll = () => {
  navbar.classList.remove(“active”);
};
// Dark Mode / light mode
let darkmode = document.querySelector(“#darkmode”);
darkmode.onclick = () => {
  if (darkmode.classList.contains(“bx-moon”)) {
    darkmode.classList.replace(“bx-moon”, “bx-sun”);
    document.body.classList.add(“active”);
  } else {
    darkmode.classList.replace(“bx-sun”, “bx-moon”);
    document.body.classList.remove(“active”);
  }
};


function sendWA() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let textInput = document.getElementById('text-input');
  let mobileNumber = 256784715161;    //Enter your mobile number here

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Please Enter your Name');
		return false;
	}

	let url = `https://wa.me/${mobileNumber}?text=` + "Name: " + name.value + "%0a" + "Email ID: " + email.value + "%0a" + "Message: " + textInput.value;

	window.open(url, '_blank').focus();
}
