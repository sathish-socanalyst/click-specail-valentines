const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

// Make NO button run away 😄
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// YES button works ❤️
yesBtn.addEventListener("click", function() {
    document.querySelector(".question").style.display = "none";
    result.classList.remove("hidden");
});

// Play music on first click 🎵
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play();
    }
}, { once: true });
