// 1. Given an array, find the largest element.
const arr1 = [4, 10, 2, 8, 12, 15, 2, 19, 45, 3, 55];
function findMax(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) {
      max = element;
    }
  }
  console.log(max);
}
// findMax(arr1);

// 2. Given an array, find the smallest element.
const arr2 = [4, 10, 2, 8, 12, 15, 2, 19, 45, 3, 55];
function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        const el = arr[i]
        if(el < min){
            min = el
        }
    }
    console.log(min)
}

// findMin(arr2)

// 3. Add all elements of the array.
const arr3 = [1,2,3];
function sumArr(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum+= arr[i]
    }
    console.log(sum)
}

// sumArr(arr3)

// 4. Return average value of elements.
const arr4 = [4, 10, 2, 8, 12, 15, 2, 19, 45, 3, 55];
function averageOfArr(arr){
    const arrayLength = arr.length
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        const el = arr[i]
        sum+= el
    }

    let average = (sum/arrayLength).toFixed(2)
    console.log(average)
}

// averageOfArr(arr4)

// 5. Return the array in reversed order.
const arr5 = [4, 10, 2, 8, 12, 15, 2, 19, 45, 3, 55];
function reverseArray(arr){
    let tempArr = []
    for(let i = arr.length - 1; i > 0; i--){
        const el = arr[i]
        tempArr.push(el)
    }
    console.log(tempArr)
}
// reverseArray(arr5)

// 6. Check if Array is Sorted
const arr6 = [1,2,3,4,5]
function checkSorted(arr){
    for(let i = 0; i < arr.length; i++){
        const el = arr[i]
        if(arr[i] > arr[i + 1]){
            console.log(false)
        }
    }
    console.log(true)
}
// checkSorted(arr5)

// 7. Return the second largest element.
const arr7 = [4, 10, 2, 8, 12];
function secondLargestNumber(arr){
    let largestNum = arr[0];
    let secondLargestNum = 0;
    for(let i = 0; i < arr.length; i++){
        const el = arr[i]
        if(el > largestNum){
            secondLargestNum = largestNum
            largestNum = el
        }
    }
    console.log(largestNum, secondLargestNum)
}
// secondLargestNumber(arr7)

// 8. Remove Duplicates from Array
const arr8 = [1,1,1,2,3,2]
function removeDuplicate(arr){
    let tempArr = []
    for(let i = 0; i < arr.length; i++){
        if(!tempArr.includes(arr[i])){
            tempArr.push(arr[i])
        }
    }
    console.log(tempArr)
}
// removeDuplicate(arr8)

// 9. Count the Occurrences of Each Element
const arr9 = [1,1,1,2,3,2]
function countOccurance(arr){
    let tempObj = {}
    for(let i = 0; i < arr.length; i++){
        const el = arr[i]
        if(tempObj[el]){
            tempObj[el]++
        }else{
            tempObj[el] = 1
        }
    }
    console.log(tempObj)
}
// countOccurance(arr9)

// 10. Left Rotate an Array by 1
// EXAMPLE :- [1, 2, 3, 4] → [2, 3, 4, 1]
const arr10 = [1, 2, 3, 4]
function rotateArr(arr){
    let firstEl = arr[0]
    let tempArr = []
    for(let i = 0; i < arr.length - 1; i++){
        // console.log(arr[i])
        tempArr.push(arr[i])
    }
    tempArr.push(firstEl)
    console.log(tempArr)
}
// rotateArr(arr10)

// 11. Find the Index of an Element
const arr11 = [4, 10, 2, 8, 12, 15, 2, 19, 45, 3, 55];
function findIndex(arr, num){
    let idx = 0;
    for(let i = 0; i < arr.length; i++){
        idx++
        if(arr[i] == num){
            break
        }
        if(idx == arr.length){
            idx = -1
        }
    }
    console.log(idx)
}
// findIndex(arr11, 19)


// 12. Insert Element at a Specific Index
const arr12 = [1, 2, 3, 4, 5]
function insertNum(arr, idx, num){
    let temparr = []
    for(let i = 0; i < arr.length; i++){
        temparr.push(arr[i])
        if(i == idx){
            temparr.push(num)
        }
    }
    console.log(temparr)
}
// insertNum(arr12, 4, 10)

// 13. Remove All Occurrences of an Element
const arr13 = [1, 2, 2, 3]
function filterNum(arr, num){
    let tempArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            
        }else {
            tempArr.push(arr[i])
        }
    }
    console.log(tempArr)
}
// filterNum(arr13, 2)

// 14. Check if Two Arrays are Equal
const arr14_1 = [1,2,3]
const arr14_2 = [1,2,3]
function checkEqual(arr1, arr2){
    let state = false
    if(arr1.length !== arr2.length){
        return state = false
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == arr2[i]){
            state = true
        }else {
            state = false
        }
    }
    return state
}
// const d = checkEqual(arr14_1, arr14_2)
// console.log(d)

// 15. Find All Even Numbers
const arr15 = [1, 2, 3, 4]
function findEven(arr){
    let tempArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            tempArr.push(arr[i])
        }
    }
    console.log(tempArr)
}
// findEven(arr15)

// 16. Find the Frequency of a Target Element
const arr16 = [1, 2, 2, 3, 2,2,3,3,5,4,5,6,5,42,1,1,]
function findNumCount(arr, ele){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ele){
            count++
        }
    }
    console.log(count)
}
// findNumCount(arr16, 1)

// 17. Move Zeros to End [0, 1, 0, 3, 0] → [1, 3, 0, 0, 0]
const arr17 = [0, 1, 0, 3, 0]
function moveZero(arr){
    let tempArr = []
    let zerArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            tempArr.push(arr[i])
        }else {
            zerArr.push(arr[i])
        }
    }
    let d = tempArr.concat(zerArr)
    console.log(d)
}
// moveZero(arr17)

// 18. Find the Missing Number (0 to n) [0, 1, 3] → 2
const arr18 = [1, 2, 5, 4, 6, 8, 7];
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        sumOfArray = sumOfArray + arr[i];
    }

    let missingNumber = sumOfFirstN - sumOfArray;

    console.log(missingNumber)
}
// findMissingNumber(arr18);

// 19. Print all possible contiguous subarrays of array.
const arr19 = [1, 2];
function printSubArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            console.log(arr.slice(i, j + 1));
        }
    }
}
// printSubArray(arr19);

// 20. Check if Array is a Palindrome
const arr20 = [1, 2, 3, 2, 1]
function checkPalindrome(arr){
    let state = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[arr.length - 1 - i]){
            state = true
        }else {
            state = false
        }
    }
    console.log(state)
}
checkPalindrome(arr20)