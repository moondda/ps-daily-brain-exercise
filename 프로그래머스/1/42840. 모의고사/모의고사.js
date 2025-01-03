function solution(answers) {
    const answer1 = [1,2,3,4,5];
    const answer2 = [2,1,2,3,2,4,2,5];
    const answer3 = [3,3,1,1,2,2,4,4,5,5];
    
    let count1 = 0 ;
    let count2 = 0 ;
    let count3 = 0 ;
    
    for(let i = 0 ; i < answers.length; i++) {
        if(answer1[i % 5] === answers[i]) count1++;
        if(answer2[i % 8] === answers[i]) count2++;
        if(answer3[i % 10] === answers[i]) count3++;
    }
    const max = Math.max(count1,count2,count3);
    const winner = [];
        if(count1 === max) winner.push(1);
        if(count2 === max) winner.push(2);
       if(count3 === max) winner.push(3);
    
    return winner.sort((a,b)=>a-b);
}