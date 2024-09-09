function solution(today, terms, privacies) {
    var answer = [];
    const dates = today.split(".");
    let year = dates[0] ;
    let month = dates[1];
    let day = dates[2];
          
    
        for(let i = 0 ; i < privacies.length; i++) {
        const privacy = privacies[i].split(" ");
        const privacyDate = privacy[0].split(".");
        const privacyTerm = privacy[1];
            
            let dueMonth= Number(privacyDate[1]);;
            let dueYear = Number(privacyDate[0]);
            let dueDay = Number(privacyDate[2]);
            
                for(let j = 0 ; j < terms.length; j++) {
        const term = terms[j].split(" ");
                    if(term[0] == privacyTerm) {
                    dueMonth += Number(term[1]);
        const promise = term[0];
        if(promise == privacy[1]) {//뺀게 더 과거날짜면 만료
              while(dueMonth > 12) { dueMonth -= 12; dueYear += 1;  }
            if(Number (dueDay) == 1) {dueDay = 28; dueMonth -= 1; }else dueDay -= 1;
        }
                    }
        }
            //due가 더 커야함
            dueYear = dueYear.toString();
            dueMonth = dueMonth.toString();
            dueDay = dueDay.toString();
            if(dueMonth.length ==1) dueMonth = "0" + dueMonth;
             if(dueDay.length ==1) dueDay = "0" + dueDay;
          
            const dueDate = dueYear+dueMonth+dueDay;
            const todayDate = year + month + day;
          if(todayDate > dueDate) answer.push(i+1);

    }
    return answer;
    }
    
