const sum = (a, b) => {
    return a + b
};

// // export the functionality from this file with module.exports
// // import the functionality in another file with require

// module.exports = sum;


// 1. setting module exports equal to a function module.exports = fx
// named and anonymous

// module.exports = function(a, b) {
//     return a + b
// };

// // 2. add function expressions as properties

// module.exports = function() {
//     console.log('hello world')
// };

const subtract = (c, d) => {
    return c - d
};

module.exports = {
    sum,
    subtract
};


function Greetr() {
    this.greeting = 'hello world',
    this greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;