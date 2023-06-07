function solution(n, control) {

    let arr=control.split("");
    for(let i=0; i<arr.length ; i++) {
        if(arr[i] == 'w') {n=n+1};
        if(arr[i] == 's') {n=n-1};
        if(arr[i] == 'd') {n=n+10};
        if(arr[i] == 'a') {n=n-10};
    }
    
    return n;
}