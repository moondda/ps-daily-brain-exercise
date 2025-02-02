function solution(k, tangerine) {
    tangerine.sort((a,b)=>a-b);
    const tangArr = [];
    
    let count = 0;
    let currentNum = tangerine[0];
    for(let i=0; i<tangerine.length;i++){
        if(currentNum === tangerine[i]) count+= 1;
        else {
            tangArr.push([currentNum,count])
            currentNum = tangerine[i];
            count = 1;
        } 
        
    }
    tangArr.push([currentNum,count]);
    tangArr.sort((a,b)=> b[1]-a[1]);

    let result = 0;
    let comp = 0;
    for(let i=0; i< tangArr.length; i++) {
        comp += tangArr[i][1];
        result++;
        if(comp >= k) return result;
    }
}