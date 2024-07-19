function getGCD(num1, num2) {
    if (num1 % num2 === 0) {
        return num2;
    } else {
        return getGCD(num2, num1 % num2);
    }
}



function solution(arrayA, arrayB) {
    let numA = arrayA.reduce((acc, cur) => {
        // 최대공약수 구함
        return getGCD(acc, cur);
    }, arrayA[0]);
    
    let numB = arrayB.reduce((acc, cur) => {
        // 최대공약수 구함
        return getGCD(acc, cur);
    }, arrayB[0]);
    
    
    if (numA > 1) {
        // 상대방 배열에 나눌 수 있는 숫자 있으면 초기화
        const bool = arrayB.some(val => val % numA === 0)
        if (bool) {
            numA = 1;
        }
    }
    
    if (numB > 1) {
        // 상대방 배열에 나눌 수 있는 숫자 있으면 초기화
        const bool = arrayA.some(val => val % numB === 0)
        if (bool) {
            numB = 1;
        }
    }

    
    if (numA > numB) return numA;
    if (numB > numA) return numB;
    if (numA === 1) return 0;
    return numA;
}