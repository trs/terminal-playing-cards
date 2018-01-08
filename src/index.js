const card = require('./card');
const SUITS = require('./card/suits.json');
const COLORS = require('./card/colors.json');

function drawCard(rank, suit, color, height = 0) {
  const suitIcon = _getSuitIcon(suit, color);
  const spacing = new Array(card.face[0].length - rank.length - 1).join(' ');

  return _buildCardString(card.face, height)
    .replace(/{suit}/g, suitIcon)
    .replace(/{rank}/g, rank)
    .replace(/{spacing}/g, spacing);
}

function drawDeck(height = 0) {
  return _buildCardString(card.back, height);
}

function _getSuitIcon(suit = '?', color = COLORS.black) {
  switch (suit) {
    case SUITS.diamond: return color === COLORS.black ? '♦' : '♢';
    case SUITS.heart: return color === COLORS.black ? '♥' : '♡';
    case SUITS.spade: return color === COLORS.black ? '♠' : '♤';
    case SUITS.club: return color === COLORS.black ? '♣' : '♧';
    default: return suit.slice(0, 1);
  }
}

function _buildCardString(array, height) {
  return array.map(row => {
    if (height > 0) {
      const prefix = new Array(height + 1).join(row[0]);
      return `${prefix}${row}`;
    } else if (height < 0) {
      const postfix = new Array(Math.abs(height) + 1).join(row[row.length - 1]);
      return `${row}${postfix}`;
    }
    return row;
  }).join('\n');
}

module.exports = {
  drawCard,
  drawDeck,

  SUITS,
  COLORS,

  _getSuitIcon,
  _buildCardString
};
