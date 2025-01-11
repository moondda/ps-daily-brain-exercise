function solution(N, stages) {
    
    const failRate = [];
    const userLength = stages.length;
    for(let i=1; i<N+1; i++) { //스테이지별로 순회
        let count1 = 0;//스테이지에 도달했으나 아직 클리어x 플레이어의 수 
        let count2 = 0;//스테이지에 도달한 플레이어 수
        for(let j=0; j<stages.length; j++) { //유저가 깬 스테이지들 순회
            if(stages[j] === i) count1++;
            if(stages[j] >= i) count2++;
        }
        if(count2 === 0) failRate.push(0);
        else failRate.push(count1/count2);
    }
    return stageIndex = [...new Array(N)].map((_,i) =>i+1 )
    .sort((a, b) => failRate[b - 1] - failRate[a - 1] || a - b);


}