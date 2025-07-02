function solution(players, m, k) {
    let count = 0;
    let queue = [];
    
    //해당 시간에 들어옴
    //서버 부족하면 보충
    //1빼고 서버 0되면 shift하고 다음 시간으로 loop
    for(let i=0; i<players.length; i++) {
        
        for(let j=0; j< queue.length; j++) {
            queue[j] -= 1;
        }
        while(queue.length > 0 && queue[0] === 0) {
            queue.shift();
        }

        if(Math.floor(players[i] / m) > queue.length) {
            const diff = Math.floor(players[i] / m) - queue.length;
            for(let j=0; j< diff; j++ ) {
                queue.push(k);
                count += 1;
            }
        }
        
    }
    return count;
}