const stringArray = ['a', 'b', 'c', 'd', 'e'];
const numbersArray = [1, 2, 3, 4, 5]
const stringAndNumbersInArray = ['a', 1, 2, 3, 4, 'b', 'c']

const tsThings = <T, D>(arr: T[], message: D) => {
    const position = Math.floor(Math.random() * arr.length);
    console.log(message)
    return arr[position]
};

console.log(tsThings<string, string>(stringArray, 'oi'))
console.log(tsThings<number, string>(numbersArray, 'erou'))
console.log(tsThings<string | number, boolean>(stringAndNumbersInArray, false))
