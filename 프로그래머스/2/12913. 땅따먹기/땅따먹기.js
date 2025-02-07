function solution(land) {
    let answer =[];

    for(let i=0; i<land.length-1;i++) {//층수
        for(let j=0;j<4;j++){ //5 6 7 8 내부 순환
            let biggest = 0;
            for(let k=0;k<4;k++){ //1 2 3 4 위 순환
            if(j !== k)  
                if(biggest < land[i][k]) biggest = land[i][k];
        }
            land[i+1][j] += biggest;
    }
    }
    return Math.max(...land[land.length-1]);
}