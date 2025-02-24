function solution(maps) {
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    
    const queue = [{x : 0 , y: 0 , count : 1}];
    
    while(queue.length !== 0) {
        let q = queue.shift();
        if(q.x === maps[0].length - 1 && q.y === maps.length - 1) return q.count; 
        
        for(let i=0; i<4; i++) {
            const nextX = q.x + dx[i];
            const nextY = q.y + dy[i];
            
            if(nextX >= 0 && nextX <= maps[0].length -1 && nextY >= 0 && nextY <= maps.length -1 && maps[nextY][nextX] === 1) {
                maps[nextY][nextX] = 0
                queue.push({x : nextX, y:nextY, count : q.count + 1});
            }
        }
    }
    
    return -1; //도달 방법 없을때
    
}