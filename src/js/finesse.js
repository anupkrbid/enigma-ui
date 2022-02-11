const finesse = {
  toggleSidebar: function (sidebarRef) {
    const element = document.querySelector(sidebarRef);

    if (window.getComputedStyle(element).display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  },
  openModal: function (modalRef) {
    document.querySelector(modalRef).classList.add("modal-active");
  },
  closeModal: function (modalRef) {
    document.querySelector(modalRef).classList.remove("modal-active");
  },
  toastTimeout: null,
  showToastNotification: function (toastRef) {
    document.querySelector(toastRef).classList.add("toast-active");
    this.toastTimeout = setTimeout(() => {
      this.hideToastNotification(toastRef);
      clearTimeout(this.toastTimeout);
    }, 3000);
  },
  hideToastNotification: function (toastRef) {
    document.querySelector(toastRef).classList.remove("toast-active");
    clearTimeout(this.toastTimeout);
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
