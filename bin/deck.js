#!/usr/bin/env node

const {drawDeck} = require('../src');

const [, , height = 0] = process.argv;

const deck = drawDeck(parseInt(height));
console.log(deck);
