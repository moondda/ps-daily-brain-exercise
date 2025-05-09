function solution(n, s, a, b, fares) {
    //합승을 안할 수도 있음
    //[c지점,d지점, 두 지점 사이의 택시요금]
    const graph = Array.from({length : n+1} , ()=> new Map());
    
    for(let [c,d,f] of fares) {
        graph[c].set(d,f);
        graph[d].set(c,f);
    }
    
    const distra = (start) => {
        let minPrice = Array(n+1).fill(Infinity);
        minPrice[start] = 0;
        const queue = [[start,0]];
    
        while(queue.length) {
            const [curr,cost] = queue.shift();
        
        for(let [key,value] of graph[curr]) {
                if(minPrice[key] >= minPrice[curr] + value) {
                    minPrice[key] = minPrice[curr] + value;
                    queue.push([key,minPrice[key]]); 
                    }            
            }     
        }
        return minPrice;
    }
  
    let sum = Infinity;
    
    const minS = distra(s);
    const minA = distra(a);
    const minB = distra(b);
    for(let i=0; i<n+1; i++) {
        //i부터 시작해서 a가는 최소 요금
        sum = Math.min(sum, minS[i] + minA[i] + minB[i]);
    }
    return sum;
}