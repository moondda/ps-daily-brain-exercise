function solution(s) {  
    let count = 0;
    const match = {"[" : "]", "(":")" , "{": "}"};
    
    for(let i=0; i<s.length;i++) {
        let spinedS = s.slice(i) + s.slice(0,i); 
        let stack = []; 
        let flag = true;
        
        for(let j=0; j<s.length;j++) { 
            if(spinedS[j] === "[" || spinedS[j] === "(" || spinedS[j] === "{") {
                stack.push(spinedS[j]);
            }
            else {
                if(spinedS[j] !== match[stack.pop()]) {
                    flag = false;
                    break;
                }
            }
        }
        if(flag && stack.length === 0) count++;
    }
    
    return count;
}
    
 