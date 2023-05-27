let tableBody = document.querySelector("#students-list .students-tbody")
let stdTableRow = document.querySelector("#students-list .students-tbody tr")

let dinamicStdTableRow = function(a){
    return `
            <tr>
            <th scope="row">${a}</th>
            <td>Иванов Иван Иванович</td>
            <td>+7963254789${Math.round(Math.random()*10)}</td>
            <td>mail@mail.ru</td>
            <td>
                <button type="button" class="btn btn-outline-primary">Редактировать</button>
                <button type="button" class="btn btn-outline-danger">Удалить</button>
            </td>
            </tr>
        `
}


for(let i = 1; i<=20; i++){
    tableBody.insertAdjacentHTML('beforeend', dinamicStdTableRow(i))
}
