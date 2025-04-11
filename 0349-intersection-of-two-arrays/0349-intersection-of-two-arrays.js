/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    const answer = new Set();

    for(let i of nums1) {
        if(num2Set.has(i)) answer.add(i);
    }
    return [...answer];

};