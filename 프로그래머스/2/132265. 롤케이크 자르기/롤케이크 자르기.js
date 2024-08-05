function solution(topping) {
    let answer = 0;
    
    const firstToppingArray = new Set();
    const secondArrayCount = {};
    let secondToppingCount = 0;
    
    for (let index = 0; index < topping.length; index++) {
        // 토핑 종류별로 카운트
        const item = topping[index];
        if (secondArrayCount[item]) {
            secondArrayCount[item] += 1;
        } else {
            secondArrayCount[item] = 1;
            secondToppingCount += 1;
        }
    }
    
    for (let index = 0; index < topping.length; index++) {
        const item = topping[index];
        
        firstToppingArray.add(item);
        
        if (secondArrayCount[item] > 1) {
            secondArrayCount[item] -= 1;
        } else {
            // 두번째 배열 토핑 종류 감소
            delete secondArrayCount[item];
            secondToppingCount -= 1;
        }
        
        
        if (firstToppingArray.size === secondToppingCount) {
            answer += 1;
        }
        
        if (firstToppingArray.size > secondToppingCount) {
            break;
        }
    }
    
    return answer;
}