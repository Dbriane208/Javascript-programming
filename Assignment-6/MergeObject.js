function mergeObjects(...objs) {
    return Object.assign({},...objs)
}

const obj1 = {a: 1,b: 2};
const obj2 = {b:3, c: 4};

console.log(mergeObjects(obj1,obj2));