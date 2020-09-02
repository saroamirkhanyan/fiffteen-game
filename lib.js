function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// devide array into parts
function divideIntoParts(arr, part) {
    let startIndex = 0;
    let result = []
    for (let i = 1; i < arr.length + 1; i++) {
        if ((i) % part === 0) {
            result.push(arr.slice(startIndex, i))
            startIndex = i;
        }
    }
    return result;
}