function drawRectangle(options: { width: number, length: number }) {
    const width = options.width
    const length = options.length
    return width * length
}

const res = drawRectangle({
    width: 5,
    length: 6
})

console.log(res);