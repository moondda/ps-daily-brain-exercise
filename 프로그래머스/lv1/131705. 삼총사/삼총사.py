from itertools import combinations

def solution(number):
    result = list(combinations(number,3))
    count = 0
    for i in result:
        sum = 0
        for j in i:
            sum += j
        if sum == 0 : count += 1;
            
    return count