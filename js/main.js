document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }


  function togglePageClasses(value) {
    const lima1 = document.querySelector(".lima1");
    const lima3 = document.querySelector(".lima3");

    if (value === "lima1") {
      lima1.style.display = "flex";
      lima3.style.display = "none";
    } else if (value === "lima3") {
      lima1.style.display = "none";
      lima3.style.display = "flex";
    } else {
      lima1.style.display = "flex";
      lima3.style.display = "flex";
    }
  }

  function selectPage(event) {
    const selectedButton = event.target;
    const pageId = selectedButton.getAttribute("data-page");

    document.querySelectorAll(".btn-container button").forEach(btn => {
      btn.classList.remove("selected");
    });

    selectedButton.classList.add("selected");

    document.querySelectorAll(".page-content").forEach(page => {
      page.style.display = "none";
    });

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) pageToShow.style.display = "block";
  }

  window.togglePageClasses = togglePageClasses;
  window.selectPage = selectPage;
});
