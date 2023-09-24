def solution(arr):
    temp = 10
    answer = []
    for i in arr:
        if temp != i: 
            answer.append(i)
            temp = i
    return answer