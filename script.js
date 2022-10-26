const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    this.classList.toggle("open");
    // this.classList.toggle("open-active");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", function (e) {
    if (e.propertyName === "flex-grow") {
      this.classList.toggle("open-active");
    }
  });
});
