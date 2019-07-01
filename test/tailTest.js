const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", function()
{
    
    it("should return last array in index", () =>{
        assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse,Labs");
    })
    it("original array is unmodified", () => {

        
        
        assertArraysEqual(tail(words), ["Yo Yo", "Lighthouse", "Labs"]);
        
    })
})










//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!