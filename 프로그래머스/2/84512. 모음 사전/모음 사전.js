const indexObj = {
    "A": 0,
    "E": 1,
    "I": 2,
    "O": 3,
    "U": 4
};
const indexArray = ["A", "E", "I", "O", "U"]
function solution(word) {
    let text = "A";
    let index = 1;
    
    while (word !== text) {
        if (text.length < 5) {
            text = text + "A";
        } else {
            const lastString = text.substr(4, 1);
            const lastIndex = indexObj[lastString];
            
            if (lastString === "U") {
                // AAAAU => AAAE
                // AAAUU => AAI
                for (let i = text.length - 2; i >= 0; i--) {
                    const targetString = text.substr(i, 1);
                    const targetIndex = indexObj[targetString];
                    
                    if (targetString !== "U") {
                        text = text.substr(0, i) + indexArray[targetIndex + 1];
                        break;
                    }
                } 
            } else {
                text = text.substr(0, 4) + indexArray[lastIndex + 1];
            }
        }
        
        index += 1;
    }
    
    return index;
}