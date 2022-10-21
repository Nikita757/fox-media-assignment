const scrollUpButton = document.getElementById('scroll-up-btn');
scrollUpButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const scrollProgress = document.documentElement || document.body;

document.addEventListener("scroll", () => {
    if (scrollProgress.scrollTop > 1000) {
        scrollUpButton.classList.remove("fade");
        scrollUpButton.disabled = false;
    } else {
        scrollUpButton.classList.add("fade");
        scrollUpButton.disabled = true;
    }
});
