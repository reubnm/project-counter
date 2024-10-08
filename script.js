
const element = document.getElementById("button")
let label = document.getElementById('text')
let count = 0; element.addEventListener('click', function()
{
    count++
    if (count == 1) {
        label.textContent = `clicked ${count} time`
    }   
    else {
        label.textContent = `clicked ${count} times`
    }
})



