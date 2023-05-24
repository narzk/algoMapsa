// 1. selection sort
// 2. Recursion example

// 4.Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number
// of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted,
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the
// unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicate(arr, uniqueMap = {}) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    const node = arr[i]
    if (Array.isArray(node)) {
      let res = removeDuplicate(node, uniqueMap)
      if (res.length) {
        result.push(res)
      }
    } else if (!(node in uniqueMap)) {
      result.push(node)
      uniqueMap[node] = true
    }
  }
  return result
  //unique array
}

console.log(removeDuplicate([1, [2, [2, 3]], 4, [5, [6, 5, [3, 1]]]]))

//hA:mA hB:mB (start time of two parts)
//EhA:EmA EhB:EmB (End time of tw parts)

function hasOverlaps(hA, mA, hB, mB, EhA, EmA, EhB, EmB) {
  let timeStartInMinB = hB * 60 + mB
  let timeEndInMinA = EhA * 60 + EhA
  if (timeStartInMinB < timeEndInMinA) {
    return true
  }
  return false
}

console.log(hasOverlaps(9, 0, 9, 0, 11, 0, 10, 0))
