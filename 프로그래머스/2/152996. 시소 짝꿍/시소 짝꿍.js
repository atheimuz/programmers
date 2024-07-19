function solution(weights) {
  weights.sort((a, b) => b - a);
  const countObj = {};
  return weights.reduce((cnt, weight) => {
    if (countObj[weight]) {
        // 1:1
        cnt += countObj[weight];
    }
    if (countObj[(weight * 3) / 2]) {
        // 2:3
        cnt += countObj[(weight * 3) / 2]; 
    }
    if (countObj[weight * 2]) {
        // 2:4
        cnt += countObj[weight * 2]
    };
    if (countObj[(weight * 4) / 3]) {
        // 3:4
        cnt += countObj[(weight * 4) / 3];
    }

    // 개수 카운트
    countObj[weight] = (countObj[weight] || 0) + 1;
    return cnt;
  }, 0);
}