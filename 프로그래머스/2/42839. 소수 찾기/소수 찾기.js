function checkPrime(number) {
    // 소수 판별
    let value = true;
    
    if (number < 2) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            value = false;
            break;
        }
    }
    
    return value;
}

function solution(numbers) {
    let numberList = [];
    const stringList = numbers.split("");
    
    function makeArray(array, result, size) {
        // 숫자 조합 만들기
        if(result.length === size) {
            numberList.push(result);
        };

        for(var i = 0; i < array.length; i++) {
            let newArray = [...array];
            let newResult = [...result, array[i]];
            newArray.splice(i, 1);
            makeArray(newArray, newResult, size);
        }
    }
    
    for (let i = 0; i < stringList.length; i++) {
        // 개수대로 조합 만듦
        makeArray(stringList, [], i + 1);
    }
    
    // 숫자로 만듦
    numberList = numberList.map(arr => Number(arr.join("")));
    // 중복 제거
    numberList = [...new Set(numberList)];
    // 소수 필터
    const primeNumberList = numberList.filter(num => checkPrime(num));
    return primeNumberList.length;
}
    
