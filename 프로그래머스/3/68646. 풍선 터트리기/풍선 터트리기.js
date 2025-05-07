function solution(a) {
    //번호가 더 작은 풍선을 터트리는건 전체 최대 1번
    //최후까지 남는게 가능한 풍선의 개수 return
    let answer = a.length;
    let leftMin = Array(a.length).fill(Infinity);
    leftMin[0] = a[0];
    let rightMin = Array(a.length).fill(Infinity);
    rightMin[rightMin.length -1] = a[a.length-1];
    
    for(let i=1; i<a.length; i++) {
        leftMin[i] = Math.min(leftMin[i-1],a[i]);
    }
    
    for(let i=a.length-2; i>=0; i--) {
        rightMin[i] = Math.min(rightMin[i+1],a[i]);
    }
    
    for(let i=1; i<a.length-1; i++) {
        const target = a[i];    
        if(target > leftMin[i] && target > rightMin[i]) answer -= 1;
    }
    return answer;
}