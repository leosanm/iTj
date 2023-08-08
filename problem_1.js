/*
Given a list of n integers where nums[i] is in the range [1, list length], write a function 
that solves the following problem, return a list of all the integers in the range [1, list length]
that do not appear in nums.

Example 1:
input: numbs = [4,3,2,7,8,2,3,1]
output: [5,6]

Example 2:
Input: nums = [1,1]
OutputL [2]
*/
function missingNo(nums){
    //var orderedNums = nums.sort(function(a, b){
    //    return a - b;
    //})

    //console.log("array length:",orderedNums.length)
    //console.log("input ordered:",JSON.stringify(orderedNums))
    var seed = 1;
    var response =[]
    for(var i = 0 ; i < nums.length; i++){
        //console.log(seed);
        var found = nums.find((n) => n === seed ) 
        if (found === undefined) {
            response.push(seed);
        } 
        //console.log("found it: %s => %s ", found, i + 1)
        seed ++;

    }
    return response;
}

//var arr1 = [4,3,2,7,8,2,3,1];
var arr1 = [1,1];

console.log(missingNo(arr1))