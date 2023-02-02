const backgroundAboutGame = document.getElementById("about-game");
const aboutGameContainer = document.getElementById("about-game-container");
// About Game Pop-up
function closeAboutGame() {
    aboutGameContainer.style.opacity = "0";
    backgroundAboutGame.style.opacity = "0";
    setTimeout(() => {
        backgroundAboutGame.style.zIndex = "-100";
    }, 1000);
};

function openAboutGame() {
    backgroundAboutGame.style.zIndex = "200";
    aboutGameContainer.style.opacity = "1";
    backgroundAboutGame.style.opacity = "1";
};