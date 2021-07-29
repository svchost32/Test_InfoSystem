const { json } = require('body-parser');
const mysql = require('./untity-mysql')


async function IDcheck(id) {  
    let content  = await mysql.query(`select * from t_user where YHID = '${id}' limit 1;`)
    // return content.length
    // console.log(content.length == 1?true:false);
    return(content.length == 1?true:false)
}
async function PWCheck(id,pw) {  
    let content  = await mysql.query(`select YHKL from t_user where YHID = '${id}' limit 1;`)
    //用户名密码是否匹配
    return content[0].YHKL === pw;

}



module.exports = {
    IDcheck,
    PWCheck,
}