// var React = document.querySelector('.React')
// var Angular = document.querySelector('.Angular')
// var Ember = document.querySelector('.Ember')
// var Design = document.querySelector('.Design')
// var content1 = document.querySelector('.contentTabul')
// var content2 = document.querySelector('.contentTabul2')
// var content3 = document.querySelector('.contentTabul3')
// var content4 = document.querySelector('.contentTabul4')
// console.log(Angular)
// Angular.addEventListener('click', function(e){
//     e.preventDefault()
//     content2.classList.remove('off')
//     content2.classList.add('on')
//     content1.classList.add('off')
//     content3.classList.add('off')
//     content4.classList.add('off')
// })
// Ember.addEventListener('click', function(e){
//     e.preventDefault()
//     content3.classList.remove('off')
//     content1.classList.add('off')
//     content2.classList.add('off')
//     content4.classList.add('off')
// })
// Design.addEventListener('click', function(e){
//     e.preventDefault()
//     content4.classList.remove('off')
//     content1.classList.add('off')
//     content3.classList.add('off')
//     content2.classList.add('off')
// })
// React.addEventListener('click', function(e){
//     e.preventDefault()
//     content1.classList.remove('off')
//     content2.classList.add('off')
//     content3.classList.add('off')
//     content4.classList.add('off')
// })

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs =  $$('.iconandHeader')
const panes = $$('.contentTabul')


tabs.forEach((tab, index)=>{
    const pane = panes[index]
    tab.onclick = function(){
        $('.contentTabul.on').classList.remove('on')
        $('.iconandHeader.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('on')
        const divline = this.querySelector('.divline')
        console.log(divline)
        // if(divlineall.classList.contains('line')){
        //     divlineall.classList.remove('line')
            
        // }
        // else{
        //     divline.classList.add('line')
        // }
        
    }
})
