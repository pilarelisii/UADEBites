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

  // Remover clase "selected" de todos los botones
  document.querySelectorAll(".btn-container button").forEach(btn => {
    btn.classList.remove("selected");
  });

  // Agregar clase "selected" al clickeado
  selectedButton.classList.add("selected");

  // Ocultar todas las páginas
  document.querySelectorAll(".page-content").forEach(page => {
    page.style.display = "none";
  });

  // Mostrar la página correspondiente
  const pageToShow = document.getElementById(pageId);
  if (pageToShow) pageToShow.style.display = "block";
}


