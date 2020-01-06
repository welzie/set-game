function createCards() {
  const cards = [];
  const properties = {
    color: ['purple', 'green', 'red'],
    shape: ['oval', 'squiqgle', 'diamond'],
    fill: ['empty', 'shaded', 'solid'],
    count: [1, 2, 3]
  };

  let number = 0;
  properties.color.forEach(color => {
    properties.shape.forEach(shape => {
      properties.fill.forEach(fill => {
        properties.count.forEach(count => {
          cards.push({ id: ++number, color, shape, fill, count });
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
  for (let i = 0; i < numberToDraw; i++) {
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

/**
 * Should return an array of arrays with the inner arrays being unique sets.
 */
function findSets(availableCards) {
  const sets = [];
  return sets;
}

/**
 * Returns true if
 * - Each property is the same OR different for each card
 * - The properties can be all different, all the same, or a mix
 * Properties: ['color', 'shape', 'fill', 'count']
 * @param {card object} card1 
 * @param {card object} card2 
 * @param {card object} card3 
 */
function isSet(card1, card2, card3) {
  const properties = ['color', 'shape', 'fill', 'count'];
  const results = {};
  properties.forEach( property => {
    if (card1[property] === card2[property] && card2[property] === card3[property]) {
      results[property] = 'equal';
    } else if (card1[property] !== card2[property] && card1[property] !== card3[property] && card2[property] !== card3[property]) {
      results[property] = 'different';
    } else {
      results[property] = 'invalid';
    }
  });
  //console.log(results);
  return Object.values(results).indexOf('invalid') < 0;
}

function subsets(items, subsetSize) {
  let sets = [];
  if (items.length < subsetSize) {
    return [];
  }
  const lowerSets = subsets(items.slice(1), 3);
  sets = sets.concat(lowerSets);

  for(let x = 1; x < items.length; x++) {
    for(let y = x + 1; y < items.length; y++) {
      sets.push( [items[0], items[x], items[y]] );
    }
  }
  return sets;
}


module.exports = {
  createCards,
  drawRandomCards,
  findSets,
  isSet,
  subsets
};
