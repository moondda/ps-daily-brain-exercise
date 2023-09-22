def solution(s):
    count = 0;
    new_list = []
    for i in list(s):
        if i == " ": count = 0
        else : count += 1;
        if count % 2 == 1: new_list.append(i.upper())
        if count % 2 == 0: new_list.append(i.lower())
        
    return ''.join(new_list)