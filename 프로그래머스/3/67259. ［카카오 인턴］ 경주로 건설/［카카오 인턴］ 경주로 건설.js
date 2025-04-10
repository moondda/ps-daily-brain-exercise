function solution(board) {
    
    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];
    
    //[x][y][방향] 0위 1아래 2왼 3오
    const costArr = Array.from({length: board.length} , () => Array.from({length : board[0].length}, () => Array(4).fill(Infinity)));
    costArr[0][0][0] = 0;
    costArr[0][0][1] = 0;
    costArr[0][0][2] = 0;
    costArr[0][0][3] = 0;
    
    const queue = [];
    board[1][0] === 0 &&
        queue.push({targetX:1,targetY:0,targetDir:1,targetCost:100});
    board[0][1] === 0 &&
        queue.push({targetX:0,targetY:1,targetDir:3,targetCost:100});
    
    while(queue.length > 0) {
        const {targetX, targetY, targetDir, targetCost} = queue.pop();
        
        for(let i=0; i<4; i++) {
            if(targetX+dx[i] < 0 || targetX+dx[i] > board.length-1) continue;
            if(targetY+dy[i] < 0 || targetY+dy[i] > board[0].length-1) continue;
            if(board[targetX+dx[i]][targetY+dy[i]] == 1) continue;
            
            let addedCost = 0 ;
            
            if(targetDir == 0 || targetDir == 1) {
                //100원 위아래
                if(i === 0 || i === 1) addedCost = 100;
                else if(i === 2 || i === 3) addedCost = 600;
            }
            
            else if(targetDir == 2 || targetDir == 3) {
                //500원 위아래
                if(i === 0 || i === 1) addedCost = 600;
                else if(i === 2 || i === 3) addedCost = 100;
            }
            
            if(costArr[targetX+dx[i]][targetY+dy[i]][i] >targetCost+addedCost) {
                costArr[targetX+dx[i]][targetY+dy[i]][i] = targetCost+addedCost;
                queue.push({targetX:targetX+dx[i], targetY:targetY+dy[i], targetDir: i, targetCost: targetCost+addedCost })
            }
            
            
        }
    }

    return Math.min(...costArr[board.length-1][board[0].length -1]);
    
}