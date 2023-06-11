function solution(arr, queries) {
    
    let result=[];
    
    //queries 순회
    for(let i=0; i< queries.length;i++) {
        let first_q= queries[i][0]; //0
        let second_q = queries[i][1]; //4
        let comp = queries[i][2]; //2
         let temp=[]; //2
     
        //범위만큼 arr순회
        for(let j=first_q; j<=second_q;j++) {
        //temp를 comp로 초기화한다음에 나중까지 comp면 -1 넣기
        //만약 그 전에 넣은것보다 작으면서 comp보다는 커야함
        if(arr[j] > comp) {temp.push(arr[j]); }
        }
            let result_index;
          result_index= Math.min.apply(null, temp);
        console.log(result_index);
            if(result_index == Infinity) {result.push(-1);}
            else result.push(result_index);
    
    }
 
    return result;
    }
