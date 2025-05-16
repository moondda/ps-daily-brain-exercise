class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p][2] <= val[2]) break;
      this.heap[i] = this.heap[p];
      i = p;
    }
    this.heap[i] = val;
  }

  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length === 0) return min;

    let i = 0;
    const len = this.heap.length;
    while (i * 2 + 1 < len) {
      let a = i * 2 + 1;
      let b = i * 2 + 2;
      let minIdx = b < len && this.heap[b][2] < this.heap[a][2] ? b : a;
      if (last[2] <= this.heap[minIdx][2]) break;
      this.heap[i] = this.heap[minIdx];
      i = minIdx;
    }
    this.heap[i] = last;
    return min;
  }

  size() {
    return this.heap.length;
  }
}

function solution(board) {
    //1은 벽
    var answer = 0;
    
    //x,y,cost,dir 아래 위 왼 오
    const queue = new MinHeap();
    queue.push([0,0,0,0]);
    let minArr = Array.from({length:board.length}, ()=> Array.from({length:board[0].length} , () => Array(4).fill(Infinity)));
    minArr[0][0][0] = 0;
    minArr[0][0][1] = 0;
    minArr[0][0][2] = 0;
    minArr[0][0][3] = 0;
    
    if (board[1][0] === 0) {
        queue.push([1, 0, 100, 0]);
        minArr[1][0][2] = 100;
    }
    if (board[0][1] === 0) {
        queue.push([0, 1, 100, 3]);
        minArr[0][1][1] = 100;
    }

    let pointer = 0;
    while(queue.size()) { //나중에 포인터로 바꿔 아래 위 왼 오
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];
        const [x,y,cost,dir] = queue.pop();
        
        
        for(let i=0; i<4; i++) {
            const nextX = x+dx[i];
            const nextY = y+dy[i];
            
            if(nextX < 0 || nextX > board.length-1) continue;
            if(nextY < 0 || nextY > board[0].length-1) continue;
            if(board[nextX][nextY] === 1) continue;
      
            
           //     console.log(x,y,cost,dir,i)
            if(dir === 0 || dir === 1) {
                if(i === 0 || i === 1) {
                    //비용이 최소면 100 추가
                    if( minArr[nextX][nextY][i] > cost + 100) {
                        minArr[nextX][nextY][i] = cost + 100;
                        queue.push([nextX,nextY,minArr[nextX][nextY][i],i]);
                    } 
                }
                if(i === 2 || i === 3) {
                    //비용이 최소면 600 추가
                    if( minArr[nextX][nextY][i] > cost + 600) {
                        minArr[nextX][nextY][i] = cost + 600;
                        queue.push([nextX,nextY,minArr[nextX][nextY][i],i]);
                    } 
                }
            }
            else if(dir === 2 || dir === 3) {
                if(i === 2 || i === 3) {
                    //비용이 최소면 100 추가
                    if( minArr[nextX][nextY][i] > cost + 100) {
                        minArr[nextX][nextY][i] = cost + 100;
                        queue.push([nextX,nextY,minArr[nextX][nextY][i],i]);
                    } 
                }
                if(i === 0 || i === 1) {
                    //비용이 최소면 600 추가
                    if( minArr[nextX][nextY][i] > cost + 600) {
                        minArr[nextX][nextY][i] = cost + 600;
                        queue.push([nextX,nextY,minArr[nextX][nextY][i],i]);
                    } 
                }
            }
                       
        }
    }

    return Math.min(...minArr[board.length-1][board[0].length-1]);
}