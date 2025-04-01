function solution(n, weak, dist) {
    var answer = -1; // 결과를 -1로 초기화
    const len = weak.length;
    const linear_weak = new Array(len * 2 - 1).fill(0);

    // 원형을 선형으로 바꿔서 처리
    for (let i = 0; i < len * 2 - 1; i++) {
        linear_weak[i] = i < len ? weak[i] : weak[i - len] + n;
    }

    // 친구들의 이동 거리를 내림차순으로 정렬
    dist.sort((a, b) => b - a);

    // 각 친구들 조합을 시도 (1명부터 dist.length명까지)
    for (let i = 1; i <= dist.length; i++) {
        const permutations = getPermutation(dist, i);
        
        // 가능한 모든 순열을 순차적으로 시도
        for (const perm of permutations) {
            for (let start = 0; start < len; start++) {
                let remainingWeak = [...linear_weak.slice(start, start + len)];
                let friends = [...perm];
                
                // 각 친구가 점검할 수 있는 범위 내에서 취약 지점 처리
                for (let friend of friends) {
                    const coverage = remainingWeak[0] + friend;
                    remainingWeak = remainingWeak.filter(e => e > coverage);
                    if (remainingWeak.length === 0) break;
                }

                // 모든 취약 지점이 처리되었으면
                if (remainingWeak.length === 0) {
                    return i;
                }
            }
        }
    }
    
    return answer;
}

// 순열을 구하는 함수
const getPermutation = (arr, n) => {
    if (n === 1) return arr.map(e => [e]);
    const result = [];
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const perms = getPermutation(rest, n - 1);
        const attached = perms.map(e => [fixed, ...e]);
        result.push(...attached);
    });
    return result;
}
