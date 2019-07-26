let square = document.getElementById("pdk5");

/**
 * To address issues with PDK5 sites, we replace `VideoContextChromeAndroid`
 * with `VideoContextAndroid` in PDK-related JS files. If the rewrite happens,
 * the following if would actually compare the same string, and thus would
 * change the test-square's color.
 */
if ("VideoContextChromeAndroid" == "VideoContextAndroid") {
  square.classList.remove("red");
  square.classList.add("green");
}
