var express = require('express')
// var User = require('./model/user')
// var Comment = require('./model/comments')
// var md5 = require('blueimp-md5')
// const user = require('./model/user')
// const cmts = require('./model/comments')
// const consolep = require('./public/js/console')
// const { nextTick } = require('process')
const mysql = require('./utilities/untity-mysql')
const Vue = require('vue')
const fs = require('fs')
const {
    template
} = require('express-art-template')

const renderer = require('vue-server-renderer').createRenderer()

var router = express.Router()

router.get('/', function (req, res) {
    res.render('login.html', {
        name: 'Master'
    })
})


router.post('/console', function (req, res) {

    // req.session.user = null
    console.log(req)
    console.log(req.body)
    res.end('success')

})


router.get('/manage', function (req, res) {
    
    res.render('manage.html', {
        //被render替换掉的vue模板，无奈之举
        user: {
            name: 'abc',

        },
        index:"{{index}}",
        item:{
            name:'{{item.name}}',
            account: '{{item.account}}',
            department: '{{item.department}}',
            gender:'{{item.gender}}'
        }

    })
})

router.get('/test2', async function (req, res) {
    const list = await mysql.query('SELECT * FROM `ts_bzdm`')
    // for(value in list){
    //     console.log(value);
    // }
    var person = list.filter((p)=>{
        return p.MC = '男';
    })
    console.log(person);
})




router.post('/test', async function (req, res) {
    res.render('register.html', {
        name: 'Master'
    })
})





router.post('/register', async function (req, res) {
    //获取提交数据
    //  req.body
    //操作响应
    // 判断是否存在，不存在注册，存在拒绝
    //redirect
    //
    var body_content = req.body

    try {

        // body_content.password = md5(md5(body_content.password)) //密码加密
        // await new User(body_content).save(function (err,user) {  
        //     console.log(user)
        //     console.log('step1'+req.session.user);
        //     req.session.user = user
        //     console.log(req.session)
        //     console.log('step2'+req.session.user);
        // })

        // await new User(body_content).save()
        // req.session.user = body_content

        //注册成功记录状态

        console.log(body_content);
        res.status(200).json({
            status_code: 0,
            message: 'ok'
        })
        // renderer.renderToString(app, (err, html) => {
        //     // if (err) {
        //     //   res.status(500).end('Internal Server Error')
        //     //   return
        //     // }
        //     res.end(`
        //       <!DOCTYPE html>
        //       <html lang="en">
        //         <head><title>Hello</title></head>
        //         <body>${html}</body>
        //       </html>
        //     `)
        //   })

        // res.send('hello')
        // await res.redirect('/login');


    } catch (error) {
        // return res.status(500).json({
        //     status_code: 500,
        //     message: error.message
        // })
        // return nextTick(error)

    }

})



module.exports = router