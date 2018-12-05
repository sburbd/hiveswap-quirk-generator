window.addEventListener("resize", mobileCheck);

function mobileCheck() {
  if (window.innerWidth <= 700) {
     window.location = "/hiveswap-quirk-generator/mobile.html"
   } else {
    window.location = "/"
 }
}
