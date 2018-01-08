# Terminal Playing Cards
> Generate playing cards in the terminal

```
┌───────────┐┐┐┐┐┐  ┌───────────┐
│░░░░░░░░░░░││││││  │A          │
│░░░░░░░░░░░││││││  │           │
│░░░░░░░░░░░││││││  │           │
│░░░░░░░░░░░││││││  │     ♠     │
│░░░░░░░░░░░││││││  │           │
│░░░░░░░░░░░││││││  │           │
│░░░░░░░░░░░││││││  │          A│
└───────────┘┘┘┘┘┘  └───────────┘
```

# Install

```sh
$ npm install
```

# Usage

```js
const {drawCard} = require('terminal-playing-cards');

// rank, suit, color
const card = drawCard(10, 'hearts', 'black');
console.log(card);
/*
┌───────────┐
│10         │
│           │
│           │
│     ♡     │
│           │
│           │
│         10│
└───────────┘
*/

// height
const deck = drawDeck(-1);
console.log(deck);
/*
┌───────────┐┐
│░░░░░░░░░░░││
│░░░░░░░░░░░││
│░░░░░░░░░░░││
│░░░░░░░░░░░││
│░░░░░░░░░░░││
│░░░░░░░░░░░││
│░░░░░░░░░░░││
└───────────┘┘*/
```

# CLI

```sh
$ card <rank> <suit> [color]
```

- `rank`
  - `"A"` through `"K"`
- `suit`
  - `"diamonds"`
  - `"hearts"`
  - `"clubs"`
  - `"spades"`
- `color` (optional)
  - `"black"`
  - `"red"`

```sh
$ deck [height]
```

- `height`
  - Whole number of how high the deck stack should be
  - Provide a negative number for the stack to be on the right