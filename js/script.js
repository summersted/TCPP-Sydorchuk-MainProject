'use strict';
function changeColor(item){;
    if (item.classList.contains('red')) {
        item.classList.remove('red');
        item.classList.add('blue');
    } else {
        if (item.classList.contains('blue')) {
            item.classList.remove('blue');
        } else {
            item.classList.add('red');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button'),
        wrapper = document.querySelector('#container');


    // buttons.forEach(button => {
    //     button.addEventListener('click', ()=>{
    //         changeColor(button);
    //     });
    // });

    wrapper.addEventListener('click', event =>{
        // console.dir(event.target);

        if(event.target && event.target.tagName == 'BUTTON'){
            changeColor(event.target);
        }
    });
    const button = document.createElement('button');
    button.classList.add('red');
    wrapper.append(button);
});