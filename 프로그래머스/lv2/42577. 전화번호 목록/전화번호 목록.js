function solution(phone_book) {
    
    phone_book.sort();
    for(let i=0; i<phone_book.length-1; i++) {
        let temp;
        
        if(phone_book[i] > phone_book[i+1]) {
            temp = phone_book[i].substr(0,phone_book[i+1].length);
            if (temp == phone_book[i+1]) return false;
        }
        
        else {
            temp = phone_book[i+1].substr(0,phone_book[i].length);
             if (temp == phone_book[i]) return false;
        }
        
        
    }
    return true;
}