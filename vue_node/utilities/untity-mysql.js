var mysql  = require('mysql');

var datajson = require('../config/database.json');

console.log(datajson);

// 创建连接
var connection = mysql.createConnection({
  host     : datajson.host,	//本机
  user     : datajson.user,		//账号root
  password : datajson.password,	//密码12345
  database : datajson.database	//数据库名
});
 
// 连接数据库	
connection.connect();
 
//执行数据操作	
connection.query('SELECT * FROM `ts_bzdm` ', function (error, results, fields) {
  if (error) throw error;//抛出异常阻止代码往下执行
  // 没有异常打印输出结果
  console.log('The solution is: ',results);
});

//关闭连接
connection.end();