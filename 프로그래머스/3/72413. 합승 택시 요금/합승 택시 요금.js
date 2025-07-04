function solution(n, s, a, b, fares) {
    let graph = Array.from({length:n+1} , () => new Map());
    
    for(let [c,d,cost] of fares) {
        graph[c].set(d,cost);
        graph[d].set(c,cost);   
    }
    
    const queue = [];
    
    const getMin = (s) => {
        let min = Array(n+1).fill(Infinity);
        min[s] = 0;
        
        queue.push([0,s]);
        
    while(queue.length) {
        const [cost,curr] = queue.shift(); //[null,24,null,24,null,0,2]
        for(let [node,cost] of graph[curr]) {
            if( min[node] > min[curr] + cost) {
                min[node] = min[curr] + cost;
                queue.push([min[node],node]);
            }
            }
        }
        
        return min;
    }
    
    const minS = getMin(s);
    const minA = getMin(a);
    const minB = getMin(b);
    let min = Infinity;
    for(let i=1 ; i< n+1; i++) {
        min = Math.min(min, minS[i] + minA[i] + minB[i]);
    }
    
    return min;
}