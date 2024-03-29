var body = document.body,
  overlay = document.querySelector(".subs"),
  overlayBtts = document.querySelectorAll('button[class$="subs"]');

[].forEach.call(overlayBtts, function (btt) {
  btt.addEventListener(
    "click",
    function () {
      /* Detect the button class name */
      var overlayOpen = this.className === "open-subs";

      /* Toggle the aria-hidden state on the overlay and the 
    no-scroll class on the body */
      overlay.setAttribute("aria-hidden", !overlayOpen);
      body.classList.toggle("noscroll", overlayOpen);

      /* On some mobile browser when the overlay was previously
    opened and scrolled, if you open it again it doesn't 
    reset its scrollTop property */
      overlay.scrollTop = 0;
    },
    false
  );
});

sessionStorage.setItem(hasLoad, JSON.stringify(hasLoad));
var hasLoad = false;
if (!JSON.parse(sessionStorage.getItem(hasLoad))) {
  window.onload = setTimeout(function () {
    document.getElementById("firstclick").click();
    loadTrue = true;
    sessionStorage.setItem(hasLoad, JSON.stringify(loadTrue));
  }, 2500);
}
