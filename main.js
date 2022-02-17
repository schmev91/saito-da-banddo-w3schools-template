const slider = document.querySelector('.slider'),
slides = [
    document.querySelector('.slider>div:nth-child(1)'),
    document.querySelector('.slider>div:nth-child(2)'),
    document.querySelector('.slider>div:nth-child(3)')
]

const buyTicketsButtons = document.querySelectorAll('#tour button'),
modalContainer = document.querySelector('.modal-container'),
cancelButton = document.querySelector('.fas.fa-times.pad-X16-Y8')

console.log(slides)
console.log(buyTicketsButtons)


function start(){


    setTimeout(()=>{
        let counter = 2
        slider.classList.add('second-slide')
        setInterval(()=>{
            counter++
            if(counter > 3){
                counter = 1
            }
            if(counter == 1){
                slides[0].classList.add('third')
                slider.classList.replace('third-slide', 'second-slide-view')
                setTimeout(()=>{
                slider.classList.replace('second-slide-view', 'third-slide')

                },100)
                setTimeout(()=>{
                    slides[0].classList.remove('third')
                    slider.classList.replace('third-slide', 'first-slide-view')
                }, 2000)


            }
            if(counter == 2){
                slider.classList.replace('first-slide-view', 'second-slide')

            }
            if(counter == 3){
                slider.classList.replace('second-slide', 'third-slide')
            }
        }, 5000)
    }, 5000)
    
    // js for modal animation ↓

    buyTicketsButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
        modalContainer.classList.remove('display-none')
        })
    })
    cancelButton.addEventListener('click', ()=>{
        modalContainer.classList.add('hop-out')
        setTimeout(()=>{
            modalContainer.classList.replace('hop-out', 'display-none')
        }, 600)
    })

}

start()
/*
    The ideal is if it slides to the third slide:

=> change the order of the first slide to 3,
now the first slide would be the third slide and the
third slide just now would be the second slide.

=> instant change the perspective to the second slide
which was the third slide and continue the sliding like
normal

=> return the initial sliding order and switch the
perspective to the first slide

=> loop

*/

/* ⇓⇓---------------------------⇓⇓
   ⇓⇓ SCRIPT FOR MOBILE NAV BAR ⇓⇓
   ⇓⇓---------------------------⇓⇓*/

document.querySelector('.sub-bar').addEventListener('click', ()=>{
    
    document.querySelector('#header .nav.flex').classList.toggle('sub-bar-active')

})

const nav = document.querySelector('#header .nav.flex'),
childItems1 = document.querySelectorAll('#header .nav.flex>a:not(a:first-child)'),
childItems2 = document.querySelectorAll('.nav-more-content>a')

function hideWhenClick (node) {
    node.addEventListener('click', ()=>{
        nav.classList.toggle('sub-bar-active')
    })
}
function removeHideWhenClick(node) {
    node.removeEventListener('click', hideWhenClick)
}

//if it is mobile from the start
if(window.innerWidth < 740){
    childItems1.forEach(hideWhenClick)
    childItems2.forEach(hideWhenClick)
}
//hideWhenClick for HOME button
nav.querySelector('a:first-child').addEventListener('click', ()=>{
    
    if(nav.classList.contains('sub-bar-active')){
        nav.classList.remove('sub-bar-active')
    }

})

// listener to window resize event
window.addEventListener('resize', ()=>{

    // hide sub items when click
    if(window.innerWidth < 740){
        childItems1.forEach(hideWhenClick)
        childItems2.forEach(hideWhenClick)
    }
    // remove event listener to avoid bugs
    if(window.innerWidth > 739){
        childItems1.forEach(removeHideWhenClick)
        childItems2.forEach(removeHideWhenClick)

    }
    //in case the user rezise the window when sub bar active
    if(nav.classList.contains('sub-bar-active')){
        nav.classList.remove('sub-bar-active')
    }
    
})