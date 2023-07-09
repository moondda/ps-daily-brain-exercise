function solution(number) {
    let count = 0;
    let result = 0;
    
    for(let i =0; i<number.length; i++) {
        count = 0;
        count += number[i];
        for(let k = i+1; k<number.length; k++) {
            count = number[i];
            count += number[k];
            for(let p = k+1; p<number.length; p++) {
                count = number[k] + number[i];
                count += number[p];
                if(count == 0 ) result++;
            }
        }
    }
    return result;
}