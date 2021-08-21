let cards = document.getElementsByClassName('memory-cards');
for(let i = 0; i < cards.length; ++i) {
    cards[i].addEventListener('click', event => {
        onCardClicked(event.path[1]);
    });
}

let firstCard = null;
let secondCard = null;