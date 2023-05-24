// algorithm
// [5,4,3,8,9]

// function sortArray(arr) {
//   let temp

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         arr = swap(i, j, arr)
//       }
//     }
//   }
//   return arr
// }
// console.log(sortArray([2, 4, 3, 1, 6]))

// new Algo
// [1,4,6,0]

// 0 [1,4,6,0]
// 1 [1,4,6]
// 4 [4,6]
// 6 [6]

// function sortArray(arr) {
//   let result = []
//   while (arr.length > 1) {
//     let min = minFunction(arr)
//     arr.splice(min["minIndex"], 1)
//     result.push(min["minimumNumber"])
//     if (arr.length === 1) {
//       result.push(arr[0])
//     }
//   }
//   return result
// }

function swap(i, j, arr) {
  temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
  return arr
}
function minFunction(arr) {
  let min = arr[0]
  let minIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIndex = i
    }
  }
  return { minimumNumber: min, minIndex: minIndex }
}

function sortArray(arr) {
  // 1. for
  //  1.1. indexMin [j,...]
  //  1.2 swap(j, indexMin, arr)
}

console.log(sortArray([5, 3, 4]))
