function solution(progresses, speeds) {
 const dayCost = progresses.map((item, index) => 
    ((100 - item) % speeds[index] === 0) 
        ? (100 - item) / speeds[index] 
        : Math.floor((100 - item) / speeds[index]) + 1
);
    console.log(dayCost);
    const progressCount = [];
    let rear = 0;
    const rearLimit = dayCost.length;
    while(rear !== rearLimit) { //모든 작업이 다 수행될때까지
        const deploy = dayCost[rear];
        rear++; //첫번째는 무조건 배포
        let count = 1; //배포 한개당의 작업 개수
        for(let j=rear; j<rearLimit; j++) {
            if(dayCost[j] <= deploy) {
                count++; 
                rear++;
            } //같이 배포가능할떼
            else break; //다음 배포때 해야함
        }
        progressCount.push(count);
    }
    return progressCount;
}