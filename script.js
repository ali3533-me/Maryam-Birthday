// ==========================================
// 🎉 START YOUR SURPRISE
// ==========================================

function startCelebration() {
    const surprise = document.getElementById("surprise");

    if (surprise) {
        surprise.scrollIntoView({
            behavior: "smooth"
        });
    }

    createConfetti();
    fireworks();

    // Start music after the user clicks
    playMusic();
}


// ==========================================
// 🎉 CONFETTI
// ==========================================

function createConfetti() {
    const symbols = ["❤️", "💕", "💖", "💗", "✨", "🎉", "🎊"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}


// ==========================================
// 🎆 FIREWORKS
// ==========================================

function fireworks() {

    const colors = [
        "#ff1744",
        "#ffd700",
        "#ff69b4",
        "#00ffff",
        "#ffffff",
        "#ff8c00"
    ];

    for (let explosion = 0; explosion < 8; explosion++) {

        setTimeout(() => {

            const x = Math.random() * 80 + 10;
            const y = Math.random() * 45 + 10;

            const color =
                colors[Math.floor(Math.random() * colors.length)];

            for (let i = 0; i < 45; i++) {

                const particle = document.createElement("div");

                particle.style.position = "fixed";
                particle.style.width = "5px";
                particle.style.height = "5px";
                particle.style.borderRadius = "50%";
                particle.style.background = color;

                particle.style.boxShadow =
                    `0 0 8px ${color}, 0 0 15px ${color}`;

                particle.style.left = x + "vw";
                particle.style.top = y + "vh";

                particle.style.zIndex = "10000";
                particle.style.pointerEvents = "none";

                document.body.appendChild(particle);

                const angle = (Math.PI * 2 * i) / 45;
                const distance = Math.random() * 130 + 50;

                const moveX = Math.cos(angle) * distance;
                const moveY = Math.sin(angle) * distance;

                particle.animate(
                    [
                        {
                            transform: "translate(0,0) scale(1)",
                            opacity: 1
                        },
                        {
                            transform:
                                `translate(${moveX}px,${moveY}px) scale(0)`,
                            opacity: 0
                        }
                    ],
                    {
                        duration: 1400,
                        easing: "cubic-bezier(.1,.7,.3,1)"
                    }
                );

                setTimeout(() => {
                    particle.remove();
                }, 1400);
            }

        }, explosion * 650);
    }
}


// ==========================================
// 🎂 CANDLE
// ==========================================

function blowCandle() {

    const flame = document.getElementById("flame");
    const wishMessage = document.getElementById("wishMessage");

    if (flame) {
        flame.classList.add("off");
    }

    if (wishMessage) {
        wishMessage.classList.add("show");
    }

    createConfetti();
    fireworks();
}


// ==========================================
// 💌 LOVE LETTER TYPEWRITER
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const loveLetter = document.querySelector(".love-letter");
    const loveLetterButton =
        document.getElementById("loveLetterBtn");

    if (loveLetter && loveLetterButton) {

        const paragraphs = loveLetter.querySelectorAll("p");

        loveLetterButton.addEventListener("click", function () {

            loveLetter.classList.add("show");

            if (loveLetter.classList.contains("typing-started")) {
                return;
            }

            loveLetter.classList.add("typing-started");

            paragraphs.forEach(function (paragraph) {
                paragraph.style.visibility = "hidden";
            });

            let paragraphIndex = 0;

            function typeParagraph() {

                if (paragraphIndex >= paragraphs.length) {
                    return;
                }

                const paragraph = paragraphs[paragraphIndex];
                const text = paragraph.textContent.trim();

                paragraph.textContent = "";
                paragraph.style.visibility = "visible";

                let characterIndex = 0;

                function typeCharacter() {

                    if (characterIndex < text.length) {

                        paragraph.textContent +=
                            text.charAt(characterIndex);

                        characterIndex++;

                        setTimeout(typeCharacter, 35);

                    } else {

                        paragraphIndex++;

                        setTimeout(typeParagraph, 700);
                    }
                }

                typeCharacter();
            }

            setTimeout(typeParagraph, 500);
        });
    }
});


