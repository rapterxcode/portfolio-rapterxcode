(function () {
  try {
    var saved = localStorage.getItem("portfolio-theme");
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      if (meta) meta.setAttribute("content", "dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      if (meta) meta.setAttribute("content", "light");
    }
  } catch {
    // Ignore storage access errors in restricted browsing modes
  }
})();
