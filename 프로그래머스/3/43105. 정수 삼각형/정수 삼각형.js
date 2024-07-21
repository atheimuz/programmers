function solution(triangle) {
    const array = triangle.reduceRight((acc, cur) => {
        const maxList = cur.map((v, i) => {
            return v + Math.max(acc[i], acc[i + 1]);
        });
        return maxList;
    });
    
    return array[0];
}


