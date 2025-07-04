function solution(edges) {
    let degree = {};
    let answer = Array(4).fill(0);

    for (let [first, second] of edges) {
        if (!degree[first]) degree[first] = [0, 0];
        if (!degree[second]) degree[second] = [0, 0];

        degree[first][0] += 1;  // outDegree
        degree[second][1] += 1; // inDegree
    }

    let eight = 0;
    let stick = 0;
    let point = 0;

    for (let key in degree) {
        const [outDegree, inDegree] = degree[key];

        if (outDegree >= 2 && inDegree >= 2) eight++;
        if (outDegree === 0) stick++;
        if (inDegree === 0 && outDegree >= 2) point = +key;
    }

    let docut = degree[point][0] - eight - stick;

    return [point, docut, stick, eight];
}
