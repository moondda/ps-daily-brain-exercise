function solution(numbers, target) {
    //DFS 이용
    
    let answer=0;
    
    dfs(0,0);
    
    function dfs(count,sum) {
        //count는 실행횟수, sum은 숫자합
        if(count == numbers.length) {
            if(target == sum) { answer++; }
            return;
        }

        dfs( count+1, sum + numbers[count] );
        dfs( count+1, sum - numbers[count] );
           
    }
    
    return answer;
}

