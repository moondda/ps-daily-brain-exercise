function solution(board, r, c) {
    //각 숫자 별로 map 묶기
    const cardMap = new Map();
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            const targetNum = board[i][j];
            if(targetNum == 0 ) continue;
            if(cardMap.has(targetNum)) {
                cardMap.set(targetNum, [...cardMap.get(targetNum) , `${i}, ${j}`])
            }
            else cardMap.set(targetNum, [`${i}, ${j}`]);
        }
    }
    //조합을 먼저 짜서, 
    const combination = (arr,k) => {
        if(k===1) return arr.map((e)=> [e]);
        
        const result = [];
        
        arr.forEach((fixed,idx,origin)=>{
            const rest = [...arr.slice(0, idx), ...origin.slice(idx+1)];
            const combis = combination(rest,k-1);
            const attached = combis.map((e)=> [fixed,...e]);
            
            result.push(...attached);
            
        })
        
        return result;
    }
    //조합별로의 move에도 각각의 최소 값이 있으니 다 계산
    const minMove = (currPos, targetNum,newBoard) => {
        
        const bfs = (curr,target) => {
            const queue = [[curr, target, 0 ]];
            let visited = Array.from({length:4} , () => Array(4).fill(false));
            visited[curr[0]][curr[1]] = true;
            
            while(queue.length > 0) {
                const [curr, target, count ] = queue.shift();
                //만약 두 카드를 둘다 오픈했으면, 끝남
                if(curr[0] == target[0] && curr[1] == target[1] ) 
                    return count; 
                const dirs = [[-1,0], [1,0] , [0,-1] , [0,1]];
                for(let dir of dirs) {
                    // 일반 이동
                    const nx = curr[0] + dir[0];
                    const ny = curr[1] + dir[1];
                    if (nx >= 0 && nx <= 3 && ny >= 0 && ny <= 3 && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.push([[nx, ny], target, count + 1]);
                        
                    }
                    
                    //ctrl 이동
                    let newX = curr[0];
                    let newY = curr[1];
                    
                    while(true) {
                        newX +=  dir[0];
                        newY +=  dir[1];
                        if(newX < 0 || newX > 3 || newY < 0 || newY > 3) {
                            const back = [newX - dir[0], newY - dir[1]];
                            if(!visited[back[0]][back[1]]) {
                                visited[back[0]][back[1]] = true;
                                queue.push([back,target,count+1]);
                            }
                            break;
                        }
                        
                        if(newBoard[newX][newY] !== 0 ) {
                           if(!visited[newX][newY]) {
                                visited[newX][newY] = true;
                                queue.push([[newX,newY],target,count+1]);
                        }
                            break; 
                        }    
                        
                }
        }
            }
        }
        
        const [first,second] = cardMap.get(targetNum).map((e)=> e.split(",").map(Number));
        //1 => 2로 open할때
        const count12 = bfs(currPos,first) + bfs(first,second) + 2;    
        //2 => 1로 open할때
        const count21 = bfs(currPos,second) + bfs(second,first) + 2;   
        
        if(count12 > count21) return [count21, first];
        else return [count12, second];

    }
    
    //어떤거 순서대로 없애뜨릴지,
    const keys = [...cardMap.keys()];
    const cardSets = combination(keys,keys.length);
    //조합별로의 move를 다 합쳐서 가장 적은 move 추출
    let minMoveCount = Infinity;
    for(let cardset of cardSets) {
        //[1,2,3]
        let moveCount = 0;
        let newBoard = board.map((e)=> [...e]);
        let currPos = [r,c];
         for(let card of cardset) {
             //1추출
             //현재 위치랑, 타겟num 넣음
            let [minMoves, tempPos] = minMove(currPos,card,newBoard); 
             moveCount += minMoves;
             currPos = tempPos;
             //board에서 타켓 num 지움
             //[ [ 0, 3 ], [ 3, 0 ] ]
             const eraseNomi = cardMap.get(card).map((e)=> e.split(",").map(Number));
             newBoard[eraseNomi[0][0]][eraseNomi[0][1]] = 0;
             newBoard[eraseNomi[1][0]][eraseNomi[1][1]] = 0;
             
        }
        minMoveCount = Math.min(moveCount,minMoveCount);
    }
    
    return minMoveCount;
}