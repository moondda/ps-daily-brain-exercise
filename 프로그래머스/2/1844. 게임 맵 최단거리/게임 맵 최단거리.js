function solution(maps) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [{pos:[0,0], count:1}];
    const isVisited = Array.from({length: maps.length} , ()=> Array(maps[0].length).fill(false));
    isVisited[0][0] = true;
    
    while(queue.length !== 0) {
        const target = queue.shift();
        if(target.pos[0] === maps.length-1 && target.pos[1] === maps[0].length-1){
            return target.count;
            break; 
            }
        
        for(let i=0; i<4; i++) {
            const x = target.pos[0] + dx[i];
            const y = target.pos[1] + dy[i];
            
            if(x < 0 || x > maps.length-1) continue;
            if(y < 0 || y > maps[0].length-1) continue;
            if(maps[x][y] === 1 && isVisited[x][y] === false) {
                isVisited[x][y] = true;
                queue.push({pos:[x,y],count:target.count+1});
            }
        }
    }
    return -1; //도달 방법 없을때
    
}