const mobileNav = () => {
  // Select elements
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  // Event listener for toggling mobile navigation
  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    toggleMobileNav();
  });

  // Event listeners for mobile navigation links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      toggleMobileNav();
    });
  });

  // Function to toggle mobile navigation visibility and body overflow
  const toggleMobileNav = () => {
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  };
};

export default mobileNav;
