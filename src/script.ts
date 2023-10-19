type str = string
type num = number
type strOrNum = string | number
type user = { nephew: string, age: number }


const myFunc = (title: str, id: num, house: strOrNum) => {
    return `His name is ${title}, id number is ${id}, house number is ${house}.`
}

const res = myFunc('komla', 32, 374)
console.log(res);