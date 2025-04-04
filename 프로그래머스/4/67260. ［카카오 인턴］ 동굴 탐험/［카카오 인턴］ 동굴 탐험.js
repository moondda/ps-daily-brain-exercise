function solution(n, path, order) {
    const graph = Array.from({ length: n }, () => []);
    const visited = Array(n).fill(false);
    const canVisit = Array(n).fill(true);
    const orderMap = new Map();
    const waiting = new Map();

    for (let [a, b] of path) {
        graph[a].push(b);
        graph[b].push(a);
    }

    for (let [a, b] of order) {
        if(b === 0) return false;
        canVisit[b] = false;
        orderMap.set(a, b);
    }

    const queue = [0];
    visited[0] = true;

    while (queue.length) {
        const curr = queue.pop();

        //다음 잠금 ㅐ제
        const unlock = orderMap.get(curr);
        if (unlock !== undefined) {
            canVisit[unlock] = true;
            // 대기 중이었으면 바로 방문 가능
            if (waiting.has(unlock)) {
                queue.push(unlock);
                visited[unlock] = true;
                waiting.delete(unlock);
            }
        }

        for (let next of graph[curr]) {
            if (visited[next]) continue;
            if (!canVisit[next]) {
                waiting.set(next, true);
                continue;
            }

            visited[next] = true;
            queue.push(next);
        }
    }

    return visited.every(v => v);
}
