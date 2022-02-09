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
