const assert = require('assert');
const { createCards, drawRandomCards, findSets } = require('../set-game.js');

describe("card mechanics work", function() {

  it("creates deck", function(){
    const cards = createCards();
    assert.strictEqual(81, cards.length);
    // TODO: validate that correct amount of each type were created
  });

  it("drawing random cards", function() {
    const deck = createCards();
    const availableCards = drawRandomCards(deck, 12);
    assert.strictEqual(12, availableCards.length);
    assert.strictEqual(69, deck.length);
  });

  

});
