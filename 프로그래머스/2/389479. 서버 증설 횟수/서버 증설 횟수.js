function solution(players, m, k) {
    let answer = 0; //총 서버 수
    let servers = new Map(); 
    
    for(let i=0; i<players.length ; i++) {
        //server 하나씩 줄이고, 0이면 내쫒기
        if(Math.floor(players[i] / m) > servers.size ) {
            let count =  Math.floor(players[i] / m) - servers.size;
            answer += count;
            for(let j=0 ; j<count; j++) {
                servers.set(`${i}+${j}`, k);
            }
        }
        for(let [key,value] of servers) {
            servers.set(key, value-1);
            if(value-1 === 0) servers.delete(key);
        }
    }
    return answer;
}