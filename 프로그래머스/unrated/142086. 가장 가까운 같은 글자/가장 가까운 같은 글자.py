def solution(s):
    arr = [-1]
    for i in range(1,len(s)):
        count = 0
        for j in range(i-1,-1,-1):
            count += 1
            if s[i] == s[j] : 
                arr.append(count)
                break
            if j==0 and s[i] != s[j]: arr.append(-1)   
    return arr