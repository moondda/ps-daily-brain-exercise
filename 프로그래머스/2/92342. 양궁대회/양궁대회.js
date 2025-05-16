function solution(n, info) {
    //0~10점
    //어피치가 해당 점수에 더 많이 쏘거나 똑같게 쏘면 해당점수 어피치가 가져감
    //라이언은 어피치보다 많이 쏴야 가져감
    //둘다 해당 점수에 안쏘면 아무도 안 가져감
    //최종점수가 라이언이 높으면 라이언승
    //최종점수가 같거나 어피치가 높으면 어피치 승
    //라이언이 가장 큰 점수 차로 우승하기 위한 화살 배열 리턴
    //여러가지 나오면 가장 낮은 점수를 더 많이 맞힌거 리턴
    //라이언이 우승할수 없으면 [-1] return

    let answerArr = [-1];
    let maxDiff = 1;
    const dfs = (pointer,leftArrow, arr,ryanScore,apeachScore) => {
        if(pointer === 11) {
            let finalArr = [...arr];
            if(leftArrow > 0) finalArr[10] += leftArrow;

            if(ryanScore-apeachScore >= maxDiff ) {
                if(ryanScore-apeachScore === maxDiff) {
                    for(let i=10; i>=0; i--) {
                        if(answerArr[i] < arr[i]) { answerArr=[...finalArr]; break;}
                        if(answerArr[i] > arr[i]) break;
                    }
                }
                else {
                    maxDiff = ryanScore-apeachScore;
                    answerArr = [...finalArr];
                }
            }
            
            return;   
        }
        
        //이번 점수는 라이언이 가져갈때
        if(info[pointer] < leftArrow) {
            arr[pointer] = info[pointer]+1;
            dfs(pointer+1,leftArrow-info[pointer]-1,arr,ryanScore+10-pointer,apeachScore);
            arr[pointer] = 0;   
        }
        
        //이번 점수는 어피치가 가져갈때 => 라이언은 안 쏨
        if(info[pointer]>0) {
            dfs(pointer+1,leftArrow,arr,ryanScore,apeachScore+10-pointer);
        }
        
        //둘다 아무 점수도 쏘지 않아서 아무도 가져가지 않을때
        if(info[pointer] === 0){
            dfs(pointer+1,leftArrow,arr,ryanScore,apeachScore);
        }
    }
    
    dfs(0,n, new Array(11).fill(0),0,0);
    return answerArr;
}