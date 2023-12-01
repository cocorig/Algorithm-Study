function solution(participant, completion) {
    
    // Map 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억한다.
    // 모든 값(객체 및 원시 값 모두)은 키 또는 값으로 사용될 수 있다.

    // Map생성자 함수를 통해 Map객체 생성
    const myMap = new Map();

    for ( const element of participant){

        // 객체 안에 참가자의 이름이 없으면 참가자의 이름을 키, 1을 값으로 추가
        if(!myMap.get(element)){
            myMap.set(element, 1);
        
        // 이미 참가 자의 이름이 있는 경우 해당 키의 값을 +1
        }else{
            myMap.set(element, myMap.get(element)+1);
        }
    }

    for(const element of completion){
        
        // 객체 안에 완주자의 이름이 있으면 해당 키의 값을 -1
        if(myMap.get(element)){
            myMap.set(element, myMap.get(element)-1);
        }
    }
    
    for(const element of participant){
        // 키에 해당하는 값이 0보다 큰 경우 키를 리턴
        if(myMap.get(element)>0 ){
            let answer = element;
            return answer;
        }
    }
}
