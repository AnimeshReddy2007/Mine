// Move "No" Button Away
document.getElementById("no-btn").addEventListener("mouseover", function () {
    let x = Math.random() * window.innerWidth * 0.6;
    let y = Math.random() * window.innerHeight * 0.6;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// Show pop-up message on hover
document.getElementById("yes-btn").addEventListener("mouseover", function () {
    document.body.classList.add("blush");
    document.getElementById("popup").style.display = "block";
});

document.getElementById("yes-btn").addEventListener("mouseout", function () {
    document.body.classList.remove("blush");
    document.getElementById("popup").style.display = "none";
});

// Falling Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let startPosX = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    heart.style.left = `${startPosX}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 300);

// Show Love Letter on "Yes" Click
document.getElementById("yes-btn").addEventListener("click", function () {
    document.getElementById("love-letter").style.bottom = "20px";
    document.getElementById("love-letter").style.opacity = "1";
    document.getElementById("cute-img").style.opacity = "0";
});

// Play/Pause Music
document.getElementById("music-btn").addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        this.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        this.innerText = "▶ Play Music";
    }
});
