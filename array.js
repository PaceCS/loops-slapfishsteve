
// The function min will take in an array and log its minimum value.
// It will also return that value.
function min(inArray) {
    let minVal = inArray[0];
    for (let i = 1; i < inArray.length; i += 1) {
        if (inArray[i] < minVal) {
            minVal = inArray[i];
        }
    }
    console.log(`The minimum value is ${minVal}.`);
    return minVal;
}

// The function max will take in an array and log its maximum value.
// It will also return that value.
function max(inArray) {
    let maxVal = inArray[0];
    for (let i = 1; i < inArray.length; i += 1) {
        if (inArray[i] > maxVal) {
            maxVal = inArray[i];
        }
    }
    console.log(`The maximum value is ${maxVal}.`);
    return maxVal;
}

// The function sum will take in an array and log the sum of the array.
// It will also return that value.
function sum(inArray) {
    let total = 0;
    for (let i = 0; i < inArray.length; i += 1) {
        total += inArray[i];
    }
    console.log(`The sum of the array is ${total}.`);
    return total;
}

// The function averagewill take in an array and log the average of the values.
// It will also return that value.
function average(inArray) {
    let total = 0;
    for (let i = 0; i < inArray.length; i += 1) {
        total += inArray[i];
    }
    const avg = total / inArray.length;
    console.log(`The average of the array is ${avg}.`);
    return avg;
}


max(Array.from(Array(90).keys()));
sum(Array.from(Array(90).keys()));
average(Array.from(Array(90).keys()));






// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = [[1, 3, 5], [10, 20, 30], Array.from(Array(90).keys())];
const result = [[1, 5, 9, 3], [10, 30, 60, 20], [0, 89, 4005, 44.5]];
const log = [true, true, true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    for (let j of [min, max, sum, average]) {
        j(a[i]);
    }
    printme(out[0]);
    printme(out[1]);
    printme(out[2]);
    printme(out[3]);
    log[0] = log[0] && (out[0] == `The minimum value is ${result[i][0]}.`);
    log[1] = log[1] && (out[1] == `The maximum value is ${result[i][1]}.`);
    log[2] = log[2] && (out[2] == `The sum of the array is ${result[i][2]}.`);
    log[3] = log[3] && (out[3] == `The average of the array is ${result[i][3]}.`);
}
printme(`\t did you properly implement min?\t ${log[0]} `);
printme(`\t did you properly implement max?\t ${log[1]}`);
printme(`\t did you properly implement sum?\t ${log[2]}`);
printme(`\t did you properly implement average?\t ${log[3]}`);
