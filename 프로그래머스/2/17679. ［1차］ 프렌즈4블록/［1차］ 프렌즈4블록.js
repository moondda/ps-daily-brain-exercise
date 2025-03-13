function solution(m, n, board) {
    
    board = board.map((e)=>e.split(""));
    let newBoard = Array.from({length:n},()=>Array(m).fill(''));
    for(let i=0; i<board.length;i++){
        for(let j=0; j<board[0].length;j++) {
            newBoard[j][i] = board[m-i-1][j]
        }
    }
    let count = 0;
    let flag = false;
    
    while(flag === false){
    const eraseArr = new Set();
    for(let i=0; i<newBoard.length-1;i++){
        for(let j=0; j<newBoard[0].length-1;j++) {
            const target = newBoard[i][j];
            if(target === '') continue;
            if(newBoard[i+1][j] === target
               && newBoard[i][j+1]===target
               && newBoard[i+1][j+1]===target) {
                eraseArr.add(`${i} ${j}`);
                eraseArr.add(`${i+1} ${j}`);
                eraseArr.add(`${i} ${j+1}`);
                eraseArr.add(`${i+1} ${j+1}`);
            }
        }
    }
       count += eraseArr.size;
    if(eraseArr.size === 0) {flag = true; break;}
    
    for(let i of eraseArr) {
        const [first,second] = i.split(" ").map(Number);
        newBoard[first][second] = '' //empty
    }
    
   for(let i=0; i<newBoard.length;i++){
        const emptyOut = newBoard[i].filter((e)=>e !== '');
        const emptyLength = newBoard[i].length - emptyOut.length;
        newBoard[i] = [...emptyOut,...Array(emptyLength).fill('')];
    }
        }
    
    

    return count;
}