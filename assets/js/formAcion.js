const forms = document.querySelectorAll("form");
const formSection = document.querySelector('[data-secType="formSection"]');

const musicInfo = document.querySelector('[data-secType="showSection"]');

const loader = document.getElementById("mainLoader");

const goBackBtn = document.querySelector("#goBackBtn");

Array.from(forms).map((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loader.style.display = "block";
    setTimeout(() => {
      // TODO: loader goes here
      loader.style.display = "none";
      formSection.setAttribute("hidden", true);
      musicInfo.removeAttribute("hidden");
    }, 1000);
  });
});

goBackBtn.addEventListener("click", () => {
  musicInfo.setAttribute("hidden", true);
  formSection.removeAttribute("hidden");
});
