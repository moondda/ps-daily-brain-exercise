function solution(board) {
    //직선도로 100원
    //코너 500원
    //1 벽
    //항상 도달 가능
    
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];

    const costArr = Array.from({length: board.length}, () =>
  Array.from({length: board.length}, () => Array(4).fill(Infinity))
);
    
    const queue = [];
    
    for (let i = 0; i < 4; i++) {
    const nx = 0 + dx[i];
    const ny = 0 + dy[i];
    if (nx >= 0 && ny >= 0 && nx < board.length - 1 && ny < board[0].length - 1 && board[nx][ny] === 0) {
        costArr[nx][ny][i] = 100;
        queue.push({ x: nx, y: ny, cost: 100, dir: i });
    }
}
    
    while(queue.length !== 0) {
        const target = queue.pop();
        
        for(let i=0; i<4; i++) {
            if(target.x+dx[i] < 0 || target.x+dx[i] > board.length - 1 ) continue;
            if(target.y+dy[i] < 0 || target.y+dy[i] > board[0].length - 1 ) continue;
            if(board[target.x+dx[i]][target.y+dy[i]] === 1) continue;
            
            let addedCost;
            let dir = i;
            //전이 위아래였을때
            if(target.dir === 0 || target.dir === 2) {
                if(i=== 0 || i === 2) {addedCost = target.cost + 100;}
                else {addedCost = target.cost + 600; }
            }
            
            //전이 좌우였을때
            else if(target.dir === 1 || target.dir === 3) {
                if(i=== 0 || i === 2) {addedCost = target.cost + 600;}
                else {addedCost = target.cost + 100;}
            }
            

            if(costArr[target.x+dx[i]][target.y+dy[i]][i] > addedCost ) {
                costArr[target.x+dx[i]][target.y+dy[i]][i]  = addedCost;
                queue.push({x:target.x+dx[i], y :target.y+dy[i] , cost : addedCost , dir : dir})
            }
        }
    }
    
    return Math.min(...costArr[board.length - 1][board[0].length - 1]);
    
}