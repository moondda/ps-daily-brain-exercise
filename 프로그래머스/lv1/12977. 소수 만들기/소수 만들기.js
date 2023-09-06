function solution(nums) {
 
    let sum = [];
    let count = 0;
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length;j++) {
            for(let k=j+1; k<nums.length;k++) {
               sum.push(nums[k]+nums[j]+nums[i])
            }
        }
    }
    
    
    for(let i = 0; i<sum.length;i++) {
        for(let j=2; j<sum[i];j++) {
            if(sum[i] % j == 0) break;
            if(j == sum[i]-1 ) count++;
        }
    }

    return count;

}