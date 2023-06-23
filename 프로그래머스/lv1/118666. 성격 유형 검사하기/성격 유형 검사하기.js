function solution(survey, choices) {
    //같으면 사전순
    //비동의,동의
    
    //R,T,C,F,J,M,A,N
    let score = [0,0,0,0,0,0,0,0];
    let result = '';
    
    for(let i=0; i<survey.length; i++) {

        let count = 0;
        let pick;
        
        if (choices[i] < 4) { count += -choices[i]+4; pick = survey[i][0]; }
        if (choices[i] > 4) { count += choices[i]-4; pick = survey[i][1]; }
        
        if(pick == "R") score[0] += count;
        if(pick == "T") score[1] += count;
        if(pick == "C") score[2] += count;
        if(pick == "F") score[3] += count;
        if(pick == "J") score[4] += count;
        if(pick == "M") score[5] += count;
        if(pick == "A") score[6] += count;
        if(pick == "N") score[7] += count;
        
        
    }
    //R,T,C,F,J,M,A,N
    (score[0] >= score[1]) ? result += 'R' : result += 'T';
    (score[2] >= score[3]) ? result += 'C' : result += 'F';
    (score[4] >= score[5]) ? result += 'J' : result += 'M';
    (score[6] >= score[7]) ? result += 'A' : result += 'N';
    

    return result;
}