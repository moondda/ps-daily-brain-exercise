/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //길이는 k 고정
    //더했을때 가장 큰 값
    let maxSum = 0;
    let windowSum = 0;

    for(let i=0; i<k; i++) {
        windowSum += nums[i];
    }

    maxSum = windowSum;

    for(let i=k; i<nums.length; i++) {
        maxSum = Math.max(windowSum,windowSum - nums[i-k] + nums[i]);
    }

    return maxSum/k;

};