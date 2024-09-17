function filterAndSort(filterFn, ...numbers){
    return numbers.filter(filterFn).sort();
}

const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven,5,3,8,6,2));