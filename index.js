// ex1

// const arr = [5, 30, 15, 40, 50, 25, 10, 35, 20, 45]

// const containsNum = arr.every((item) => typeof item === 'number')

// console.log(containsNum)

// if(!containsNum) {
//     console.log('va rog sa introduceti doar liste de cifre') 
// }

// console.log(arr)

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// ex1upd
// const numberArr = [5, 30, 15, 40, 50, 25, 10, 35, 20, 45]
// const sortArr = (arr, sortDirection) => {
//     const arrIsValid = arr.every((item) => typeof item === 'number' && item === item);

//     if(!arrIsValid) return 'va rog sa introduceti doar liste de cifre'

//     if(sortDirection === 'ASC') {
//         return arr.sort((a, b) => a-b > 0 ? 1 : -1)
//     } else {
//         return arr.sort((a, b) => b - a > 0 ? 1 : -1)
//     }
// }

// console.log(sortArr(numberArr, 'ASC'))
// console.log(sortArr(numberArr, 'DSC'))

// ex2

// const arr = [1, 2, 3, 4, 'ceva scris', 5, 6, 7, 8]

// const indexOfItem = arr.indexOf('ce scris')

// console.log(indexOfItem)

// if(indexOfItem === -1) {
//     console.log('not found') 
// } 

// ex2upd
// const arr = [5, 30, 15, 40, 50, 25, 10, 35, 20, 45]

// const findIndex = (arr, element) => {
//     const result = arr.findIndex(item => item === element)

//     return result !== -1 ? result : 'not found'
// }

// console.log(findIndex(arr, 4))
// console.log(findIndex(arr, 10))


// ex3

// const arr = [2, 4, 6, 9, 36, 121]

// const arrSqrt = arr.filter(num => Number.isInteger(Math.sqrt(num)))

// console.log(arrSqrt)


// ex3upd
// const arr = [5, 30, 15, 40, 50, 25, 10, 35, 20, 45]

// const returnSqrtInt = (arr) => {
//     return arr.filter((item) => Number.isInteger(Math.sqrt(item)))
// }

// console.log(returnSqrtInt(arr))

// ex4

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const containsNum = arr.every((item) => typeof item === 'number')
// const evenNum = arr.filter(item => item % 2 === 0)
// const oddNum = arr.filter(item => item % 2 !== 0)

// console.log(containsNum)
// console.log(evenNum)
// console.log(oddNum)


// ex4upd
// const arr = [5, 30, 15, 40, 50, 25, 10, 35, 20, 45]

// const returnNumbersTypeList = (arr) => {
//     const evenArr = arr.filter(item => item%2 === 0)
//     const oddArr = arr.filter(item => item%2 !== 0)

//     return {evenArr, oddArr};
// }


// console.log(returnNumbersTypeList(arr))