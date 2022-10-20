document.onload = function () {
  document.getElementById("left");
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar-container").style.top = "0";
    document.getElementById("nav-bar-container").style.opacity = "1";
  } else {
    document.getElementById("nav-bar-container").style.top = "-10vh";
    document.getElementById("nav-bar-container").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
};
projectClick = function () {
  var div = document.getElementById("projects-container");
  div.scrollIntoView({ behavior: "smooth" });
};
function sendEmail() {}
