function solution(s) {
    let answer = 0;
    const array = s.split(" ");
    
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        const prevNum = Number(array[i - 1]);
        
        if (num === "Z") {
            answer -= prevNum;
        } else {
            num = Number(num);
            answer += num;
        }
    }
    
    return answer;
}