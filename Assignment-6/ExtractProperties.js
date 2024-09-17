function extractProperties(objects, ...properties) {
    return objects.map(obj => properties.reduce((acc,prop) => {
        acc[prop] = obj[prop];
        return acc
    },{}))

}

const objects = [{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}];
console.log(extractProperties(objects,'a','c'));