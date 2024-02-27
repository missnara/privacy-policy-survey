const highlight = (className,  color) => {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((item) => {
        item.style.color = 'black'
        item.style.fontWeight = 'normal'; 
    })
    const selectedBoxes = document.querySelectorAll(`.${className}`)
    selectedBoxes.forEach((item) => {
        item.style.color = color
        item.style.fontWeight = 'bold'
    })
    selectedBoxes[0].scrollIntoView()
}


