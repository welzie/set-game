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
