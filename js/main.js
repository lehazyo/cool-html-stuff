const tabs = document.querySelectorAll(".prikols-tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    const target = event.target;

    const id = target.getAttribute("data-page");

    const open = document.querySelectorAll("[data-open]");
    open.forEach((entity) => {
      entity.removeAttribute("data-open");
    });

    const toOpen = document.querySelectorAll(`[data-page="${id}"]`);
    toOpen.forEach((entity) => {
      entity.setAttribute("data-open", "");
    });
  });
});