let cards = document.getElementsByClassName('memory-cards');
for(let i = 0; i < cards.length; ++i) {
    cards[i].addEventListener('click', event => {
        onCardClicked(event.path[1]);
    });
}

let firstCard = null;
let secondCard = null;

function onCardClicked(card){
    if(firstCard == null)
        handleFirstCard(card);
    else if(secondCard == null)
        handleSecondCard(card);
    else
    handleFlipBoth();
}

function handleFirstCard(card) {
    if(isFace(Card))
        return;

    firstCard = card;
    flip(card);
}

function handleSecondCard(card) {
    if(isFace(Card))
        return;

    flip(card);
    if(firstCard.classList[1] === card.classList[1])
        firstCard = null;
    else
        secondCard = Card;
}