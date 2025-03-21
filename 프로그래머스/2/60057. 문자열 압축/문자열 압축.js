function solution(s) {
    //문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현
    //"aabbaccc"의 경우 "2a2ba3c" , 1은 생략
    //문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
    var answer = 0;
    
    const maxUnit= Math.floor(s.length);
    let minResult = s.length; //갱신해나감
    
    for(let i=1; i< maxUnit; i++) {
        const sArr = [];
        let sTemp = '';
        for(let j=0; j<s.length; j+= i) {
            sTemp = s.slice(j,j+i);
            sArr.push(sTemp);
        }
      // console.log(sArr,"arr")
        
        const finalArr = [];
        let pattern = sArr[0];
        let count = 1;
        for(let k=1; k<sArr.length; k++){
            if(sArr[k] === pattern) count++;
            else {
                if(count > 1) {finalArr.push(String(count)+ pattern);}
                else {
                    finalArr.push(pattern);
                 //   finalArr.push(sArr[k]);
                }
                
                //갱신
                pattern = sArr[k];
                count = 1;
            }
        }
        
        if(count > 1) {finalArr.push(String(count)+ pattern);}
        else finalArr.push(pattern);

        if(finalArr.join("").length < minResult) 
            minResult = finalArr.join("").length;
        
    }
    return minResult;
}