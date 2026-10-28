// Pequeño toque interactivo: confeti de emojis al pulsar el botón
const btn = document.getElementById("surprise");
const emojis = ["🎉", "✨", "🚀", "💜", "🌈", "⭐", "🔥", "💫"];

function launchConfetti() {
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-5vh";
    piece.style.fontSize = 1 + Math.random() * 1.5 + "rem";
    piece.style.pointerEvents = "none";
    piece.style.zIndex = "999";
    piece.style.transition = "transform 2.5s ease-in, opacity 2.5s ease-in";
    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      const drift = (Math.random() - 0.5) * 40;
      piece.style.transform = `translate(${drift}vw, 110vh) rotate(${
        Math.random() * 720
      }deg)`;
      piece.style.opacity = "0";
    });

    setTimeout(() => piece.remove(), 2600);
  }
}

btn.addEventListener("click", launchConfetti);

// ¡Un saludo molón también en la consola!
console.log(
  "%c¡Hola Mundo Molón! 🚀",
  "font-size:20px;font-weight:bold;color:#00c9a7;"
);
