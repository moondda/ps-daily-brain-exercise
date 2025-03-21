function solution(n, computers) {
    //네트워크의 개수를 return
    //dfs끝날때 count
    const isVisited = Array(n).fill(false);
    let count =0;
    let graph = Array.from({length:n}, ()=>new Set());
    
    for(let i=0; i<computers.length;i++) {
        for(let j=0; j<computers[0].length;j++) {
            if(i===j) continue;
            if(computers[i][j] === 1) {
                graph[i].add(j);
                graph[j].add(i);
            }
        }
    }


    const dfs = (target) => {
        if(graph[target].size === 0) return;
        for(let i of graph[target]) {
            if(isVisited[i] === false) {
                isVisited[i] = true;
                dfs(i);
            }
        }
    }
    

    for(let i=0; i<n; i++) {
        if(isVisited[i] == false) { 
            isVisited[i] = true;
            count++;
            dfs(i);
        }
    }
    
    return count;
}

