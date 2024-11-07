// Yazı elemanını seç
const profileText = document.querySelector(".profile-text");

// Kaydırma olayını dinle
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const threshold = 150; // Yazının kaybolacağı kaydırma mesafesi

    // Kaydırma mesafesi belirli bir değeri geçerse yazıyı gizle
    if (scrollPosition > threshold) {
        profileText.style.opacity = "0"; // Yazıyı gizle
    } else {
        profileText.style.opacity = "1"; // Yazıyı göster
    }
});