const assert = require('assert');
const { createCards, drawRandomCards, isSet, createSubsets } = require('../set-game.js');

describe("set logic", function() {

  it("creates deck", function(){
    const cards = createCards();
    assert.strictEqual(cards.length, 81);

    assert.strictEqual(cards.filter( c => c.color === 'purple').length, 27);
    assert.strictEqual(cards.filter( c => c.color === 'red').length, 27);
    assert.strictEqual(cards.filter( c => c.color === 'green').length, 27);

    assert.strictEqual(cards.filter( c => c.shape === 'oval').length, 27);
    assert.strictEqual(cards.filter( c => c.shape === 'squiggle').length, 27);
    assert.strictEqual(cards.filter( c => c.shape === 'diamond').length, 27)
    
    assert.strictEqual(cards.filter( c => c.fill === 'empty').length, 27);
    assert.strictEqual(cards.filter( c => c.fill === 'shaded').length, 27);
    assert.strictEqual(cards.filter( c => c.fill === 'solid').length, 27);

    assert.strictEqual(cards.filter( c => c.count === 1).length, 27);
    assert.strictEqual(cards.filter( c => c.count === 2).length, 27);
    assert.strictEqual(cards.filter( c => c.count === 3).length, 27);
  });

  it("draws random cards correctly and updates deck count", function() {
    const deck = createCards();
    const availableCards = drawRandomCards(deck, 12);
    assert.strictEqual(availableCards.length, 12);
    assert.strictEqual(deck.length, 69);
  });

  //createSubsets(numbers, size, start, currentLength, used);
  it("finds all possible unique sets of cards", function() {
    // size of 5 = 10, 6 = 20, 12 = 220
    let items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    let sets = createSubsets(items, 3);
    assert.strictEqual(sets.length, 220);
    
    items = ['a', 'b', 'c', 'd', 'e', 'f'];
    sets = createSubsets(items, 3);
    assert.strictEqual(sets.length, 20);
    
    items = ['a', 'b', 'c', 'd', 'e'];
    sets = createSubsets(items, 3);
    assert.strictEqual(sets.length, 10);
    
    items = ['a', 'b', 'c'];
    sets = createSubsets(items, 3);
    assert.strictEqual(sets.length, 1);
  });

  it("recognizes valid sets", function() {
    const cards = validSets.differInCount;
    assert.strictEqual(isSet(cards[0], cards[1], cards[2]), true);
    // TODO: loop over more valid sets and verify they are seen as valid by isSet
  });

  it("recognizes invalid sets", function() {
    const cards = inValidSets.twoHaveSameColor;
    assert.strictEqual(isSet(cards[0], cards[1], cards[2]), false);
    // TODO: loop over more invalid sets and verify they are seen as invalid by isSet
  });

  // TODO: findSets(availableCards) finds sets

  // color: ['purple', 'green', 'red'],
  // shape: ['oval', 'squiqgle', 'diamond'],
  // fill: ['empty', 'shaded', 'solid'],
  // count: [1, 2, 3]

  const validSets = {
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
