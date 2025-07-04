function solution(n, bans) {
    const numBans = bans.map(spell => strToNum(spell)).sort((a,b) => a-b);
    let target = n;
    numBans.forEach(num => {
        if (num <= target) {
            target += 1;
        }
    });
    const answer = numToStr(target);
    return answer;
}

function strToNum(spell) {
    let result = 0;
    for (let i = 0; i < spell.length; i++) {
        result = result * 26 + (spell.charCodeAt(i) - 96);
    }
    return result;
}

function numToStr(num) {
    let result = "";
    while (num > 0) {
        result = String.fromCharCode(((num-1) % 26) + 97) + result;
        num = Math.floor((num-1) / 26);
    }
    return result;
}