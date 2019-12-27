window.addEventListener("load", () => {
    const cards = createCards();
    console.log(cards);
    const availableCards = drawRandomCards(cards, 12); 
    console.log(availableCards);
    console.log(findSets(availableCards));
    // TODO: display cards
    // TODO: add ability to select sets
    // TODO: verify if selected cards are a set
    // TODO: add button to give count of available sets for displayed cards
    // TODO: replace cards when valid set is found
    // TODO: add three cards when no sets are present
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
        const randomIndex = getRandomInt(cards.length - 1);
        const drawnCardArray = cards.splice(randomIndex, 1);
        randomCards.push(drawnCardArray[0]);
    }
    return randomCards;
}

function getRandomInt(max) {
    //TODO: is this able to return 0?
    return Math.floor(Math.random() * Math.floor(max));
}

function findSets(availableCards) {
    const sets = [];
    if (availableCards.length > 2) {
        const c1 = availableCards[0];
        const remainingAvailableCards = availableCards.slice(1);
        const lowerSets = findSets(remainingAvailableCards);
        sets.concat(lowerSets || []);
        for (let x=1; x < remainingAvailableCards.length; x++) {
            const c2 = remainingAvailableCards[x];
            for (let y=x+1; y < remainingAvailableCards.length; y++) {
                c3 = remainingAvailableCards[y];
                const possibleSet = [c1, c2, c3];
                if (isSet(possibleSet)) {
                    sets.push(possibleSet);
                }
            }
        }
        return sets;
    } else {
        return false;
    }
}

function isSet(c1, c2, c3) {
    return true;
}