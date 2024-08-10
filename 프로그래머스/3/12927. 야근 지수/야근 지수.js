function solution(n, works) {
    const sortedWorks = [...works].sort((a, b) => b - a);
    const maxWork = sortedWorks[0];
    let time = n;
    
    while (time > 0) {
        if (!sortedWorks.length) break;
        sortedWorks[0] = sortedWorks[0] - 1;
        time -= 1;
        
        if (sortedWorks[0] === 0) {
            sortedWorks.shift();
        } else if (sortedWorks[0] < sortedWorks[1]) {
            const value = sortedWorks.shift();
            for (let i = 0; i < sortedWorks.length; i++) {
                if (value > sortedWorks[i]) {
                    sortedWorks.splice(i, 0, value);
                    break;
                } else if (i === sortedWorks.length - 1){
                    sortedWorks.push(value);
                    break;
                }
            }
        } 
        
    }
    
    const answer = sortedWorks.reduce((acc, cur) => {
        return acc + (cur ** 2)
    }, 0)
    
    return answer;
}