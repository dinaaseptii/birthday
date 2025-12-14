// efek scroll lembut + fade ketika muncul
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect().top;
        if(rect < window.innerHeight - 100){
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

const container = document.getElementById("paper-container");

function createPaper() {
    const paper = document.createElement("div");
    paper.classList.add("paper");

    paper.style.left = Math.random() * 100 + "vw";
    paper.style.animationDuration = 4 + Math.random() * 3 + "s";
    paper.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(paper);

    setTimeout(() => {
        paper.remove();
    }, 7000);
}

/* Muncul pas web dibuka */
let paperInterval = setInterval(createPaper, 150);

/* Stop setelah 6 detik (biar elegan) */
setTimeout(() => {
    clearInterval(paperInterval);
}, 6000);

const confettiContainer = document.getElementById("confetti-container");

const confettiColors = [
    "#ffffff",   // putih
    "#f3f3f3",   // abu muda
    "#e0e0e0",   // silver
    "#ffd6e8",   // pink pastel
    "#dbeafe"    // biru pastel
];

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    if (Math.random() > 0.5) {
        confetti.classList.add("round");
    }

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
        confettiColors[Math.floor(Math.random() * confettiColors.length)];

    confetti.style.animationDuration = 4 + Math.random() * 3 + "s";
    confetti.style.width = 8 + Math.random() * 6 + "px";
    confetti.style.height = 12 + Math.random() * 8 + "px";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 8000);
}

/* Jalan otomatis pas web dibuka */
let confettiInterval = setInterval(createConfetti, 120);

/* Berhenti setelah 7 detik */
setTimeout(() => {
    clearInterval(confettiInterval);
}, 7000);



document.addEventListener("DOMContentLoaded", () => {
  const confettiContainer = document.getElementById("confetti-container");
  const btn = document.getElementById("surpriseBtn");
  const loveBox = document.getElementById("loveBox");
  const closeLove = document.getElementById("closeLove");

  function launchConfetti(amount = 200) {
    for (let i = 0; i < amount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      const colors = ["#ffffff","#8ecae6","#5fa8d3","#0b1a2d"];
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.width = Math.random() * 8 + 6 + "px";
      confetti.style.height = Math.random() * 14 + 8 + "px";
      confetti.style.animationDuration =
        Math.random() * 3 + 3 + "s";

      confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 6000);
    }
  }

  btn.addEventListener("click", () => {
    launchConfetti(260);
    loveBox.classList.add("show");
  });

  closeLove.addEventListener("click", () => {
    loveBox.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("surpriseBtn");
  const loveBox = document.getElementById("loveBox");
  const closeLove = document.getElementById("closeLove");

  if (!btn || !loveBox) {
    console.error("Button atau LoveBox tidak ditemukan");
    return;
  }

  btn.addEventListener("click", () => {
    loveBox.classList.add("show");
  });

  closeLove.addEventListener("click", () => {
    loveBox.classList.remove("show");
  });
});

