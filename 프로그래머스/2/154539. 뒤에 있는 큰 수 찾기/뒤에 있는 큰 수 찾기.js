function solution(numbers) {
    const indexStack = [];
    const answer = Array(numbers.length).fill(-1);
    for(let i=0; i<numbers.length;i++) {
        while(indexStack.length > 0 && numbers[indexStack.at(-1)] < numbers[i]) {
            answer[indexStack.pop()] = numbers[i];
        }
        indexStack.push(i);
    }
    
    return answer;
} 