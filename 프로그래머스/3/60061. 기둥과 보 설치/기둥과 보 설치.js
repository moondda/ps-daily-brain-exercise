function solution(n, build_frame) {
    //build frame [가로,세로,기둥이면0 보면1, 삭제면0 설치면1]
    //return [x,y,a] x,y는 보와 기둥의 교차점. a는 기둥이면0 보면 1
    //보의 조건
    //기둥의 조건
    
    const curr0 = new Set(); //기둥
    const curr1 = new Set(); //보
    
    const isValid0 = () => {
        for(let i of curr0){ //기둥
            const [x,y] = i.split(",").map(Number);
            //바닥
            if(y===0) continue;
            //보 한쪽 끝 위
            else if(curr1.has(`${x-1},${y}`) || curr1.has(`${x},${y}`)) continue;
            //다른 기둥 위
            else if(curr0.has(`${x},${y-1}`)) continue;
            return false;  
        }
        return true;
    }
    
    const isValid1 = () => {
        for(let i of curr1){ //보
            const [x,y] = i.split(",").map(Number);
            //한쪽 끝 부분이 기둥 위
            if(curr0.has(`${x},${y-1}`) || curr0.has(`${x+1},${y-1}`)  ) continue;
            //양쪽 끝 부분이 다른 보와 동시에 연결
            else if(curr1.has(`${x-1},${y}`) && curr1.has(`${x+1},${y}`)) continue;
            return false;  
        }
        return true;
    }
    
    for(let build of build_frame) {
        const [x,y,a,b] = build;
        
        //기둥이면
        if(a===0) {
            //삭제일때
            if(b===0) {
                curr0.delete(`${x},${y}`);
                if(!isValid0() || !isValid1()) curr0.add(`${x},${y}`);  
            }
            //설치일때    
            if(b===1) {
                //바닥
                if(y===0) curr0.add(`${x},${y}`);
                //보 한쪽 끝 위
                else if(curr1.has(`${x-1},${y}`) || curr1.has(`${x},${y}`))
                    curr0.add(`${x},${y}`);
                //다른 기둥 위
                else if(curr0.has(`${x},${y-1}`))
                    curr0.add(`${x},${y}`);
            }
        }
        
        //보 일때
        else if(a===1) {
            //삭제일때
            if(b===0) {
                curr1.delete(`${x},${y}`);
                if(!isValid0() || !isValid1()) curr1.add(`${x},${y}`);  
            }
                
            //설치일때    
            if(b===1) {
                //한쪽 끝 부분이 기둥 위
                if(curr0.has(`${x},${y-1}`) || curr0.has(`${x+1},${y-1}`)  )
                    curr1.add(`${x},${y}`);
                //양쪽 끝 부분이 다른 보와 동시에 연결
                else if(curr1.has(`${x-1},${y}`) && curr1.has(`${x+1},${y}`))
                    curr1.add(`${x},${y}`);
            }
        }
    }
    
    let result = [];
    for(let curr of curr0) {
        const [x,y] = curr.split(",").map(Number);
        result.push([x,y,0]);     
    }
    for(let curr of curr1) {
        const [x,y] = curr.split(",").map(Number);
        result.push([x,y,1]);     
    }

    return result.sort((a,b)=> {
        if(a[0] != b[0]) return a[0]-b[0];
        else if(a[1] !== b[1]) return a[1]-b[1];
        else return a[2]-b[2];
    });
}