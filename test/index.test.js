const {drawCard, drawDeck} = require('../src');

const {expect} = require('chai');

describe('cards', function () {
  describe('♦', function () {
    it('A', () => {
      const card = drawCard('A', 'diamonds');
      expect(card).to.equal([
        '┌───────────┐',
        '│A          │',
        '│           │',
        '│           │',
        '│     ♦     │',
        '│           │',
        '│           │',
        '│          A│',
        '└───────────┘'
      ].join('\n'));
    });
  });

  describe('♥', function () {
    it('10', () => {
      const card = drawCard('10', 'hearts');
      expect(card).to.equal([
        '┌───────────┐',
        '│10         │',
        '│           │',
        '│           │',
        '│     ♥     │',
        '│           │',
        '│           │',
        '│         10│',
        '└───────────┘'
      ].join('\n'));
    });
  });

  describe('♣', function () {
    it('K', () => {
      const card = drawCard('K', 'clubs');
      expect(card).to.equal([
        '┌───────────┐',
        '│K          │',
        '│           │',
        '│           │',
        '│     ♣     │',
        '│           │',
        '│           │',
        '│          K│',
        '└───────────┘'
      ].join('\n'));
    });
  });
});

describe('deck', function () {
  it('height 0', () => {
    const deck = drawDeck(0);
    expect(deck).to.equal([
      '┌───────────┐',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '│░░░░░░░░░░░│',
      '└───────────┘'
    ].join('\n'));
  });


  it('height 2', () => {
    const deck = drawDeck(2);
    expect(deck).to.equal([
      '┌┌┌───────────┐',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '│││░░░░░░░░░░░│',
      '└└└───────────┘'
    ].join('\n'));
  });

  it('height -1', () => {
    const deck = drawDeck(-1);
    expect(deck).to.equal([
      '┌───────────┐┐',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '│░░░░░░░░░░░││',
      '└───────────┘┘'
    ].join('\n'));
  });

});
