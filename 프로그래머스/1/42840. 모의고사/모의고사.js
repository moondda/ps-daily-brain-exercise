function solution(answers) {
    //예외! 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
    //answers를 순회하면서 각 패턴 index별로 내부 순회. 
    // 만약 answers와 pattern이랑 같다면(나머지 연산자 이용) score에 1추가
    
    const patterns =[[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const score =[0,0,0];
    
    for (const [i,answer] of answers.entries()) {
        for (const [j,pattern] of patterns.entries()) {
            if(answer === pattern[i%pattern.length]) score[j] += 1;
        }
    }
    
    const max = Math.max(...score);
    const winnerArr = [];
    
    for(const [i,eachScore] of score.entries()) {
        if(eachScore===max) winnerArr.push(i+1);
    }
    
    return winnerArr;
    
    
    
}