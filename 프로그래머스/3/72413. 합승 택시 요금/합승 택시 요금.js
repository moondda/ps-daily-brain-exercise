function solution(n, s, a, b, fares) {
    let graph = Array.from({length:n+1} , () => Array(n+1).fill(Infinity));
    
    for(let [c,d,cost] of fares) {
        graph[c][d] = Math.min(graph[c][d], cost);
        graph[d][c] = Math.min(graph[d][c], cost);
        graph[c][c] = 0;
        graph[d][d] = 0;
    }
    
    const queue = [];
    
    const getMin = (s) => {
    for(let i=1; i<graph[s].length; i++) {
        const target = graph[s][i];
        if(s == i || target == Infinity) continue;
        queue.push(i)
    }
    
    while(queue.length) {
        const start = queue.shift(); //[null,24,null,24,null,0,2]
        for(let i=1; i<=n+1; i++) { // [66,10,50]
            const next = graph[start][i];
            if(next === Infinity) continue;
            if(graph[s][i] > graph[s][start] + graph[start][i]) {
                graph[s][i] = graph[s][start] + graph[start][i];
                graph[i][s] = graph[s][start] + graph[start][i];
                queue.push(i);
                }
            }
        }
    }
    
    getMin(s);
    getMin(a);
    getMin(b);
    let min = Infinity;
    for(let i=1 ; i< n+1; i++) {
        min = Math.min(min, graph[s][i] + graph[i][a] + graph[i][b]);
    }
    
    return min;
}