function solution(friends, gifts) {
    //두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다
    //두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
    //선물 지수 = 이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
    //만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.
    //선물을 가장 많이 받을 친구가 받을 선물의 수 return
    const count = Array(friends.length).fill(0);
    
    const giftsInfo = {};
    
    for(let i=0; i<friends.length; i++) {
        giftsInfo[friends[i]] = {};
        for(let j=0; j<friends.length; j++) {
            giftsInfo[friends[i]][friends[j]] = 0;
        }
    }

    for(let i of gifts) {
        const [from, to] = i.split(" ");
        giftsInfo[from][to] += 1;
        }
    
    
    for(let i=0 ; i <friends.length-1; i++ ) {
        for(let j=i+1; j <friends.length; j++) {
            const from = friends[i];
            const to = friends[j];
            
            if ( giftsInfo[from][to] > giftsInfo[to][from] ) count[i] += 1;
            else if ( giftsInfo[from][to] < giftsInfo[to][from] ) count[j] += 1;
            else if ( giftsInfo[from][to] === giftsInfo[to][from] ) {
                
                let rateI = 0 ,tempI =0;
                for(let item in giftsInfo[from]) {
                    rateI += giftsInfo[from][item];
                }
                for(let k of friends) {
                    tempI += giftsInfo[k][from];
                }
                rateI -= tempI;
                
                let rateJ = 0;
                for(let k in giftsInfo[to]) {
                    rateJ += giftsInfo[to][k];
                }
                let tempJ = 0;
                 for(let k of friends) {
                    tempJ += giftsInfo[k][to];
                } 
                rateJ -= tempJ;
                if(rateI > rateJ) count[i] += 1;
                else if (rateI < rateJ) count[j] += 1;
            }
        }
    }
    return Math.max(...count) ;
}