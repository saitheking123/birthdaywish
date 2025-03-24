document.addEventListener("DOMContentLoaded", function() {
    let card = document.querySelector(".card");
    let profile = document.querySelector(".profile");
    let song = document.getElementById("birthdaySong");
    let playMusicBtn = document.getElementById("playMusic");
    let fireworksBtn = document.getElementById("fireworks");

    // Flip Card Animation
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
        setTimeout(() => {
            profile.classList.remove("hidden");
        }, 500);
    });

    // Play Birthday Song
    playMusicBtn.addEventListener("click", function() {
        if (song.paused) {
            song.play();
            playMusicBtn.textContent = "⏸ Pause Music";
        } else {
            song.pause();
            playMusicBtn.textContent = "🎵 Play Music";
        }
    });

    // Fireworks Surprise
    fireworksBtn.addEventListener("click", function() {
        alert("🎆 Fireworks 🎇 Happy Birthday, Sai!");
    });

    // Create Raindrops
    function createRaindrops() {
        const rainContainer = document.querySelector('.rain-container');

        for (let i = 0; i < 100; i++) {
            let drop = document.createElement("div");
            drop.classList.add("raindrop");
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = (Math.random() * 2 + 1) + "s";
            rainContainer.appendChild(drop);
        }
    }

    createRaindrops();
});
