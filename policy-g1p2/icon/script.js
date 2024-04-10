
const highlight = (className,  id, color = '#3366AA') => {
    // manage selecting
    const icon = document.querySelector(`#${id}`)

    const icons = document.querySelectorAll('.icon')
    icons.forEach((e) => {
        e.classList.remove('selected')
    })

    icon.classList.add('selected')

    // manage scroll
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