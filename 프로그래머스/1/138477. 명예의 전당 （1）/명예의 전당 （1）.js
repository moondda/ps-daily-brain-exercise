function solution(k, score) {
    var answer = [];
    let topK = [];
    
    for(let i = 0 ; i < score.length; i++) {
        topK.push(score[i])
        topK.sort((a, b) => b - a); 
        i < k ? answer.push(topK[topK.length-1]) : answer.push(topK[k-1]);
    }
    return answer;
}