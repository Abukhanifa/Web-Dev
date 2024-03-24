def not_string(str):
  if str[:3] == "not" and len(str) >= 3:
    return str
  return "not " + str
