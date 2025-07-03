function solution(n, bans) {
    n = BigInt(n);
    
    const bases = bans
        .map(str => convertStringToBase26(str))
        .sort((a, b) => (a < b ? -1 : 1));
    
    for (const base of bases) {
        if (n >= base) {
            n += 1n;
        } else {
            break;
        }
    }
    
    return convertToBase26(n);

    function convertToBase26(num) {
        let number = num;
        let result = [];

        while (number-- > 0n) {
            const c = String.fromCharCode('a'.charCodeAt(0) + Number(number % 26n));
            result.push(c);
            number /= 26n;
        }

        return result.reverse().join('');
    }

    function convertStringToBase26(input) {
        let result = 0n;
        for (const c of input) {
            const value = BigInt(c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
            result = result * 26n + value;
        }
        return result;
    }
}
