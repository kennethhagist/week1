function zeroNegativity(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            return false;
        }
    }
    return true;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function howManyEven(arr) {
    let sum = 0;
    for (let i =0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            sum += 1;
        }
    }
    return sum;
}

function createDummyArray(num) {
    const arr = [];
    for (let i =0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

function randomChoice(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}