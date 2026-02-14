const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

/* NO moves ONLY after clicking */
noBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});

/* YES works */
yesBtn.addEventListener("click", function () {
    document.querySelector(".question").style.display = "none";
    result.classList.remove("hidden");
});

/* Play music on first click */
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    if (music) music.play();
}, { once: true });
