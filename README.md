# iTj
Test Repository 

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

-----------------

/**
 * Given a list of integers nums and an integer target, write a function that solves the following
 * problem; return indices of the two numbers such that they add up to target,
 * You may assume that each input would have a exactly one solution, and you may not use the 
 * same element twice.
 * You can retunr the answer in any order
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * output: [0,1]
 * ExplanationÑ Because nums[0] + nums[1] == 9, we return [0,1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6.
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output = [0.1]
 */

function indices(nums, target){
    var response = []
    console.log("target:", target)
    for(var i = 0; i<nums.length; i++){
        console.log("var: %s, index: %s", nums[i],i)
        for(var j = i+1; j < nums.length; j ++ ){
            var newtarget = nums[i] + nums[j];
            if (target == newtarget){
                response.push(i);
                response.push(j);
            }
        }
    }

    return response;
}
//var nums = [2,7,11,15];
//var target = 9;

var nums = [3,2,4];
var target = 6;

console.log(indices(nums, target))