// ==========================================
// ⏳ BIRTHDAY COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        8,
        11,
        0,
        0,
        0
    );

    if (now >= birthday) {

        birthday = new Date(
            now.getFullYear() + 1,
            8,
            11,
            0,
            0,
            0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement)
        daysElement.textContent = String(days).padStart(2, "0");

    if (hoursElement)
        hoursElement.textContent = String(hours).padStart(2, "0");

    if (minutesElement)
        minutesElement.textContent = String(minutes).padStart(2, "0");

    if (secondsElement)
        secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ==========================================
// 🎵 MUSIC
// ==========================================

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");


function playMusic() {

    if (!birthdayMusic) {
        console.log("Music element not found.");
        return;
    }

    birthdayMusic.play()
        .then(function () {

            if (musicBtn) {
                musicBtn.textContent = "⏸️ Pause Music";
            }

        })
        .catch(function (error) {

            console.log("Music could not play:", error);

        });
}


function pauseMusic() {

    if (!birthdayMusic) {
        return;
    }

    birthdayMusic.pause();

    if (musicBtn) {
        musicBtn.textContent = "🎵 Play Music";
    }
}


if (musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (birthdayMusic.paused) {
            playMusic();
        } else {
            pauseMusic();
        }

    });
}


// ==========================================
// ⭐ STARS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const starsContainer =
        document.querySelector(".stars");

    if (starsContainer) {

        for (let i = 0; i < 100; i++) {

            const star =
                document.createElement("div");

            star.classList.add("star");

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 3 + "s";

            starsContainer.appendChild(star);
        }
    }
});


// ==========================================
// ❤️ FLOATING HEARTS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const heartsContainer =
        document.getElementById("hearts-container");

    if (!heartsContainer) {
        return;
    }

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        const hearts = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💘"
        ];

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        const size =
            Math.random() * 20 + 15;

        heart.style.fontSize =
            size + "px";

        const duration =
            Math.random() * 4 + 5;

        heart.style.animationDuration =
            duration + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);
    }

    setInterval(createHeart, 500);

});


// ==========================================
// 🌹 FALLING ROSE PETALS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const petalsContainer =
        document.getElementById("petals-container");

    if (!petalsContainer) {
        return;
    }

    function createRosePetal() {

        const petal =
            document.createElement("div");

        petal.className = "rose-petal";

        petal.textContent = "🌹";

        petal.style.left =
            Math.random() * 100 + "vw";

        const size =
            Math.random() * 20 + 15;

        petal.style.fontSize =
            size + "px";

        const duration =
            Math.random() * 5 + 5;

        petal.style.animationDuration =
            duration + "s";

        petalsContainer.appendChild(petal);

        setTimeout(function () {
            petal.remove();
        }, duration * 1000);
    }

    setInterval(createRosePetal, 600);

});


// ==========================================
// ✨ EXTRA ROMANTIC SPARKLES
// ==========================================

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.textContent = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 95 + "vw";
    sparkle.style.top = Math.random() * 90 + "vh";

    sparkle.style.fontSize =
        Math.random() * 15 + 10 + "px";

    sparkle.style.zIndex = "9997";
    sparkle.style.pointerEvents = "none";

    sparkle.style.animation =
        "sparkleAnimation 1.5s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(function () {
        sparkle.remove();
    }, 1500);
}

setInterval(createSparkle, 1200);


// ==========================================
// 📸 PHOTO LIGHTBOX
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages =
        document.querySelectorAll(".gallery-card img");

    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            const lightbox =
                document.createElement("div");

            lightbox.className =
                "photo-lightbox";

            const largeImage =
                document.createElement("img");

            largeImage.src = this.src;
            largeImage.alt = this.alt;

            const closeButton =
                document.createElement("button");

            closeButton.className =
                "lightbox-close";

            closeButton.textContent = "✕";

            lightbox.appendChild(largeImage);
            lightbox.appendChild(closeButton);

            document.body.appendChild(lightbox);
// ==========================================
// 🪄 3D PHOTO TILT EFFECT
// ==========================================

lightbox.addEventListener("mousemove", function (event) {

    const rect = largeImage.getBoundingClientRect();

    // Mouse position inside the photo
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Convert mouse position to percentage
    const percentX = mouseX / rect.width;
    const percentY = mouseY / rect.height;

    // Calculate rotation
    const rotateY = (percentX - 0.5) * 16;
    const rotateX = (0.5 - percentY) * 16;

    largeImage.style.setProperty("--rotateX", rotateX + "deg");
    largeImage.style.setProperty("--rotateY", rotateY + "deg");
});

lightbox.addEventListener("mouseleave", function () {

    largeImage.style.setProperty("--rotateX", "0deg");
    largeImage.style.setProperty("--rotateY", "0deg");

});

            closeButton.addEventListener("click", function () {
                lightbox.remove();
            });

            lightbox.addEventListener("click", function (event) {

                if (event.target === lightbox) {
                    lightbox.remove();
                }

            });

        });

    });

});


