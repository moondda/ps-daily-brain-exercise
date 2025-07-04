function solution(board) {
    var answer = 0;
    //최소비용 -> 다익스트라
    //[좌표x][좌표y][방향] = 최소비용
    const N = board.length;
    const queue = [];
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    let costArr = Array.from({length:N} , ()=> Array.from({length:N}, ()=> Array(4).fill(Infinity)));
    //0은 아래, 1은 위, 2은 오른, 3은 왼쪽에서 들어옴
    costArr[0][0][0] = 0;
    costArr[0][0][1] = 0;
    costArr[0][0][2] = 0;
    costArr[0][0][3] = 0;
    costArr[1][0][1] = 100;
    costArr[0][1][3] = 100;
    if(board[1][0] === 0) queue.push([100,1,0,1]);
    if(board[0][1] === 0) queue.push([100,0,1,3]);
    
    while(queue.length > 0) {
        const [cost,x,y,dir] = queue.shift();
        if(x=== N-1 && y === N-1) continue;
        for(let i=0; i<4; i++) {
            const nextX = x+dx[i];
            const nextY = y+dy[i];
            
            if(nextX < 0 || nextX > N-1 || nextY <0 || nextY > N-1) continue;
            if(board[nextX][nextY] === 1) continue;
            
            //위아래
            if(i===0 || i===1) {
                if(dir===0 || dir===1) { //이전방향
                    if(costArr[nextX][nextY][i] > cost + 100) {
                        costArr[nextX][nextY][i] = cost + 100;
                        queue.push([cost+100,nextX,nextY,i]);
                    }
                }
                else{ //방향 다름
                    if(costArr[nextX][nextY][i] > cost + 600) {
                        costArr[nextX][nextY][i] = cost + 600;
                        queue.push([cost+600,nextX,nextY,i]);
                    }
                }
            }
            //좌우
            else if(i===2 || i===3) {
                if(dir===0 || dir===1) { //이전방향
                    if(costArr[nextX][nextY][i] > cost + 600) {
                        costArr[nextX][nextY][i] = cost + 600;
                        queue.push([cost+600,nextX,nextY,i]);
                    }
                }
                else{ //방향 같음
                    if(costArr[nextX][nextY][i] > cost + 100) {
                        costArr[nextX][nextY][i] = cost + 100;
                        queue.push([cost+100,nextX,nextY,i]);
                    }
                }      
            }
        }
        //최소비용 비교후 
        //표 갱신 큐 push
    }
    return Math.min(...costArr[N-1][N-1]);
}