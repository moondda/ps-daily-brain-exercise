function solution(nums) {
 
    const combis = combination(nums,3);
    let answer = 0;
    
    for(let combi of combis ) {
        let sum = 0;
        for(let i of combi) {
            sum += i;
        }
        let target = false;
        for(let i=3; i<sum; i++) {
            if(sum % i === 0) target = true;
        }
        if(!target) answer++;
    }
    
    return answer;

}

const combination = (arr,k) => {
    if(k===1) return arr.map((e) => [e]);
    const result = [];
    
    arr.forEach((fixed,idx,origin) => {
        const rest = arr.slice(idx+1);
        const combis = combination(rest,k-1);
        const attached = combis.map((e)=>[fixed,...e]);
        result.push(...attached);
    })
    
    return result;
}