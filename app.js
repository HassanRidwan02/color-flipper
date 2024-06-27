let flipBtn = document.getElementById('flip-btn')
let body = document.querySelector('body')
let color = document.getElementById('color')
let colors = ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500']

flipBtn.addEventListener('click', ()=>{
    flip()
})

function flip(){
    let random = Math.floor( Math.random() * colors.length )
    body.style.backgroundColor = `${colors[random]}`
    color.textContent = `${colors[random]}`
}
