let as = document.querySelectorAll("a");
const mynavbar = document.getElementById("mynavbar");
as.forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.style.color = "red";
  });
  a.addEventListener("mouseout", () => {
    a.style.color = "goldenrod";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    mynavbar.style.backgroundColor = "rgba(200, 255, 255, 1)";
  } else {
    mynavbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
});
