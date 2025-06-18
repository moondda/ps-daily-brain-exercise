function solution(expressions) {
    const known = [];
    const unknown = [];

    // 수식 분리
    for (let exp of expressions) {
        if (exp.includes('X')) unknown.push(exp);
        else known.push(exp);
    }

    let bound = 2;

    // bound 계산 (모든 수식에서 가장 큰 자릿수 + 1)
    for (let exp of expressions) {
        const [a, op, b, , c] = exp.split(' ');
        for (const str of [a, b, c]) {
            for (const ch of str) {
                const digit = +ch;
                if (!isNaN(digit)) {
                    bound = Math.max(bound, digit + 1);
                }
            }
        }
    }

    // 진법 유효성 체크 함수
    const isValid = (base, a, b, op, c) => {
        if ([a, b, c].some(str => str.split('').some(ch => +ch >= base)))
            return false;
        const A = parseInt(a,base), B = parseInt(b,base), C = parseInt(c,base);
        return op === '+' ? A + B === C : A - B === C;
    };

    // candidates: known 수식을 모두 만족하는 진법 목록
    const candidates = [];
    for (let base = bound; base <= 9; base++) {
        if (known.every(exp => {
            const [a, op, b, , c] = exp.split(' ');
            return isValid(base, a, b, op, c);
        })) candidates.push(base);
    }

    // unknown 수식 계산
    const fillValue = (exp) => {
        const [a, op, b, , c] = exp.split(' ');
        let resultSet = new Set();

        for (let base of candidates) {
            if ([a, b].some(str => str.split('').some(ch => +ch >= base)))
                continue;
            const A = parseInt(a, base);
            const B = parseInt(b, base);
            const result = op === '+' ? A + B : A - B;

            const resultStr = result.toString(base);
            if (resultStr.split('').some(ch => +ch >= base)) continue;

            resultSet.add(resultStr);
        }

        return resultSet.size === 1
            ? `${a} ${op} ${b} = ${[...resultSet][0]}`
            : `${a} ${op} ${b} = ?`;
    };

    return unknown.map(fillValue);
}
