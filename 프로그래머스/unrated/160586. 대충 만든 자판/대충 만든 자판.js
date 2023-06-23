function solution(keymap, targets) {

    let result = [];
    let arr=[];
    

    
    for(let i=0; i<targets.length; i++) {
        arr.push(targets.slice(i,i+1));
       
    }

    
    for(let i=0; i<arr.length; i++) {
        
        let minGroup = 0;
        
        for(let j=0; j<arr[i][0].length; j++) {

            let count=[];
            for(let k=0; k<keymap.length; k++) {
                
               if(keymap[k].indexOf(arr[i][0][j]) != -1) 
                   count.push(keymap[k].indexOf(arr[i][0][j]));
                 

            }

             let min = Math.min.apply(null,count)+1;
             minGroup += min;
            

        }
        if(minGroup == Infinity ) result.push(-1);
        else result.push(minGroup);
     
    }
    
    return result;
}