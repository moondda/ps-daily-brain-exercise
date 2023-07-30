function solution(clothes) {
    let map = new Map();
    let sum = 0;
    
    for(let i=0; i<clothes.length; i++) {
        if(map.has(clothes[i][0])) {
            map.get(clothes[i][0]).push(clothes[i][1]);
        }
        else map.set(clothes[i][0],[clothes[i][1]]);
        sum++;
    }
    
    console.log(map);
}