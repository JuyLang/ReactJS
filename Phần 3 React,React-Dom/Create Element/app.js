// bản chất là render ra mà hình

const root = document.querySelector('.root')

let h1 = document.createElement('h1')
h1.innerText = 'Hello guys!'
root.appendChild(h1)

// thêm id và class
h1.id = 'h1isd'
h1.className = 'Classh1'
h1.style.color = 'red'

Object.assign(h1.style, {
    color: 'blue',
    backgroundColor: '#333'
})