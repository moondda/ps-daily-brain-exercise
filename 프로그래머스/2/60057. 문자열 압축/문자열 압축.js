function solution(s) {
    //제일 앞부터!! 정해진 길이만큼
    
    //자르는 길이 단위를 1부터 s.length/2까지
    //=> s.slice(0,i) s.slice(i,~)
    //기존보다 짧으면 갱신
    let minLength = s.length;
    
    for(let i=1; i<Math.floor(s.length/2)+1; i++) { //자르는 길이 단위 순회
        let before = '';
        let count = 1;
        let minNow = '';
        
        for(let j=0; j< s.length; j+=i) { //s돌면서 자름
            let curr = s.slice(j,j+i);
            //비교
            if(before === curr) count+=1;
            else {
                if(count === 1 ) minNow += before;
                else minNow += `${count}${before}`;
                
                before = curr;
                count = 1;
            }
            
        }
        
        if(count === 1 ) minNow += before;
        else minNow += `${count}${before}`;
        
        
        if(minLength > minNow.length) {
            minLength = minNow.length;
        }
        
        
    }
    return minLength;
}