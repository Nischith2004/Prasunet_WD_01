let as = document.querySelectorAll("a");
const mynavbar = document.getElementById("mynavbar");
as.forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.style.color = "red";
  });
  a.addEventListener("mouseout", () => {
    a.style.color = "black";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    mynavbar.style.backgroundColor = "rgba(200, 255, 255, 1)";
    as.forEach((a) => {
      a.style.color = "black";
    });
  }
  if (window.scrollY < 50) {
    mynavbar.style.backgroundColor = "rgba(0, 0, 0, 1)";
    as.forEach((a) => {
      a.style.color = "white";
    });
  }
});
