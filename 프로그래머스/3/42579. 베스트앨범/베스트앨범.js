function solution(genres, plays) {
    const genreObj = {};
    // { "classic": { play: 1000, items: [0,1] }, "pop": { ... }};
    
    for (let i = 0; i < genres.length; i++) {
        // 장르별로 재생수, 고유번호 정보 추가
        const genre = genres[i];
        const play = plays[i];
        
        if (genreObj[genre]) {
            genreObj[genre].play += play;
            genreObj[genre].items.push(i);

        } else {
            genreObj[genre] = { play, items: [i] }
        }
    }
    
    // 재생수로 장르 정렬
    const sortedGenre = Object.keys(genreObj).sort((a, b) => {
        return genreObj[a].play - genreObj[b].play;
    })
    
    return sortedGenre.reduce((acc, cur) => {
        // 장르별로 고유번호 플레이수로 정렬해서 2개만 저장
        const info = genreObj[cur];
        info.items.sort((a, b) => {
            const playA = plays[a];
            const playB = plays[b];
            
            if (playA === playB) {
                // 재생수가 같다면 고유 번호 낮은 노래 먼저
                return a - b;
            } else {
                return plays[b] - plays[a];
            }
        })
        info.items = info.items.slice(0, 2);
        acc.unshift(...info.items);
        
        return acc;
    }, [])
}