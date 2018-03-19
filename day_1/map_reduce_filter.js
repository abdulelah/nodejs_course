'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 */

// those are our core arrays that we are going to play with
var arr = [1,2,3,4,5,6,7]
var companyObject = {
    "employees": [
        {
            "name": "emp1",
            "salary": 1000
        },
        {
            "name": "emp2",
            "salary": 500
        },
        {
            "name": "emp3",
            "salary": 2000
        },
        {
            "name": "emp4",
            "salary": 3000
        }
    ]
}


// this is how usually people used to access arrays
// for(var i=0; i < arr.length; i++){
//     arr[i] = arr[i] * 2
// }

// our target change is to multiply each element in the array by 2
var mapFunc = (element) =>{
    return element * 2
}

// this function is simulate map behaviour
// as you can see map function made a new copy of the array
var myMap = (func, arr) => {
    var newArr = []
    for(var i=0; i < arr.length; i++){
        newArr.push(func(arr[i]))
    }
    return newArr
}

// creating a new map array using the mapFunc we have created and the function myMap
var newArr = myMap(mapFunc, arr)

// this one is doing the same thing as the past function but using the core map function
// this approach is the one you should use whenever you needed to map arrays
var newArr2 = arr.map((element) =>{
    return element * 2
})

// this function is very similar to the map, the only different is that this one
// is returning nothing it only iterate over all the elements of an array
var newArr3 = newArr2.forEach((element) => element)

console.log("Original array: " + arr)
console.log("newArr: " + newArr)
console.log("newArr2: " + newArr2)
console.log("newArr3: " + newArr3)


// this function is simulate reducer function behaviour
// as you can see reducer function is not returning an array
// and instead it returns an aggregated value
var myReducer = (func, arr, initValue) => {
    var newValue = initValue
    for(var i=0; i < arr.length; i++){
        newValue = func(arr[i], newValue)
    }
    return newValue
}

// here we build a reducer function that sums up the salaries of all employees
var sumSalaries = myReducer(
    (element, aggregatedValue) => {
        return aggregatedValue + element.salary
    },
    companyObject.employees,
    0
)

// this code is doing the same exact thing as the function before it
// the only defirent is that this one uses the core reduce function
// instead, which is the one you should always use when needed
var sumSalaries2 = companyObject.employees.reduce(
    (aggregatedValue, element) => {
        return aggregatedValue + element.salary
    },
    0
)

// this code is adding an extra layer which is the filter function before doing the reduce
// to execlude any employee with a salary of 1000 or less
// this function using function chain technique
var sumSalariesMoreThan1000 = companyObject.employees
    .filter((element) => element.salary > 1000)
    .reduce(
        (aggregatedValue, element) => {
            return aggregatedValue + element.salary
        },
        0
    )


console.log("sumSalaries: " + sumSalaries)
console.log("sumSalaries2: " + sumSalaries2)
console.log("sumSalariesMoreThan1000: " + sumSalariesMoreThan1000)