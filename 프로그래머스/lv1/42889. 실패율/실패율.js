function solution(N, stages) {
    
    let arr = [];
    let challenge_count = stages.length;
    
    for(let j=1; j<N+1; j++) {
        let fail_count = 0;

        for(let i=0; i< stages.length; i++) {
            if(stages[i] == j) { fail_count++;}
        }
        arr.push([j,fail_count/challenge_count]);
        challenge_count -= fail_count
    
    }

    arr.sort((a,b) => (b[1]-a[1]));
    return arr.map((a)=>a[0]);

}