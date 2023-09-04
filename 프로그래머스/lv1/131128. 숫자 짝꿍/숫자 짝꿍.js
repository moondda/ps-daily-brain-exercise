function solution(X, Y) {
    
    let arr_x = X.split("").map((e) => parseInt(e));
    let arr_y = Y.split("").map((e) => parseInt(e));
    let arr = [0,0,0,0,0,0,0,0,0,0];
    let result = [];
    
    
    for(let j = 0 ; j < arr_x.length; j++) {
        arr[arr_x[j]]++;
        }
    
    for(let j = 0 ; j < arr_y.length; j++) {
        if( arr[arr_y[j]] > 0 ) {
            result.push(arr_y[j]);
            arr[arr_y[j]]--;
            }
        }
    
    result.sort(function(a, b)  {
  return b - a;
});
    if(result == "") return "-1";
    if(result.length > 0 && result[0] == 0) return "0";
    return result.join("");

    

}