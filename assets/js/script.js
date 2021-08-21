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