function filterGames() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const games = document.querySelectorAll(".game-container a");

    games.forEach(game => {
        if (game.textContent.toLowerCase().includes(searchValue)) {
            game.style.display = "flex"; // Show matching game
        } else {
            game.style.display = "none"; // Hide non-matching game
        }
    });
}
