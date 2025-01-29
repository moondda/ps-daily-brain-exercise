function solution(record) {
    let userInfo = {}; //key는 id
    let result = [];
    
    for(let i=0; i<record.length; i++) {
        const [command, id, nickname ] = record[i].split(" ");
        
        //신규 유저일때
        if(command === "Enter" && !(id in userInfo)) {
            userInfo[id] = nickname;
            result.push([id, "IN"])
        }
        
        //기존 유저가 이름을 바꿨을 때
        else if(command === "Change" && (id in userInfo)) {
            userInfo[id] = nickname;
        }
        //기존 유저가 나갔다가 이름을 바꿔 들어왔을 때
        else if(command === "Enter" && (id in userInfo)) {
            userInfo[id] = nickname;
            result.push([id,"IN"]);
        }
        //유저가 나갔을 때
        else if(command === "Leave") {
            result.push([id,"OUT"]);
        }
    }
    let answer=[];
    for(let i=0; i<result.length; i++) {
        if(result[i][1] === "OUT") {
            answer.push(userInfo[result[i][0]] +"님이 나갔습니다.");
        }
        if(result[i][1] === "IN") {
            answer.push(userInfo[result[i][0]]+"님이 들어왔습니다.");
        }
    }
    return answer;
}