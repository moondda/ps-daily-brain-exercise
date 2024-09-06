function solution(numbers) {
    const answer = [];
    for(let i=0 ; i < numbers.length-1 ; i++) {
        for(let j=i+1 ; j < numbers.length; j++) {
            const num1 = numbers[i];
            const num2 = numbers[j];
            if(! answer.includes(num1+num2) ) answer.push(num1+num2);
        }
    }
    
    return answer.sort((a,b)=> a-b);
}