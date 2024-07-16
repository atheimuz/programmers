function solution(skill, skill_trees) {
    var answer = 0;
    const skillArray = skill.split("");
    
    
    for (let i = 0; i < skill_trees.length; i++) {
        const skill_tree = skill_trees[i];
        const array = skill_tree.split("");
        let result = true;
        let processIndex = -1;
        
        for (let s = 0; s < array.length; s++) {
            const string = array[s];
            const index = skillArray.indexOf(string);
            if (index === -1) {
                // pass (스킬트리에 없음)
            } else if (index !== processIndex + 1) {
                result = false;
                break;
            } else {
                // pass (이전 스킬 배움)
                processIndex = index;
            }
        }
        
        if (result) {
            answer += 1;
        }
    }
    
    return answer;
}