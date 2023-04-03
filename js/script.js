import { Modal } from "./modal.js"

// Variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Modal 
/*
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .tittle span')
const modalBtnClose = document.querySelector('.modal button.close') */




form.onsubmit = function(event) {
    event.preventDefault()

    const weigth = inputWeight.value
    const heigth = inputHeight.value

    const result = calcIMC(weigth, heigth)
    const message = `Seu IMC é de: ${result}`
    
    Modal.message.innerText = message
    //modalWrapper.classList.add('open')
    Modal.open()
}

function calcIMC(weight, height) {
    return (weight / ((height /100) **2)).toFixed(2)
    
}
