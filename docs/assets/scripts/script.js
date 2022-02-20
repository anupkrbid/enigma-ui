function download() {
  var cssFilePath = "/src/css/enigma.css";
  var recetCssFilePath = "/src/css/reset.css";
  var cssVaraibleFilePath = "/src/css/variables.css";
  var jsFilePath = "/src/js/enigma.js";

  Promise.all([
    fetch(cssFilePath).then((res) => res.text()),
    fetch(recetCssFilePath).then((res) => res.text()),
    fetch(cssVaraibleFilePath).then((res) => res.text()),
    fetch(jsFilePath).then((res) => res.text()),
  ]).then(([cssContent, resetCssContent, cssVariablesContent, jsContent]) => {
    debugger;
    var cssEl = document.createElement("a");
    var resetCssEl = document.createElement("a");
    var variablesCssEl = document.createElement("a");
    var jsEl = document.createElement("a");

    cssEl.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(cssContent)
    );
    resetCssEl.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(resetCssContent)
    );
    variablesCssEl.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " +
        encodeURIComponent(cssVariablesContent)
    );
    jsEl.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(jsContent)
    );

    cssEl.setAttribute("download", "enigma.css");
    resetCssEl.setAttribute("download", "reset.css");
    variablesCssEl.setAttribute("download", "variables.css");
    jsEl.setAttribute("download", "enigma.js");

    document.body.appendChild(cssEl);
    document.body.appendChild(resetCssEl);
    document.body.appendChild(variablesCssEl);
    document.body.appendChild(jsEl);

    cssEl.click();
    resetCssEl.click();
    variablesCssEl.click();
    jsEl.click();

    document.body.removeChild(cssEl);
    document.body.removeChild(resetCssEl);
    document.body.removeChild(variablesCssEl);
    document.body.removeChild(jsEl);
  });
}
