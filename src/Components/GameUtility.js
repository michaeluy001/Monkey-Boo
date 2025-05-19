export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // pick random index
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}

