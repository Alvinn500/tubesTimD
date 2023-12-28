const arrow = document.getElementById("arrow");
const close = document.getElementById("xIcon");
const profile = document.getElementById("profile");

arrow.addEventListener("click", () => {
  profile.classList.remove("translate-x-[-100vw]");
});

close.addEventListener("click", () => {
  profile.classList.add("translate-x-[-100vw]");
});
