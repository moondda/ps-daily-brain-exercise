function solution(friends, gifts) {
    //두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다
    //두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
    //선물 지수 = 이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
    //만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.
    //선물을 가장 많이 받을 친구가 받을 선물의 수 return
    var answer = 0;
    
    const friendsIdx = {};
    for(let i=0; i<friends.length; i++) {
        friendsIdx[friends[i]] = i;
    }
    const count = Array(friends.length).fill(0);
    
    const giftsInfo = Array.from({length:friends.length}, ()=> Array(friends.length).fill(0));

    for(let i of gifts) {
        const [from, to] = i.split(" ");
        giftsInfo[friendsIdx[from]][friendsIdx[to]] += 1;
    }
    
    for(let i=0 ; i <giftsInfo.length; i++ ) {
        for(let j=i+1; j <giftsInfo[0].length; j++) {
            if ( giftsInfo[i][j] > giftsInfo[j][i] ) count[i] += 1;
            else if ( giftsInfo[i][j] < giftsInfo[j][i] ) count[j] += 1;
            else if ( giftsInfo[i][j] === giftsInfo[j][i] ) {
                let rateI = giftsInfo[i].reduce((acc,cur)=>acc+= cur,0);
                let tempI = 0;
                for(let k=0; k<giftsInfo.length; k++) {
                    tempI += giftsInfo[k][i];
                }
                rateI -= tempI;
                
                let rateJ = giftsInfo[j].reduce((acc,cur)=>acc+= cur,0);
                let tempJ = 0;
                for(let k=0; k<giftsInfo.length; k++) {
                    tempJ += giftsInfo[k][j];
                }
                rateJ -= tempJ;
                
                if(rateI > rateJ) count[i] += 1;
                else if (rateI < rateJ) count[j] += 1;
            }
        }
    }
    return Math.max(...count) ;
}