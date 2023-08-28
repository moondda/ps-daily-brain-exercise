function solution(n) {
    let answer = n.toString(3);
    n = answer.split("").reverse().join("");
    
    return parseInt(n,3);
}