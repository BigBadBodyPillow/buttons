//change the data tag on html
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// save to local storage
function saveThemePreference(theme) {
  localStorage.setItem("theme", theme);
}

// check theme saved in local storage
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  // if no theme saved get os default
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

window.addEventListener("DOMContentLoaded", () => {
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);
});

button = document.getElementById("theme-toggle");

if (button) {
  button.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    //toggle the css class on the button
    button.classList.toggle("dark");
    button.classList.toggle("light");

    applyTheme(newTheme);
    saveThemePreference(newTheme);
  });
}
