function solution(s) {  
     if(s.length % 2 === 1) return 0;
    let count = 0;
    for(let i=0; i<s.length; i++) {
        let parsedS = s.slice(i) + s.slice(0,i);
        const stack = [];
        const match = {"{": "}" , "(":")" , "[": "]" };
        let flag = true;
        for(let j=0; j<s.length;j++) { //변환이후 짝이 맞는지 stack 자료구조로 검증
            if(parsedS[j] === '[' ||parsedS[j] === '(' || parsedS[j] === '{') stack.push(parsedS[j]);  
            //닫힌 괄호가 오면 stack에 들어있어야함
            else {
                if(parsedS[j] !== match[stack.pop()]) {
                    flag = false;
                    break; //안맞는거 판단했으니 반복문탈출
                }
            }
        }
           if(flag)  count++;
    }
       return count;
}
    
 