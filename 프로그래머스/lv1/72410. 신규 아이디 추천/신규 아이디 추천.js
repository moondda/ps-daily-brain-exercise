function solution(new_id) {
    //1단계
    new_id = new_id.toLowerCase();
    
    //2단계
    let regExp = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g;
    new_id = new_id.replace(regExp,'');
    
    //3단계
    new_id_arr = new_id.split('');
    for(let i=0; i<new_id_arr.length-1; i++) {
        if( new_id_arr[i] == '.' && new_id_arr[i+1] == '.') {
            new_id_arr.splice(i,1);
            i--;
        }
    }
    
    //4단계
    if(new_id_arr[0] == '.') {new_id_arr.splice(0,1);}
   console.log(new_id_arr,"hi");
    if(new_id_arr[new_id_arr.length-1] == '.') 
    {new_id_arr.splice(new_id_arr.length-1,1);}
    
    //5단계
    if(new_id_arr.length == 0 ) new_id_arr.push('a');
    
    //6단계
    if(new_id_arr.length >= 16) new_id_arr.splice(15);
    if(new_id_arr[new_id_arr.length-1] == '.') 
        {new_id_arr.splice(new_id_arr.length-1,1);}
    
    new_id = new_id_arr.join('');
    
    //7단계
    while(new_id.length <= 2) {
        new_id += new_id[new_id.length-1];
    }

    
    
    return new_id;
}