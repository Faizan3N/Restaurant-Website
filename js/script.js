(function () {
  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  var form = document.getElementById("reserveForm");
  var success = document.getElementById("formSuccess");
  var tabs = document.querySelectorAll(".menu-tab");
  var items = document.querySelectorAll(".menu-item");

  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("is-active"); });
      tab.classList.add("is-active");
      var cat = tab.getAttribute("data-cat");
      items.forEach(function (item) {
        var show = cat === "all" || item.getAttribute("data-cat") === cat;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  var dateInput = form.querySelector('input[name="date"]');
  var today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    success.hidden = false;
    form.reset();
    dateInput.min = today;
  });
})();
