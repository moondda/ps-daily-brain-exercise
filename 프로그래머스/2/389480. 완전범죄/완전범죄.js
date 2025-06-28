function solution(info, n, m) {
    const maxB = 120;
    const dp = Array.from({length: info.length + 1} , () => Array(maxB + 1).fill(Infinity));
    
    dp[0][0] = 0;

    for (let i = 0; i < info.length; i++) {
        const [aTrace, bTrace] = info[i];
        for (let b = 0; b <= maxB; b++) {
            if (dp[i][b] === Infinity) continue;
            
            // A가 훔침
            const newA = dp[i][b] + aTrace;
            if (newA < n) {
                dp[i + 1][b] = Math.min(dp[i + 1][b], newA);
            }

            // B가 훔침
            const newB = b + bTrace;
            if (newB < m) {
                dp[i + 1][newB] = Math.min(dp[i + 1][newB], dp[i][b]);
            }
        }
    }

    let result = Infinity;
    for (let b = 0; b < m; b++) {
        result = Math.min(result, dp[info.length][b]);
    }

    return result === Infinity ? -1 : result;
}
