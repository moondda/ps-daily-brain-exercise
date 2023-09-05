function solution(number, limit, power) {
    let sum = 0;
    for(let i = 1; i < number + 1; i++){
        sum = (getDivisor(i) > limit) ? sum + power : sum + getDivisor(i);
    }
    return sum;
}

function getDivisor(number) {
    let count = 0;
    if(Math.sqrt(number) % 1 == 0) count++;
    for(let i = 1 ; i < Math.sqrt(number) ; i++ ) {
        if(number % i == 0) count+=2;
    }
    
    return count;
}