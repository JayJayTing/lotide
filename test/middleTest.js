const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');





describe("#middle", () => {
    it("should return empty array if array = 1", function(){

        assertArraysEqual(middle([1]), []);
        

    })
    it("should return middle array when size of array is odd", function(){

        assertArraysEqual(middle(middle([1, 2, 3])), [2]);
        

    })
    it("should return average of middle two array when array length is even", function(){

        assertArraysEqual(middle(middle([1, 2, 3, 4])), [2, 3]);
        

    })
    
});