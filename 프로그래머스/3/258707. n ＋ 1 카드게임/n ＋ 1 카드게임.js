function solution(coin, cards) {
    let hands = new Set(cards.slice(0,cards.length/3));
    let deck = cards.slice(cards.length/3);
    let round = 1;
    let deckPointer = 0;
    let pending = [];
    const n = cards.length;
    
    while(deckPointer <= deck.length-2) {
        //매 라운드 뽑는 카드
        let pickedCard = [deck[deckPointer] , deck[deckPointer+1]];
        let isDone = false;
        //pending.add 너무 힘들어짐
        //뽑은 카드 일단 펜딩
        pending.push(...pickedCard);
        
        //1. hand 카드로 n+1 만듦
        for(let hand of hands) {
            if(hands.has(n+1-hand)) {
                hands.delete(hand);
                hands.delete(n+1-hand);
                isDone = true;
                break;
            }
        }   
        if(isDone) { round += 1; deckPointer += 2; continue;} 
        
        //2. 기존 카드 + pending 로 n+1 만듦. coin 1개 소모
        let flag = false;
        for(let hand of hands) {
            for(let picked of pending) {
                if(hand + picked === n+1 && coin >= 1) {
                    //뽑힌건 펜딩에서 제외
                    pending = pending.filter(i => i !== picked);
                    //짝 맞는 건 손에서 제거
                    hands.delete(hand);
                    //코인 처리
                    coin -= 1;
                    flag = true;
                    break;
                }
            }
        if(flag) { isDone = true; break;}
        }
        if(isDone) { round += 1; deckPointer += 2; continue;} 
        
        //3. pending 카드 2장으로 n+1 만듦. coin 2개 소모
        let pendingSet = new Set(pending);
        for(let k of pendingSet) {
            if(pendingSet.has(n+1-k) && coin >=2) {
                pending = pending.filter(i => i !== k);
                pending = pending.filter(i => i !== n+1-k);
                coin -= 2;
                isDone = true;
                break;
            }
        }
        if(isDone) { round += 1; deckPointer += 2; continue;} 
        
        break;
        
        
    }
    
    
    return round;
}