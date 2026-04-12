const cards = document.querySelectorAll(".card");

// SCROLL ANIMATION
function animateCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateCards);
animateCards();


// SEARCH
document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});