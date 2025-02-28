function solution(numbers) {
    //뒷 큰수가 존재하지 않는 원소는 -1
    let indexMemo = Array(numbers.length).fill(-1);
    
    for(let i=1; i<numbers.length; i++) {
        if(numbers[0] < numbers[i]) {
            indexMemo[0] = numbers[i];
            break;
        }
    }
    
    for(let i=1; i< numbers.length; i++) {
        if(indexMemo[i-1] === i)
    }
    console.log(indexDp)
}