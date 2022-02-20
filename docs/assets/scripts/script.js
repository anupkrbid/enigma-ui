function download() {
  var cssFile = "https://finesse-ui.netlify.app/src/css/finesse.css";
  var jsFile = "https://finesse-ui.netlify.app/src/js/finesse.js";
  var cssEl = document.createElement("a");
  var jsEl = document.createElement("a");

  cssEl.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(cssFile)
  );
  jsEl.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(jsFile)
  );

  cssEl.setAttribute("download", "enigma.css");
  jsEl.setAttribute("download", "enigma.js");

  document.body.appendChild(cssEl);
  document.body.appendChild(jsEl);

  cssEl.click();
  jsEl.click();

  document.body.removeChild(cssEl);
  document.body.removeChild(jsEl);
}
