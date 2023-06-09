function solution(arr, queries) {
    let query_length;
    for(let i=0; i<queries.length;i++) {
        
    let first= (queries[i][0]);
    let second = (queries[i][1]);
    let temp = arr[first];
    arr[first]=arr[second];
    arr[second]=temp;
    }
    return arr;
}