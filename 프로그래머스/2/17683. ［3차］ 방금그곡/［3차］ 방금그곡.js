function formatArray(string) {
    // c# => #c 로 변경해서 표기
    const returnValues = [];
    const sharpArray = string.split("#");
    for (let i = 0; i < sharpArray.length; i ++) {
            const array = sharpArray[i];
            const stringArray = array.split("");
        
            if (i > 0) {
                const sharpText = returnValues[returnValues.length - 1];
                returnValues[returnValues.length - 1] = sharpText.toLowerCase();
            }
            returnValues.push(...stringArray);
        }
    return returnValues;
}

function diffMinutes(start, end) {
    // 시간 차이 구하기
    const startTime = start.split(":");
    const endTime = end.split(":");
    const newStartTime = Number(startTime[0]) * 60 + Number(startTime[1])
    const newEndTime = Number(endTime[0]) * 60 + Number(endTime[1])
    
    return newEndTime - newStartTime
//     if (start < end) {
//         const newEndTime = Number(endTime[0]) * 60 + Number(endTime[1])
//         return newEndTime - newStartTime
//     } else {
//         const newEndHour = Number(endTime[0]) + 24;
//         const newEndTime = newEndHour * 60 + Number(endTime[1])
        
//         return newEndTime - newStartTime
//     }
    
}


function solution(m, musicList) {
    let answer = '';
    const formattedM = formatArray(m).join("");
    
    // 재생 기간 긴 순서대로 정렬
    const filteredMusicList = [...musicList].sort((a, b) => {
        const musicInfoA = a.split(",");
        const musicInfoB = b.split(",");
        const diffA = diffMinutes(musicInfoA[0], musicInfoA[1]);
        const diffB = diffMinutes(musicInfoB[0], musicInfoB[1]);
        
        if (diffA === diffB) {
            return diffB;
        }
        
        return diffB - diffA;
    })
    
    for (let i = 0; i < filteredMusicList.length; i++) {
        const musicInfo = filteredMusicList[i].split(",");
        const totalPlayedMinutes = diffMinutes(musicInfo[0], musicInfo[1]);
        
        const title = musicInfo[2];
        const melody = musicInfo[3];
        const melodyFormattedArray = formatArray(melody)
        const minutes = melodyFormattedArray.length;
        
        let newMelody = [];
        
        while(newMelody.length < totalPlayedMinutes) {
            // 총 재생된 멜로디 반복해서 생성
            newMelody.push(...melodyFormattedArray);
            
            if (newMelody.length > totalPlayedMinutes) {
                newMelody = newMelody.slice(0, totalPlayedMinutes);
            }
        }
        
        newMelody = newMelody.join("");
        console.log(newMelody, formattedM)
        if (newMelody.includes(formattedM)) {
            answer = title;
            break;
        }
    }
    
    
    return answer || "(None)";
}