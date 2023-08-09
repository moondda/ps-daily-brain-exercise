function solution(answers) {
    
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    
    let count_1 = 0;
    let count_2 = 0; 
    let count_3 = 0; 
    let length = answers.length;
    
    for(let i = 0; i<length; i++) {
        if(i <= 4 && one[i] == answers[i]) count_1++;
        if(i > 4 && one[i%5] == answers[i]) count_1++;
    }
    for(let i = 0; i<length; i++) {
        if(i <= 7 && two[i] == answers[i]) count_2++;
        if(i > 7 && two[i%8] == answers[i]) count_2++;
        
    }
     for(let i = 0; i<length; i++) {
        if(i <= 9 && three[i] == answers[i]) count_3++;
        if(i > 9 && three[i%10] == answers[i]) count_3++;
    }
    
    let count = [count_1, count_2, count_3];
    let max = Math.max(...count);
    let arr = [];
    
    for(let i =0; i<count.length; i++) {
        if(max == count[i]) arr.push(i+1);
    }
    
    return arr;
}