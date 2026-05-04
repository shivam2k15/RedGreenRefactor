export const add = (nums: string): number => {
  let sum = 0;
  nums.split(",").forEach(item => { sum += Number(item) });
  return sum;
};

