def make_bricks(small, big, goal):
    max_big_bricks = goal // 5
    big_bricks_used = min(big, max_big_bricks)
    remaining_length = goal - big_bricks_used * 5
    return remaining_length <= small
  
