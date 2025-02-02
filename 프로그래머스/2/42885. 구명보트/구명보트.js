function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let start = 0;
    let end = people.length-1;
    let count = 0;
    
    while(end >= start) {
        if(people[start] + people[end] <= limit) start++;
        count++;
        end--;
    }
    return count;
}