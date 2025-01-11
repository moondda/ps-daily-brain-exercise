function solution(progresses, speeds) {
    const dayCost = progresses.map((item,index)=> Math.ceil((100-item)/speeds[index]));
    let deployDay = dayCost[0];
    let count = 0;
    const answerCounts = [];
    
    for(let i=0; i<progresses.length; i++) {
        if(dayCost[i] <= deployDay) {
            count++;
        }
        else {
            answerCounts.push(count);
            deployDay = dayCost[i];
            count = 1;
        }
    }
    answerCounts.push(count);
    return answerCounts;
}