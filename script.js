const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

// Move NO button when mouse comes near
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// YES button shows success message
yesBtn.addEventListener("click", function() {
    document.querySelector(".question").style.display = "none";
    result.classList.remove("hidden");
});
