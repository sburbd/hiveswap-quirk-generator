window.addEventListener("resize", mobileCheck);

function mobileCheck() {
  if (window.innerWidth <= 700) {
     window.location = "/mobile.html"
   } else {
    window.location = "/"
 }
}
