count = 0;

n = int(input())
a = [int(i) for i in input().split()]

for i in a:
    if i>0:
        count+=1
print(count)