/**
 * Portfolio slide-out menu: Home, About Me, plus one link per module.
 *
 * When you add a module:
 *   1. Create the HTML page in /modules/
 *   2. Append { href: "your-page.html", label: "Official module title" } to MODULES below.
 *
 * Paths are computed automatically from site root vs /modules/.
 */
(function () {
  var UL_ID = "portfolio-menu-links";

  /** @type {{ href: string, label: string }[]} */
  var MODULES = [
    { href: "launch-into-computing.html", label: "Launch into Computing" },
  ];

  function inModulesFolder() {
    var p = (window.location.pathname || "").replace(/\\/g, "/");
    return p.indexOf("/modules/") !== -1;
  }

  function buildMenu() {
    var ul = document.getElementById(UL_ID);
    if (!ul) return;

    var root = inModulesFolder() ? "../" : "";
    var modPrefix = inModulesFolder() ? "" : "modules/";

    ul.innerHTML = "";

    function add(href, label) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = href;
      a.textContent = label;
      li.appendChild(a);
      ul.appendChild(li);
    }

    add(root + "index.html", "Home");
    add(root + "about.html", "About Me");
    MODULES.forEach(function (m) {
      add(modPrefix + m.href, m.label);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildMenu);
  } else {
    buildMenu();
  }
})();
