#!/usr/bin/env node

const {drawCard} = require('../src');

const [, , rank = '?', suit = '?', color = 'black', height = 0] = process.argv;

const card = drawCard(rank, suit, color, height);
console.log(card);
