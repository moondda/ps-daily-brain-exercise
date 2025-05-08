function solution(n, path, order) {
    //모든 방은 적어도 한번 탐방
    //먼저 방문할 방이 정해져있다. 없거나 1개있음
    //먼저 방문할 방은 중복하지 않는다
    const graph = Array.from({length:n}, ()=> []);
    
    for(let [start,end] of path) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    let lockedNum = new Map();
    let isLocked = Array(n).fill(false);
    for(let [start,end] of order) {
        isLocked[end] = true;
        lockedNum.set(start,end);
    }
    const isVisited = new Set(); //잠금 풀렸을때 바로 방문할 수 있는지 보기 위해
    const isPassed = new Set(); 
    const queue = [0];
    
    if(isLocked[0]) return false;
    
    while(queue.length) {
        const target = queue.pop();
        isVisited.add(target);
        isPassed.add(target);
        
        //잠금 풀수 있는거 있으면 풀기
        if(lockedNum.get(target)) {
                const unlocked = lockedNum.get(target);
                isLocked[unlocked] = false;
                lockedNum.delete(target);
                if(isVisited.has(unlocked)) queue.push(unlocked);
        }
        
        for(let node of graph[target]) {
            isVisited.add(node); //일단 접근은 한거임
            
            //안 잠겨있으면
            if(!isLocked[node] && !isPassed.has(node)) {
                queue.push(node);
                isPassed.add(node);
                
                //잠금 풀수 있는거 있으면 풀기
                if(lockedNum.get(node)) {
                    const unlocked = lockedNum.get(node);
                    isLocked[unlocked] = false;
                    lockedNum.delete(node);
                    if(isVisited.has(unlocked)) queue.push(unlocked);
                }
            }
        }
        
    }
    return isPassed.size === n ? true : false;
}