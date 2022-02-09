const finesse = {
  toggleSidebar: function (sidebarRef) {
    const element = document.querySelector(sidebarRef);

    if (window.getComputedStyle(element).display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  },
};

// event lister to handle dropdown click
document.addEventListener("click", ($event) => {
  // chh if dropdown was clicked
  const isDropdownTriggered = $event.target.matches("[data-dropdown-trigger]");
  const closestTriggeredDropdown = $event.target.closest("[data-dropdown]");

  // if user clicked inside  a dropdown or didn't click on a dropdown then ignore
  if (!isDropdownTriggered && closestTriggeredDropdown !== null) {
    return;
  }

  // if drop down was triggered add active class
  if (isDropdownTriggered) {
    closestTriggeredDropdown.classList.toggle("dropdown-active");
  }

  // remove activ class from already opened dropdowns
  document
    .querySelectorAll("[data-dropdown].dropdown-active")
    .forEach((dropdown) => {
      if (dropdown === closestTriggeredDropdown) {
        return;
      }
      dropdown.classList.remove("dropdown-active");
    });
});
