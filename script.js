const profileText = document.querySelector(".profile-text");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const threshold = 150; 
    if (scrollPosition > threshold) {
        profileText.style.opacity = "0"; 
    } else {
        profileText.style.opacity = "1";
    }
});