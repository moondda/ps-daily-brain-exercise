function solution(n, bans) {
    const numBans = bans.map(spell => spellToNumber(spell)).sort((a,b) => a-b);
    let target = n;
    numBans.forEach(num => {
        if (num <= target) {
            target += 1;
        } else {
            return false;
        }
    });
    const answer = numberToSpell(target);
    return answer;
}

function spellToNumber(spell) {
    let result = 0;
    for (let i = 0; i < spell.length; i++) {
        result = result * 26 + (spell.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
    }
    return result;
}

function numberToSpell(num) {
    let result = "";
    while (num > 0) {
        num--;
        result = String.fromCharCode((num % 26) + 'a'.charCodeAt(0)) + result;
        num = Math.floor(num / 26);
    }
    return result;
}