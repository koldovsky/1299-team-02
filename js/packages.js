function init() {
    import("./packages.explore-phuket");
  }
  
  const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
  ).length;
  let loadedPartialsCount = 0;
  console.log(totalPartials);
  
  document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    console.log(loadedPartialsCount);
    if (loadedPartialsCount === totalPartials) init();
  });