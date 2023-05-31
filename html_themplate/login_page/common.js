let authorizeBtn = document.querySelector("#authorize")
let divForm = document.querySelector("#divForm")
let phoneNum = document.querySelector('#phoneNumber')

function showMessages(style_class, text){
    return `
        <div class=${style_class}>
            ${text}
        </div>
        `
}

phoneNum.addEventListener('input', ()=>{
    re = phoneNum.value
    let alert_message = document.querySelector('.invalid-feedback')
    if(alert_message!=null){
        alert_message.parentNode.removeChild(alert_message)
    }
    if(re == ''){
        authorizeBtn.classList.add('disabled')
        phoneNum.classList.remove('is-invalid')
        phoneNum.classList.remove('is-valid')
        authorizeBtn.classList.remove('btn-danger')
        authorizeBtn.classList.add('btn-primary')
    }
    else{
        if(re.search(/^[\+\d\s]+$/) == -1){
            phoneNum.insertAdjacentHTML('afterend', showMessages('invalid-feedback', 'Вы вводите недопустимое значение'))
            phoneNum.classList.add('is-invalid')
            authorizeBtn.classList.remove('btn-primary')
            authorizeBtn.classList.add('btn-danger')
            //authorizeBtn.classList.add('disabled')
            //authorizeBtn.setAttribute('disabled', 'disabled')
        } 
        else{
            //authorizeBtn.classList.remove('btn-primary')
            phoneNum.classList.remove('is-invalid')
            phoneNum.classList.add('is-valid')
            authorizeBtn.classList.add('btn-primary')
            authorizeBtn.classList.remove('btn-danger')
            authorizeBtn.classList.remove('disabled')
        }
    }
    
})

authorizeBtn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    // let xhr = new XMLHttpRequest()
    // let url = '/login' //tut budet url adress v kotorii mi doljni budem otpravlyat vvedennii nomer telefona skoree vsego eto budet kak to vzoimodeistvovat s node ili nakaplivatsya v massiv v kitorom budet nomer telefona i password i potom otpravka i sverka s bd
    
    // let body = {
    //     phone: phoneNum.value
    // }
    // xhr.open('POST', url, true)
    // body = JSON.stringify(body)
    // xhr.send(body)
    //window.location.href = '/pas' //esli vse horosho to nujno perehodit na druguu ssil
    
    // xhr.onerror = () => {
    //     phoneNum.classList.add('is-invalid')
    //     phoneNum.insertAdjacentHTML('afterend', showMessages('invalid-feedback', 'Запрос не удался'))
    // }
})
//window.location.replace("http://stackoverflow.com")

