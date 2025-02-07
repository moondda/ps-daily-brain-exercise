function solution(n) {
    //직사각형을 채우는 방법의 수를 return 
    const arr = [0,1,2]; //n이 1일때, 2일때 경우의 수 저장. 0은 인덱스 순서 맞추기 위함
    for(let i=3; i<=n;i++){
        arr.push((arr[i-2] + arr[i-1]) % 1000000007);
    }
    return arr[n];
}