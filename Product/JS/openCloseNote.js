var hasScroll = false;
function ShowDiv() {
  document.getElementById("slider-note").style.height = "50vh";
  document.getElementById("buttonClose").style.display = "block";
  document.getElementById("slider-note").style.overflow = "auto";
  if (!hasScroll) {
    var urlParams = new URLSearchParams(window.location.search);
    var key = urlParams.get("key");
    document
      .getElementById(key)
      .scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
  }
  hasScroll = true;
}
function closeDiv() {
  document.getElementById("slider-note").style.overflow = "hidden";
  document.getElementById("slider-note").style.height = "50px";
  document.getElementById("buttonClose").style.display = "none";
  //document.getElementById("slider-note").scrollTop = 0;
}
