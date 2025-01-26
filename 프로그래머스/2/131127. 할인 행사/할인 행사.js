function solution(want, number, discount) {
    let answer = 0;
    
    let wantParsed = {};
    let currentProduct = {};
    
    let dayCount = 0;
    
    for(let i=0; i<want.length; i++) {
        wantParsed[want[i]] = number[i];
        currentProduct[want[i]] = 0;
    }
    
    
    for(let i=0; i<discount.length; i++) {
             if(discount[i] in wantParsed ) currentProduct[discount[i]] = (currentProduct[discount[i]] || 0) + 1;
            dayCount++;
            if(dayCount === 10 && isValid(wantParsed,currentProduct) ) {answer++;}
            if(dayCount > 10)  {
                dayCount--;
                 if(discount[i-10] in wantParsed ) currentProduct[discount[i-10]] = Math.max(0, currentProduct[discount[i-10]] - 1);
                if(isValid(wantParsed,currentProduct) ) answer++;
            }
    }
    return answer;
}

function isValid(wantParsed,currentProduct) {
    for (let key in wantParsed) {
                    if (wantParsed[key] > currentProduct[key]) {
                        return false;
                }
}
        return true;
}