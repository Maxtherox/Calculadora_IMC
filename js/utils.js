
export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calcIMC(weight, height) {
    return (weight / ((height /100) **2)).toFixed(2)
    
}
