///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

//See comments at the bottom of file to get a long explanation of
// .reduce

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
function callbackFunction(prevValue, currentValue) {
    return prevValue + currentValue.price
}

 

const summedPrice = cart.reduce(callbackFunction, 0)
//console.log(summedPrice)

//first time through: return 0 + 9.99
//second time through: return 9.99 + 8.99
//third time (and last time) through: return 18.98 + 7.99
//then returns 26.97



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let total = cartTotal + (tax * cartTotal) - couponValue
    return total
}
//console.log(calcFinalPrice(5,1,.05))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name: string
    billingAddress: string
    accountBalanceInDollars: number
    isRewardsProgramMember: boolean
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const custObj = {
    name: 'Jared Collier',
    billingAddress: '1234 Main St',
    accountBalanceInDollars: 5.67,
    isRewardsProgramMember: true
} 
//console.log(custObj)











//jared's section on understanding array.reduce() for problem 1
const jaredArray = [3,4,5,6]

const jaredCallbackFunction = function(prevValue, currentValue) {
    return prevValue + currentValue
}

const jaredArraySum = jaredArray.reduce(jaredCallbackFunction)
console.log(jaredArraySum)
// because I don't start with an initial value like this:
//    jaredArray.reduce(jaredCallbackFunction, 5)
//  (the initial value would be "5" in the line above)
// I start with prevValue being the first element, 3
// and current value being the second element, 4
// so the first time through reduce, I get:
//   return 3 + 4    (which is 7)
// the second time through the loop, my value will start at 7
// so then I get
//   return 7 + 5
// (5 being the next value in the array)
// and of course, that is 12
// so the third and last time through the array, I do
// 12 + 6
// and then reduce returns that final sum
// and in the end, I get 18

//now, let's look at it with an initial Value
const jaredArraySum2 = jaredArray.reduce(jaredCallbackFunction, 8)
console.log(jaredArraySum2)
//now my inital value is the second parameter of .reduce,
// (the first parameter of .reduce being the callback function)
//if that initial value is there, reduce will work a little differently
//insteal of the second element (5) of the array being currentValue
// the first element (4) of the array will be the currentValue
// so I use 8 as my previousValue on the first run through, and do:
//   return 8 + 3
// second time through I add those up to 11, and do
//   return 11 + 4
// and the third time through, I do 
//  return 15 + 5
// and the the fourth and last time, I do
//  return 20 + 6
// and my final value is 26

// you'll notice that 26 is 8 more than the first time we ran it without
// an initialValue