function solution(array, commands) {
    
    let answer=[];
    
    for(let i=0;i<commands.length;i++) {
    
        
        let start = commands[i][0];
        let end = commands[i][1];
        let order = commands[i][2];
        
        let sliceArray = array.slice(start-1,end);
        let newArray = sliceArray.sort((a,b)=>a-b);

        answer.push(newArray[order-1]);
        

    }
    
    return answer;
}