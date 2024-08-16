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
  console.log("aghgbhnj");
  if (window.scrollY > 50) {
    console.log("aghgbhnj");
  } else {
    mynavbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
});
