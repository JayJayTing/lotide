const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
//   } else {
//     console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
//   }

// };




const eqArrays = function(array1, array2)
{
  if(array1.length === array2.length)
  {
    for (var i = 0; i < array1.length; i ++)
    {
      if(array1[i] !== array2[i])
      {
        return false;
      }
    }

  }
  else
  {
    return false;
  }

return true;


}

module.exports = eqArrays;

