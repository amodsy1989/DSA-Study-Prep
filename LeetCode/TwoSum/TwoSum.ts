function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (numsMap.has(comp)) {
      return [numsMap.get(comp)!, i];
    } else {
      numsMap.set(nums[i], i);
    }
  }

  return [];
}
