//this solution is a bit verbose, but performs better because it builds off a base case; it does not have to touch every character of every string in the array.
//the replace() helper method will only edit each character in the string a max of one time.


const buildTower = height => {
    //checking range of height not required, but practical. If the statement were omitted, 0 and negative numbers would produce an empty array.
    if(height < 1) {
        throw new RangeError('Height of tower must be greater than 0!');
    }

    //this solution has poor memory performance, so limiting the size of inputs reduces strain on the system.
    if(height > 1000) {
        throw new RangeError('Expecting height of tower < 1000');
    }

    const answer = [];

    //calculate the width (2n-1)
    const width = (height * 2) - 1;

    //create base layer of tower
    let base = '';
    for(let i = 0; i < width; ++i) {
        base += '*';
    }
    answer.push(base);
    //base now is '***...*' to desired num of chars.


    //build each row from the previous row, starting with the base case, and push to the array
    incr = 1;
    let row = base;
    for(let i = 0; i < (height - 1); ++i) {
        //run function to replace *'s with ' '
        row = replace(row, incr);
        answer.unshift(row);
        incr++;
    }

    return answer;
}

const replace = (str, numFromSide) => {
    let oneSideSpaces = '';
    for(let i = 0; i < numFromSide; ++i) {
        oneSideSpaces += ' ';
    }

    return oneSideSpaces + str.slice(numFromSide, -numFromSide) + oneSideSpaces;
}

const printTower = twr => {
    for(let i = 0; i < twr.length - 1; ++i) {
        console.log(`${twr[i]}
        `);
    }
    console.log(twr[twr.length - 1]);
}

// printTower(buildTower(-2));
// printTower(buildTower(-1));
// printTower(buildTower(0));
// printTower(buildTower(1));
// printTower(buildTower(2));
// printTower(buildTower(3));
// printTower(buildTower(4));
// printTower(buildTower(5));
// printTower(buildTower(6));
printTower(buildTower(95));