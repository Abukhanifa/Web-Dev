def make_chocolate(small, big, goal):
    max_big_kilos = big * 5
    if max_big_kilos >= goal:
        max_big_used = min(goal // 5, big)  
        remaining_kilos = goal - max_big_used * 5
        if remaining_kilos <= small:
            return remaining_kilos
        else:
            return -1
    else:
        remaining_kilos = goal - max_big_kilos
        if remaining_kilos <= small:
            return remaining_kilos
        else:
            return -1
  
