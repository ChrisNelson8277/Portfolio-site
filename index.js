var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar-real-container").style.top = "0";
    document.getElementById("nav-bar-real-container").style.opacity = "1";
  } else {
    document.getElementById("nav-bar-real-container").style.top = "-10vh";
    document.getElementById("nav-bar-real-container").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
};
projectClick = function () {
  var div = document.getElementById("projects-container");
  div.scrollIntoView({ behavior: "smooth" });
};

navClick = function (click) {
  var div2 = document.getElementById("nav-hamburger");
  if (div2.style.display === "none") {
    div2.style.display = "flex";
  } else {
    div2.style.display = "none";
  }
};
function sendEmail() {}
