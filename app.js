const btn = document.querySelector(".btn");
const lightCircle = document.querySelector(".light-circle");
initLight(lightCircle);
btn.addEventListener("click", () => {
  switchLight(lightCircle);
});
