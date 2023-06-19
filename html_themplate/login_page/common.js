let authorizeBtn = document.querySelector("#authorize")
let divForm = document.querySelector("#divForm")
let phoneNum = document.querySelector('#phoneNumber')
let pass = document.querySelector('#pas')
//let authorize_form = document.querySelector('#authorize_form')


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
    let xhr = new XMLHttpRequest()
    let url = '/' //tut budet url adress v kotorii mi doljni budem otpravlyat vvedennii nomer telefona skoree vsego eto budet kak to vzoimodeistvovat s node ili nakaplivatsya v massiv v kitorom budet nomer telefona i password i potom otpravka i sverka s bd
    
    // let form_data = new FormData(authorize_form)
    // console.log(form_data)
    form_data = {
        phone: phoneNum.value,
        pass: pass.value
    }
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    form_data = JSON.stringify(form_data)
    xhr.send(form_data)
    //console.log(form_data)
    //window.location.href = '/pas' //esli vse horosho to nujno perehodit na druguu ssil
    xhr.addEventListener('readystatechange', (e)=>{
        if(xhr.readyState==4){
            if(xhr.response=='succes'){
                authorizeBtn.classList.add('disabled')
                phoneNum.classList.remove('is-valid')
                phoneNum.value = ''
                pass.value = ''
            }
        }
    })
    
    xhr.onerror = () => {
        phoneNum.classList.add('is-invalid')
        phoneNum.insertAdjacentHTML('afterend', showMessages('invalid-feedback', 'Запрос не удался'))
    }
})



//window.location.replace("http://stackoverflow.com")

