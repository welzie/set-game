window.addEventListener("load", () => {
    const cards = createCards();
    // TODO: shuffle?
    console.log(cards);
    const drawnCards = drawRandomCards(cards, 9); 
    console.log(drawnCards);

});

function createCards() {
    const cards = [];
    const properties = {
        color: ['purple', 'green', 'red'],
        shape: ['oval', 'squiqgle', 'diamond'],
        fill: ['empty', 'shaded', 'solid'],
        count: [1, 2, 3]
    };

    let number = 0;
    properties.color.forEach( color => {
        properties.shape.forEach( shape => {
            properties.fill.forEach( fill => {
                properties.count.forEach( count => {
                    cards.push({ id: ++number, color, shape, fill,  count});
                })
            });
        });
    });
    return cards;
};

/*
 * Warning this mutates the cards array
 */
function drawRandomCards(cards, numberToDraw) {
    const randomCards = [];
    for (let i=0; i < numberToDraw; i++) {
        const randomIndex = getRandomInt(cards.length);
        const drawnCardArray = cards.splice(randomIndex, 1);
        randomCards.push(drawnCardArray[0]);
    }
    return randomCards;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
