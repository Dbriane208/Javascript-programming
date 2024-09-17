arr = [1,2,3,4]

for(let i = 0; i < arr.length; i ++){
    console.log(arr[i])
}

arr.forEach(e =>  console.log(e))

var nestedArray = [1,[2,[3,4],5],6]
console.log(nestedArray.flat(2))

const num = arr.map(elem => elem*2 )
console.log(num)


const unOrderedArray = [6,8,9,3,7,5,1]
unOrderedArray.sort()
console.log(unOrderedArray)

