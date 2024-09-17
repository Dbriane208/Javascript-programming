function combinedArrays(...arrays){
    let result = arrays.reduce((acc,val) => acc.concat(val));

    let set = new Set(result);

    let arr = [];
    for(let elem of set){
        arr.push(elem)
    }

    return arr
}

const arr1 = [1,2,3];
const arr2 = [3,4,5];
const arr3 = [6,7,8];

console.log(combinedArrays(arr1,arr2,arr3));