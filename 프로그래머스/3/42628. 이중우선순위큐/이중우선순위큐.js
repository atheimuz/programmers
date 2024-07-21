function solution(operations) {
    let array = [];
    
    for (const operation of operations) {
        const [action, value] = operation.split(" ");
        
        if (action === "I") {
            array.push(Number(value));
        } else if (action === "D") {
            array.sort((a, b) => a - b);
            
            if (value === "1") {
                array.pop();
            } else if (value === "-1") {
                array.shift();
            }
        }
    }
    
    
    if (array.length === 0) {
        array = [0, 0];
    } else if (array.length === 1) {
        array.push(0);
    } 

    array.sort((a, b) => a - b);
    const min = array[0];
    const max = array[array.length - 1];
    array = [max, min];
    
    return array;
}