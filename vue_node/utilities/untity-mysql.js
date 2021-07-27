var mysql = require('mysql');
var datajson = require('../config/database.json');



// 创建连接
var connectionPool = mysql.createPool({
    host: datajson.host, //本机
    user: datajson.user, //账号root
    password: datajson.password, //密码12345
    database: datajson.database //数据库名
});



let query = function (sql, values) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        connectionPool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        // resolve(rows)
                        //json格式化
                        // console.log(JSON.parse(JSON.stringify(rows)));
                        resolve(JSON.parse(JSON.stringify(rows)));              
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}