const myFunc = (a: string, b: string, c?: string) => {
    console.log(`Hello ${a} ${b} ${c}`);
}
const res = myFunc("apple", "orange", "banana")
console.log(res);