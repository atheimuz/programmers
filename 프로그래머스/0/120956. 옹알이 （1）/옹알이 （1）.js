function solution(babbling) {
    let answer = 0;
    const array = ["aya", "ye", "woo", "ma"];
    for (const text of babbling) {
        let newText = text;
        
        for (const string of array) {
            newText = newText.replaceAll(string, "*");
        }
        
        if (!newText.replaceAll("*", "")) {
            answer += 1;
        }
    }
    
    return answer;
}