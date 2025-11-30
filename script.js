const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
  // Default to dark mode
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else if (currentTheme === "dark-mode") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  let theme = "light";
  if (body.classList.contains("dark-mode")) {
    theme = "dark-mode";
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
});

// Handle "Other" option in dropdowns
const handleOtherOption = (selectId, inputId) => {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);

  if (select && input) {
    select.addEventListener("change", () => {
      if (select.value === "other") {
        input.classList.remove("hidden");
        input.required = true;
      } else {
        input.classList.add("hidden");
        input.required = false;
        input.value = "";
      }
    });
  }
};

handleOtherOption("province", "province-other");
handleOtherOption("nationality", "nationality-other");
