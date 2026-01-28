document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     VIEW MORE / VIEW LESS HANDLER
  ============================ */

  const viewMoreButtons = document.querySelectorAll(".view-more-btn");

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {

      const hiddenContainer = button.parentElement.querySelector(".hidden-container");
      if (!hiddenContainer) return;

      if (hiddenContainer.classList.contains("show")) {
        // fade out
        hiddenContainer.classList.remove("show");

        // wait for opacity then hide
        setTimeout(() => {
          hiddenContainer.style.display = "none";
        }, 200);

        button.textContent = "View More";

      } else {
        // show first, then fade in
        hiddenContainer.style.display = "block";

        setTimeout(() => {
          hiddenContainer.classList.add("show");
        }, 20);

        button.textContent = "View Less";
      }
    });
  });


  /* ============================
     CURSOR TRACKING DOT
  ============================ */

  const cursorDot = document.getElementById("cursor-dot");

  if (cursorDot) {
    document.addEventListener("mousemove", (e) => {
      cursorDot.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
    });
  }

});
