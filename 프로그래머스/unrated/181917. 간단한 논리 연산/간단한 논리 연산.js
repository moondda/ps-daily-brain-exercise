function solution(x1, x2, x3, x4) {
    let first_bool, second_bool;
    
    if( x1 == false && x2 == false ) first_bool = false;
    else first_bool = true;
    if( x3 == false && x4 == false ) second_bool = false;
    else second_bool = true;
    
    if(first_bool == true && second_bool == true) return true;
    else return false;

}