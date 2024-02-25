
const aa = (className,  color) => {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((item) => {
        item.style.color = 'black'
    })
    const selectedBoxes = document.querySelectorAll(`.${className}`)
    selectedBoxes.forEach((item) => {
        item.style.color = color
    })
    selectedBoxes[0].scrollIntoView()
}