import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"

import { calcIMC, notANumber } from "./utils.js"

// Variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Modal 
/*
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .tittle span')
const modalBtnClose = document.querySelector('.modal button.close') */

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


form.onsubmit = function(event) {
    event.preventDefault()

    const weigth = inputWeight.value
    const heigth = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weigth) || notANumber(heigth)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calcIMC(weigth, heigth)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de: ${result}`
    
    Modal.message.innerText = message
    //modalWrapper.classList.add('open')
    Modal.open()
}