function solution(n, t, m, p) {
    const answer = [];
    const stringArray = [];
    let index = 1;
    const maxStringCount = m * t - m + p;
    
    while (maxStringCount >= stringArray.length) {
        const num = index - 1;
        const answer = num.toString(n);
        stringArray.push(...answer.split(""));
        index += 1;
    }
    
    const filteredStringArray = stringArray.filter((string, i) => {
        if (i >= maxStringCount) return false;
        return ((i + 1) % m) === (p % m)
    })
    
    return filteredStringArray.join("").toUpperCase();
}