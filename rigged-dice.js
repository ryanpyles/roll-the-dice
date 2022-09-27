const prompt = require('prompt-sync')
({sigint: true});


function rigTheDice() {

let rigged = Number(prompt('Enter a side that you would like to rig between 1 and 6:  '))
let riggedNum = Math.ceil(Math.pow(1/6, 2));
let roll = Math.ceil(Math.random() * 6);

console.log('Actual roll:  ' + roll);
if(roll !== riggedNum){
    console.log(riggedNum);

} else {
    console.log(roll);
}
};

rigTheDice();