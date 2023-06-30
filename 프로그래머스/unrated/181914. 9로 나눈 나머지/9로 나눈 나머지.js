function solution(number) {
    let num_string = number.split("");
    num_string = num_string.map(e => Number(e));
    let count = 0;
    
    for(let i=0; i<num_string.length; i++) {
        count += num_string[i];
    }
    
    return count % 9;
}