// ==========================================
// ✨ SPARKLE ANIMATION
// ==========================================

const sparkleStyle =
document.createElement("style");

sparkleStyle.textContent = `
@keyframes sparkleAnimation {
    0% {
        opacity: 0;
        transform: scale(0.3) rotate(0deg);
    }

    30% {
        opacity: 1;
        transform: scale(1.2) rotate(90deg);
    }

    100% {
        opacity: 0;
        transform: scale(0) rotate(180deg);
    }
}
`;

document.head.appendChild(sparkleStyle);
// ==========================================
// 💕 HEARTS WHEN PHOTO OPENS
// ==========================================

document.addEventListener("click", function (event) {

    if (event.target.matches(".gallery-card img")) {

        for (let i = 0; i < 15; i++) {

            const heart = document.createElement("div");

            heart.textContent = ["❤️", "💕", "💖", "💗", "✨"][
                Math.floor(Math.random() * 5)
            ];

            heart.style.position = "fixed";
            heart.style.left = "50%";
            heart.style.top = "50%";
            heart.style.fontSize =
                Math.random() * 15 + 15 + "px";

            heart.style.zIndex = "100001";
            heart.style.pointerEvents = "none";

            document.body.appendChild(heart);

            const x =
                (Math.random() - 0.5) * 500;

            const y =
                (Math.random() - 0.5) * 500;

            heart.animate(
                [
                    {
                        transform: "translate(-50%, -50%) scale(0)",
                        opacity: 0
                    },
                    {
                        transform:
                            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`,
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(calc(-50% + ${x * 1.3}px), calc(-50% + ${y * 1.3}px)) scale(0.5)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1800,
                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                heart.remove();
            }, 1800);
        }
    }

});
/* ==========================================
🌟 ONE LAST SURPRISE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const finalButton = document.getElementById("lastSurpriseBtn");
    const finalMessageBox = document.getElementById("finalMessage");

    if (!finalButton) {
        return;
    }

    finalButton.addEventListener("click", function () {

        // Show final message
        if (finalMessageBox) {
            finalMessageBox.classList.add("show");
        }

        // Change button text
        finalButton.textContent = "🎆 You Are My Everything ❤️";

        // Start music
        const finalMusic = document.getElementById("birthdayMusic");

        if (finalMusic) {
            finalMusic.play().catch(function () {
                console.log("Music waiting for user interaction.");
            });
        }

        // Start fireworks and hearts
        finalFireworks();
        finalHearts();

        setTimeout(finalFireworks, 700);
        setTimeout(finalFireworks, 1400);
        setTimeout(finalFireworks, 2200);

    });


    // ==========================================
    // 🎆 FINAL FIREWORKS
    // ==========================================

    function finalFireworks() {

        const symbols = [
            "✨",
            "💖",
            "💕",
            "⭐",
            "❤️"
        ];

        for (let i = 0; i < 30; i++) {

            const particle = document.createElement("div");

            particle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            particle.style.position = "fixed";
            particle.style.left = Math.random() * 100 + "vw";
            particle.style.top = Math.random() * 70 + "vh";
            particle.style.fontSize =
                Math.random() * 18 + 14 + "px";

            particle.style.pointerEvents = "none";
            particle.style.zIndex = "999999";

            document.body.appendChild(particle);

            const moveX =
                (Math.random() - 0.5) * 350;

            const moveY =
                (Math.random() - 0.5) * 350;

            particle.animate(
                [
                    {
                        transform: "scale(0)",
                        opacity: 0
                    },
                    {
                        transform: "scale(1.4)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(${moveX}px, ${moveY}px) scale(.2)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1800,
                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                particle.remove();
            }, 1800);
        }
    }


    // ==========================================
    // ❤️ FINAL FLOATING HEARTS
    // ==========================================

    function finalHearts() {

        for (let i = 0; i < 25; i++) {

            const heart = document.createElement("div");

            heart.textContent = [
                "❤️",
                "💕",
                "💖",
                "💗"
            ][Math.floor(Math.random() * 4)];

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-40px";
            heart.style.fontSize =
                Math.random() * 20 + 20 + "px";

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "999998";

            document.body.appendChild(heart);

            const duration =
                Math.random() * 2500 + 3000;

            heart.animate(
                [
                    {
                        transform: "translateY(0) scale(.5)",
                        opacity: 0
                    },
                    {
                        transform: "translateY(-50vh) scale(1.2)",
                        opacity: 1
                    },
                    {
                        transform: "translateY(-110vh) scale(.7)",
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                heart.remove();
            }, duration);
        }
    }

});