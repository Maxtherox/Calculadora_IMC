export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .tittle span'),
    buttonClose: document.querySelector('.modal button.close'),

    open: function(){
        Modal.wrapper.classList.add('open')
    },
    close(){ //Função moderna com ES6 (Mesma coisa que a decima mudando que não é necessário declarar "function")
        Modal.wrapper.classList.remove('open')
    }
}



Modal.buttonClose.onclick = () => Modal.close() //modalWrapper.classList.remove('open')

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    console.log(event.key)

        if (event.key === 'Escape') {
            Modal.close()
        }
}