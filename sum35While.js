// The input to sum35While is a number.
// The function outputs the sum of all multiples of 3 and 5 that are less than that number.

function sum35While(N) {

}

//Try out your function here.
sum35While(6);
sum35While(20);
sum35While(1000);
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
sum35While(N);
printme('\nTesting...');
printme(`\t did you print the proper number of multiples?\t ${out[0] == 'There are 13 multiples of 3 and 5 that are less than 30.'} `);
printme(`\t did you print the proper sum?\t ${out[1] == 'Their sum is 195.'} `);
