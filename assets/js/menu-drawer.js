/**
 * Portfolio slide-out menu: Home, About Me, plus one link per module.
 *
 * When you add a module:
 *   1. Create the HTML page in /modules/
 *   2. Append { href: "your-page.html", label: "Official module title" } to MODULES below.
 *
 * Works from site root, /modules/*.html, and nested paths like /modules/artefacts/*.html.
 */
(function () {
  var UL_ID = "portfolio-menu-links";

  /** @type {{ href: string, label: string }[]} */
  var MODULES = [
    { href: "launch-into-computing.html", label: "Launch into Computing" },
  ];

  /**
   * Path segments after `/modules/`, e.g. `["launch-into-computing.html"]` or
   * `["artefacts", "lit-week6.html"]`.
   */
  function modulePathParts(pathname) {
    var p = (pathname || "").replace(/\\/g, "/");
    var marker = "/modules/";
    var i = p.indexOf(marker);
    if (i === -1) return null;
    var after = p.slice(i + marker.length);
    return after.split("/").filter(Boolean);
  }

  function buildMenu() {
    var ul = document.getElementById(UL_ID);
    if (!ul) return;

    var p = (window.location.pathname || "").replace(/\\/g, "/");
    var parts = modulePathParts(p);
    var inModulesTree = parts !== null;

    var root;
    var moduleLinkPrefix;

    if (!inModulesTree) {
      root = "";
      moduleLinkPrefix = "modules/";
    } else {
      root = "../".repeat(parts.length);
      moduleLinkPrefix = parts.length > 1 ? "../".repeat(parts.length - 1) : "";
    }

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
      add(moduleLinkPrefix + m.href, m.label);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildMenu);
  } else {
    buildMenu();
  }
})();
