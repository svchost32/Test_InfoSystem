var express = require('express')
var path = require('path')
var router = require('./router') //路径标识
const bodyParser = require('body-parser') //处理post
var session = require('express-session') //请求session

const serverport = 5000 //端口地址




// var  MongoStore  = require("connect-mongo")(session);
// 数据库模块




var app = express()

//可访问资源库
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))

// app.use('/static', express.static(__dirname + './node_modules/'));

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views')) //默认目录

app.use(bodyParser.urlencoded({
    extended: false
})) //处理post
app.use(bodyParser.json())


//数据库模块
app.use(session({
    secret: 'keyboard cat', //配置加密字符串，拼起来
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))

//    app.all('*', function(req, res, next) {
//          res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
//          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//          res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//          res.header("Access-Control-Allow-Credentials","true"); //带cookies7     
//          res.header("Content-Type", "application/json;charset=utf-8");
//          next();
//      });

app.use(router)


app.use(function (req, res) { //顺序处理意外请求
    res.render('404.html')
})




app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})



app.listen(serverport, function () {
    console.log('已运行');
    console.log('测试地址为：\n127.0.0.1:' + serverport);
})