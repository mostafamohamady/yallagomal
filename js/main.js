/* header */
window.onload = function () {
  var btnClose = document.getElementById("navbar-toggler-close");
  var btnToggle = document.getElementById("navbar-toggler-open");
  var overlay = document.getElementById("overlay-screen");
  btnClose.onclick = function () {
    btnToggle.click();
  };
  btnToggle.onclick = function () {
    overlay.classList.toggle("overlay-block");
  };
  overlay.onclick = function () {
    btnToggle.click();
  };
};

/* header */
