let as = document.querySelectorAll("a");

as.forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.style.color = "red";
  });
  a.addEventListener("mouseout", () => {
    a.style.color = "goldenrod";
  });
});
