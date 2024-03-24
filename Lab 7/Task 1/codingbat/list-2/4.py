def sum67(nums):
  bool = True
  sum = 0
  
  for i in nums:
    if i == 6:
      bool = False
    if bool:
      sum += i
      continue
    if i == 7:
      bool = True
  return sum
  
