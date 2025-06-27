function solution(n, w, num) {
    
    let level = 1;
    let totalArr = [];
    for(let i=1; i<=n; i+=w) {
        let arr = Array(w).fill(0);
        for(let j=0; j<w;j++){
            if(i+j <=n) arr[j] = i+j;
        }
        if(level % 2 === 0) totalArr.push(arr.reverse());
        else totalArr.push(arr);
        
        level += 1;
    }
    
    let targetLevel = Math.ceil(num/w)-1;
    let targetIndex = totalArr[targetLevel].indexOf(num);   
    let count=0;
    
    for(let i=targetLevel; i<totalArr.length; i++) {
        if(totalArr[i][targetIndex] !== 0) count++;
    }
    
    return count;
    
}