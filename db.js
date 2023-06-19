const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ilfat1991',
  database: 'rili_meta'  
})

//db.query("insert into teachers(name, phone, pass, role, checkpoints) values(?,?,?,?,?)", ['Zagir', '89196049090','567', '', 100], (err)=>console.log(err))
// db.query("select*from teachers", (err, res, fields)=>{
//   let item = res.find(user=>user.phone=='+79603927490')
//   console.log(item.name)
// })
db.end()