function solution(board) {
    //직선도로 100원
    //코너 500원
    //1 벽
    //항상 도달 가능
    
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    const isVisited = Array.from({length: board.length}, ()=> Array(board.length).fill(0));
    isVisited[0][0] = 1;
    const queue = [{x:0, y:0,sum: 0, cmd : 'start', isVisited : isVisited}];
    
    
   while(queue.length !== 0) {
        const target = queue.shift();
        if(target.x===board.length-1 && target.y===board[0].length-1){
            return target.sum;
        } 
        
        for(let i=0; i<4; i++) {
            if(target.x + dx[i] < 0 || 
                target.x + dx[i] >= board.length ||
                target.y + dy[i] < 0 || 
                target.y + dy[i] >= board[0].length ||
               board[target.x + dx[i]][target.y + dy[i]] === 1 ||
               target.isVisited[target.x + dx[i]][target.y + dy[i]] === 1
                ) continue;
                   
            if(i === 0 || i === 2) {
                const newVisit = target.isVisited.map(row => [...row]);
                newVisit[target.x + dx[i]][target.y + dy[i]] = 1; 
                
                if(target.cmd === 'UD' || target.cmd === 'start' )
                queue.push({x:target.x + dx[i], y:target.y + dy[i] , sum :target.sum + 100 , cmd : 'UD',isVisited : newVisit})
                
                if(target.cmd === 'LR')
                queue.unshift({x:target.x + dx[i], y:target.y + dy[i] , sum :target.sum + 600 , cmd : 'UD',isVisited : newVisit})
            }
            
            if(i === 1 || i === 3) {
                const newVisit = target.isVisited.map(row => [...row]);
                newVisit[target.x + dx[i]][target.y + dy[i]] = 1; 
                
                if(target.cmd === 'LR' || target.cmd === 'start')
                queue.push({x:target.x + dx[i], y:target.y + dy[i] , sum :target.sum + 100 , cmd : 'LR',isVisited : newVisit})
                if(target.cmd === 'UD')
                queue.unshift({x:target.x + dx[i], y:target.y + dy[i] , sum :target.sum + 600 , cmd : 'LR',isVisited : newVisit})
                 }  
            
        }
    }
    
}