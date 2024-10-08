
const element = document.getElementById("button")
element.addEventListener('click', function() {
    alert("on click handler")
})

let label = document.getElementById('text')
let count = 0
label.textContent = `clicked ${count} times`
