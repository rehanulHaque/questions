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
rotateArr(arr10)