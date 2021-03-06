function starString(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    return stars;
};

// Part 2 & 3
function drawStars(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result.push(starString(arr[i]))
        } else if (typeof arr[i] === 'string') {
            let string = "";
            for (let j = 0; j < arr[1].length; j++) {
                string += arr[i][0].toLowerCase();
            }
            result.push(string);
        }
    }
    return result;
}

const y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
const z = [4, 6, 1, 3, 5, 7, 25]

console.log(drawStars(y));
console.log(drawStars(z));



