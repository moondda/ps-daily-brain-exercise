function solution(fees, records) {
    //나누어 떨어지지 않으면, 올림
    //차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 
    const recordSet = {};
    const FeeSet = {};
    for(let i=0; i< records.length; i++) {
        const [time, number , status] = records[i].split(" ");
        if(number in recordSet === false) recordSet[number] = [time,status];
        else if(recordSet[number][1] === 'IN') {
            if(status === 'OUT') {
                 const outTime = time.split(":").map(Number);
                 const inTime = recordSet[number][0].split(":").map(Number);
                 console.log(outTime,inTime)
                let totalTime = 0;
                if(outTime[1] - inTime[1] < 0 ) {
                    totalTime += (outTime[1] + 60 - inTime[1]);
                    totalTime += (outTime[0] - inTime[0] - 1)*60;
                }
                else {
                    totalTime += (outTime[1] - inTime[1]);
                    totalTime += (outTime[0] - inTime[0])*60;
                }
                
                if(number in FeeSet === false) { FeeSet[number] = totalTime;}
                else FeeSet[number] += totalTime;
                
                delete recordSet[number];
            }
        }
    }
    
    for(let key in recordSet) {
                const outTime = [23,59];
                 const inTime = recordSet[key][0].split(":").map(Number);
                let totalTime = 0;
                if(outTime[1] - inTime[1] < 0 ) {
                    totalTime += (outTime[1] + 60 - inTime[1]);
                    totalTime += (outTime[0] - inTime[0] - 1)*60;
                }
                else {
                    totalTime += (outTime[1] - inTime[1]);
                    totalTime += (outTime[0] - inTime[0])*60;
                }
                
                if(key in FeeSet === false) { FeeSet[key] = totalTime;}
                else FeeSet[key] += totalTime;
                
                delete recordSet[key];
    }

        for(let key in FeeSet) {
            if(FeeSet[key] <= fees[0]) FeeSet[key] = fees[1];
            else {
                FeeSet[key] = fees[1] + Math.ceil((FeeSet[key] - fees[0] )/ fees[2]) * fees[3]
            }
        }

    return Object.entries(FeeSet)
    .sort((a, b) => a[0]- b[0]) 
    .map(([_, fee]) => fee); 
}