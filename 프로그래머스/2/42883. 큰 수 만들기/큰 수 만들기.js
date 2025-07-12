function solution(number, k) {
    //큰 값일수록 앞에 와야한다
    const answer = [];
    let pointer = 0;
    
    while(pointer <= number.length-1) {
        if(answer.length) {
            while(answer.at(-1) < +number[pointer] && k>0) {
            answer.pop();
            k--;
        }
        }
        answer.push(+number[pointer]);
        pointer++;                    
    }
    
    return answer.slice(0, number.length - k).join("");
    
}