def average(array):
    set1 = set(array)
    return sum(set1)/len(set1)

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)