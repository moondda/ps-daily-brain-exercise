function solution(progresses, speeds) {
    let answer = [];
    let day = [];
    
    for(let i=0; i<speeds.length; i++) {
        let count=0;
        while(progresses[i]<100){
            count++;
            progresses[i] += speeds[i];
        }
        day.push(count);
    }
    
    
    while(day.length !== 0) {
        let comp = day[0];
        let count=1;
        let length=day.length;
        for(let i=1;i<length;i++){ //첫번째 원소랑 비교하기
        if(comp >= day[i]) {count++;}
        else break;
        }
        for(let j=0;j<count;j++){
            day.shift();
        }
        answer.push(count);
        
    }
    
    return answer;
}