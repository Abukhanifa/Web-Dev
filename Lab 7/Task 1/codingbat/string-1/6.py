def extra_end(str):
  if len(str) == 2:
    return str * 3
  
  if len(str) > 2:
    return str[-2:] * 3
