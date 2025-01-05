function solution(s) {    
    let score = 0;
      
    for(let i=0; i<s.length; i++) { //회전시키는 경우의 수 순회
        let sArr = s.split("");
        const spinArr = sArr.splice(0,i);
        sArr.push(...spinArr); //sArr 회전한 배열로 변경
        
        let stack = [];
        //스택구조 이용 
        while(sArr.length !== 0) { //회전된 s가 고갈될때까지
             stack.push(sArr.shift());
            if(stack.length > 1 && isMatch(stack)) {stack.pop(); stack.pop();}
        }
        if(stack.length === 0 ) score++;    
    }
    return score;
}
    
    function isMatch(stack) {
        if(stack.length < 2) return false;
        if(stack[stack.length-2] === "(" &&stack[stack.length-1] === ")") return true;
                if(stack[stack.length-2] === "[" &&stack[stack.length-1] === "]") return true;
                if(stack[stack.length-2] === "{" &&stack[stack.length-1] === "}") return true;
        
        return false;
    }