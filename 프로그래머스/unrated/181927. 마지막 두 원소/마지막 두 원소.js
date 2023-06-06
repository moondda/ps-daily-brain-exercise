function solution(num_list) {
    
    let length = num_list.length;
    let new_num = (num_list[length-2] < num_list[length-1]) ? num_list[length-1]-num_list[length-2] : num_list[length-1]*2
    
   num_list.push(new_num);
    
    return num_list
}