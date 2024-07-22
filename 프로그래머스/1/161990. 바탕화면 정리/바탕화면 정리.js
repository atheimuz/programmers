function solution(wallpaper) {
    var answer = [];
    const width = wallpaper[0].length;
    const height = wallpaper.length;
    
    const positions = [];

    for (let y = 0; y < height; y++) {
        const row = wallpaper[y].split("");
        for (let x = 0; x < width; x++) {
            const value = row[x];
            
            if (value === "#") {
                positions.push([x, y]);
            }
        }
    }
    
    const drag = positions.reduce((acc, cur) => {
        if (cur[0] < acc.minX || acc.minX === undefined) {
            acc.minX = cur[0];
        }
        
        if (cur[0] > acc.maxX || acc.maxX === undefined) {
            acc.maxX = cur[0];
        }
        
        if (cur[1] < acc.minY || acc.minY === undefined) {
            acc.minY = cur[1];
        }
        
        if (cur[1] > acc.maxY || acc.maxY === undefined) {
            acc.maxY = cur[1];
        }
        
        return acc;
    }, {})
    
    drag.maxX += 1;
    drag.maxY += 1;
    
    const { minX, minY, maxX, maxY } = drag;
    
    return [minY, minX, maxY, maxX];
}
