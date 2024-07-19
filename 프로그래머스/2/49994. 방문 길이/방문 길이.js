function solution(dirs) {
    let answer = 0;
    const turnList = dirs.split("");
    const positionObj = {};
    let position = [0, 0];
    
    for (let i = 0; i < turnList.length; i++) {
        const turn = turnList[i];
        let newPosition = [...position];
        
        if (turn === "U") {
            newPosition[1] += 1;
        }
        
        if (turn === "D") {
            newPosition[1] -= 1;
        }
        
        if (turn === "R") {
            newPosition[0] += 1;
        }
        
        if (turn === "L") {
            newPosition[0] -= 1;
        }
        
        
        // 이동 가능
        if (Math.abs(newPosition[0]) <= 5 && Math.abs(newPosition[1]) <= 5) {
            // 위치 문자로 기록
            const positionKey = [position.join(""), newPosition.join("")].sort().join("")
            
            if (positionObj[positionKey]) {
                // 걸어본 적 있는 길
                positionObj[positionKey] += 1;
            } else {
                // 처음 걷는 길
                answer += 1;
                positionObj[positionKey] = 1;
            }
            
            // 현재 위치 업데이트
            position = newPosition;
        }
    }
    // console.log(positionObj);
    return answer;
}