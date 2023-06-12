function solution(nums) {
    let n= nums.length;
    let new_nums=nums;
    //console.log(new_nums,"dk");
    let max_select = n/2;
    for(let i =0 ; i<nums.length-1;i++) {
        let comp = nums[i];
        for(let j=i+1; j<nums.length;j++) {
            if(comp == nums[j] ) {nums.splice(j,1); j--;}
           // console.log(nums,"비교");
        }
    }
    
    
    return ((n/2)<nums.length) ? n/2 : nums.length
    
}