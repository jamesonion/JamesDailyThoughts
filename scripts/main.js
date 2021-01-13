var toggler = document.querySelector(".menu-toggle");
var navigation = document.querySelector("navigation");

toggler.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-bars")
  e.target.classList.toggle("fa-times")
  navigation.classList.toggle("menu-close")
})

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  }
  else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
}
