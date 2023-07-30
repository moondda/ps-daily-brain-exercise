function solution(clothes) {
    let obj = [];
    let sum = 1;
    
    for(let i =0; i<clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]]) ? obj[clothes[i][1]]+1 : 2;
    }

    for(let key in obj){
        sum *= obj[key];
    }

    
    return sum-1;
    
}