function solution(n, info) {
    var answer = [];
    let maxDiff = 0;
    let maxArr = [];
    
    const isMax = (arr1,arr2) => {
        for (let i = 10; i >= 0; i--) {
            if(arr1[i] > arr2[i]) return arr1;
            if(arr1[i] < arr2[i]) return arr2;
        }
        return arr1;
    }
    const dfs = (arr,pointer,apeach,ryan,leftArrow) => {
        //끝났을때
        if(pointer === 11) {
            //!! 화살 소비해야함
            if(leftArrow > 0) {
                arr[arr.length-1] += leftArrow;
            }
            
            if(ryan > apeach) {
                if(maxDiff < ryan-apeach) {
                    maxDiff = ryan-apeach;
                    maxArr = arr;
                }
                else if(maxDiff === ryan-apeach) {
                    maxArr = isMax(arr,maxArr);
                }
            }
            return;
        }
        
        //어피치 승
        //1. 어피치가 진짜 이겨서 이겼을때. 어피치는 쏘고 라이언은 아예 안 쏨
        if(info[pointer] > 0) {
            let newArr = [...arr];
            newArr[pointer] = 0;
            dfs(newArr,pointer+1,apeach+10-pointer,ryan,leftArrow);
        }
        //2. 비겨서 어피치가 이겼을 때
        if(info[pointer] > 0 && leftArrow >= info[pointer]) {
            let newArr = [...arr];
            newArr[pointer] = info[pointer];
            dfs(newArr,pointer+1,apeach+10-pointer,ryan,leftArrow-info[pointer]);
        }
        
        //라이언 승
        // 라이언이 이겼을 때
        if(leftArrow > info[pointer]) {
            let newArr = [...arr];
            newArr[pointer] = info[pointer]+1;
            dfs(newArr,pointer+1,apeach,ryan+10-pointer,leftArrow-info[pointer]-1);
        }
        
        //둘다 점수 안가져감(둘다 안쏨)
        if(info[pointer] === 0) {
            let newArr = [...arr];
            newArr[pointer] = 0;
            dfs(newArr,pointer+1,apeach,ryan,leftArrow);  
        }
    }
    
    dfs(Array(11).fill(null),0,0,0,n);
    return maxDiff === 0 ? [-1] : maxArr;
}