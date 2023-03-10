const marks = [85,86,88,80,90,82,87];
const max = marks.reduce((initial, current) => {  //initial = 85, current = 86
    if(current > initial)                         //checks if current is greater than initial
        return current;                           //if so initial = current
    return initial;                               //else initial = initial, current becomes the next value.
});
console.log(max);
//
//
//
/************condensed version*******************/
//
//
//
const marks = [85,86,88,80,90,82,87];
const max = marks.reduce((initial, current) => Math.max(initial,current));
console.log(max);
//
//
//
/************min version*******************/
//
//
//
const marks = [85,86,88,80,90,82,87];
const min = marks.reduce((initial, current) => Math.min(initial,current));
console.log(min);
