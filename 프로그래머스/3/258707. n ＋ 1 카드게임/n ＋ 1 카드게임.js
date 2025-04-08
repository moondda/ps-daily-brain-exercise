function check(deck1, deck2, target) {
  const operand = new Set(deck2);
  for (let i = 0; i < deck1.length; i++) {
    const card = deck1[i];
    const pair = target - card;
    if (operand.has(pair)) {
      // card, pair를 실제 배열에서 제거
      deck1.splice(deck1.indexOf(card), 1);
      deck2.splice(deck2.indexOf(pair), 1);
      return true;
    }
  }
  return false;
}

function solution(coin, cards) {
  const n = cards.length;
  const target = n + 1;
  const hand = cards.slice(0, n / 3);
  const deck = cards.slice(n / 3);
  const pending = [];
  let turn = 1;

  while (coin >= 0 && deck.length > 0) {
    pending.push(deck.shift());
    pending.push(deck.shift());

    if (check(hand, hand, target)) {
      // 0 coin
    } else if (coin >= 1 && check(hand, pending, target)) {
      coin -= 1;
    } else if (coin >= 2 && check(pending, pending, target)) {
      coin -= 2;
    } else {
      break;
    }
    turn += 1;
  }

  return turn;
}
