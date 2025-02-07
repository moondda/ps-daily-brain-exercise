function solution(n) {
    const fib = [0,1];
    for(let i=2; i<n+1;i++) {
        fib.push((fib[i-1]+fib[i-2])%1234567);
    }
    return fib[n];
}