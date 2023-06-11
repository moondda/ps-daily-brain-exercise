function solution(arr, queries) {
    for(let i=0; i<queries.length; i++ ){
        let first=queries[i][0];
        let second=queries[i][1];
        let comp=queries[i][2];
    
        
        for(let j=first;j<=second;j++){
            if(j % comp == 0) {arr[j]=arr[j]+1;}

        }
    }
    return arr;
}