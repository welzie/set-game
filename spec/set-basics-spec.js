const assert = require('assert');
const { createCards, drawRandomCards, findSets, isSet } = require('../set-game.js');

describe("set logic", function() {

  it("creates deck", function(){
    const cards = createCards();
    assert.strictEqual(cards.length, 81);
    // TODO: validate that correct amount of each type were created
  });

  it("drawing random cards", function() {
    const deck = createCards();
    const availableCards = drawRandomCards(deck, 12);
    assert.strictEqual(availableCards.length, 12);
    assert.strictEqual(deck.length, 69);
  });

  it("correct determines if cards differing by one property are set", function() {
    const cards = validSets.differInCount;
    assert.strictEqual(isSet(cards[0], cards[1], cards[2]), true);
  });

  it("two cards matching on a property are not set", function() {
    const cards = inValidSets.twoHaveSameColor;
    assert.strictEqual(isSet(cards[0], cards[1], cards[2]), false);
  });

  const validSets = {
    // color: ['purple', 'green', 'red'],
    // shape: ['oval', 'squiqgle', 'diamond'],
    // fill: ['empty', 'shaded', 'solid'],
    // count: [1, 2, 3]
    differInCount: [
      { id: 1, color: 'red', shape: 'oval', fill: 'solid',  count: 1},
      { id: 2, color: 'red', shape: 'oval', fill: 'solid',  count: 2},
      { id: 3, color: 'red', shape: 'oval', fill: 'solid',  count: 3}
    ],
    differInCountAndColor: [
      { id: 1, color: 'red', shape: 'oval', fill: 'solid',  count: 1},
      { id: 2, color: 'green', shape: 'oval', fill: 'solid',  count: 2},
      { id: 3, color: 'purple', shape: 'oval', fill: 'solid',  count: 3}
    ]
  };

  const inValidSets = {
    twoHaveSameColor: [
      { id: 1, color: 'red', shape: 'oval', fill: 'solid',  count: 1},
      { id: 2, color: 'red', shape: 'oval', fill: 'solid',  count: 2},
      { id: 3, color: 'purple', shape: 'oval', fill: 'solid',  count: 3}
    ]
  }; 

});
