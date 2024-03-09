const darkMode = () => {
  // Select all elements with the id "theme-toggle"
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // Retrieve the theme preference from local storage
  const theme = localStorage.getItem("theme");

  // Apply the theme class to the body element if a theme preference exists
  theme && document.body.classList.add(theme);

  // Define a function to handle toggling between light and dark modes
  const handleToggleTheme = (btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
      } else {
        localStorage.removeItem("theme");
      }
    });
  };

  // Attach click event listeners to all theme toggle buttons
  themeToggleBtns.forEach((btn) => handleToggleTheme(btn));
};

export default darkMode;
