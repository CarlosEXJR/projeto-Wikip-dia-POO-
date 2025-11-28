document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            console.log("Card clicado:", card.textContent.trim());
            // Não impede o redirecionamento.
        });
    });
});