let authorizeBtn = document.querySelector("#authorize")
let divForm = document.querySelector("#divForm")

function showMessages(style_class, text){
    return `
            
        `
}

authorizeBtn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    let xhr = new XMLHttpRequest()
    let url = '/login' //tut budet url adress v kotorii mi doljni budem otpravlyat vvedennii nomer telefona skoree vsego eto budet kak to vzoimodeistvovat s node ili nakaplivatsya v massiv v kitorom budet nomer telefona i password i potom otpravka i sverka s bd
    let phoneNum = document.querySelector('#phoneNumber').value
    let body = {
        phone: phoneNum
    }
    xhr.open('POST', url, true)
    body = JSON.stringify(body)
    xhr.send(body)
    
    xhr.onerror = () => {}
})
//window.location.replace("http://stackoverflow.com")

