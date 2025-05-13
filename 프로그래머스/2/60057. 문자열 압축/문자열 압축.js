function solution(s) {
    let length = 1;
    let minLength = s.length;
    
    while(length <= s.length/2) {  
        let recent = '';
        let count = 1;
        let arr = ''; //이번 턴에 만들어지는 배열
        for(let i=0; i<s.length; i+=length) { 
            const curr = s.slice(i,i+length);
            if(recent === curr) count++;
            
            //다르면 1. 전꺼 푸시 2. 이번거 초기화
            else {
                if(count === 1) arr += recent;
                else arr += `${count}${recent}`;
                
                recent = curr;
                count = 1;
            }
    }
        if(count === 1) arr += recent;
        else arr += `${count}${recent}`;
        
        if(arr.length < minLength) minLength = arr.length;
        length++;  
    }
    
    return minLength;
}