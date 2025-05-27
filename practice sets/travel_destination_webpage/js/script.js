document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("beInspired");
    const dropdown = document.getElementById("dropdownContent");
  
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });
  
    document.addEventListener("click", function () {
      dropdown.classList.remove("show");
    });
  });
  