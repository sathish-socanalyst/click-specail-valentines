/* Typing Effect */
const text = "Bhavi ❤️";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}
typing();

/* Runaway NO button 😈 */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* YES clicked 🎉 */
document.getElementById("yesBtn").addEventListener("click", () => {
    document.querySelector(".question").style.display = "none";
    document.getElementById("result").classList.remove("hidden");
});

/* Play music on first click */
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });

/* Floating Hearts Animation */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() + 0.5
    });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.size / 2, 0, Math.PI * 2);
        ctx.fill();

        h.y -= h.speed;
        if (h.y < 0) h.y = canvas.height;
    });

    requestAnimationFrame(drawHearts);
}
drawHearts();
