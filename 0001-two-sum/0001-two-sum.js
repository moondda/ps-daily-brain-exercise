function twoSum(nums, target) {
  const map = new Map(); 
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return [];
}