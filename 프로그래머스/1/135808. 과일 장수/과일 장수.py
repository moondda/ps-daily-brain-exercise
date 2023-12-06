def solution(k, m, score):            
    sorted_score = sorted(score,reverse=True);
    result = 0;
    
    i = 0
    while i + m - 1 <= len(sorted_score) -1 :
        result += sorted_score[i + m - 1] 
        i += m

    return result * m