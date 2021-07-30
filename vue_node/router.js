var express = require('express')
const mysql = require('./utilities/untity-mysql')
const check = require('./utilities/credential.js')
const trans = require('./utilities/translate.js')

var router = express.Router()


//输入页面
router.get('/', function (req, res) {
    if (req.session.isLogin) {
        //确认登录
        res.redirect('/manage')
    } else {
        res.render('login.html', {
            name: 'Master'
        })
    }
})

//登陆方法
router.post('/login', async function (req, res) {

    if (await check.IDcheck(req.body.userID) &&
        await check.PWCheck(req.body.userID, req.body.password)
    ) {
        req.session.isLogin = true;
        let name = await mysql.query(`select YHXM from t_user where YHID = '${req.body.userID}' limit 1;`)
        req.session.name = name[0].YHXM
        res.status(200).json({
            status_code: 1,
            route: '/manage',
            message: 'ok'
        });
    } else {
        req.session.isLogin = false;
        res.status(200).json({
            status_code: 0,
            message: 'bad'
        });
    }

})


router.post('/console', function (req, res) {

    // req.session.user = null
    console.log(req)
    console.log(req.body)
    res.end('success')

})

//管理页
router.get('/manage', function (req, res) {
    if (req.session.isLogin) {
        //确认登录
        res.render('manage.html', {
            name: req.session.name,
            //被render替换掉的vue模板，无奈之举     
            index: "{{index}}",
            depart: {
                BMMC: '{{depart.BMMC}}'
            },
            user: {
                PXH: '{{user.PXH}}',
                YHXM: '{{user.YHXM}}',
                YHID: '{{user.YHID}}',
                YHBM: '{{user.YHBM}}',
                YHXB: '{{user.YHXB}}'
            }

        })
    } else {
        res.redirect('/')
    }


})

// router.get('/test2', async function (req, res) {
//     const list = await mysql.query('SELECT * FROM `ts_bzdm`')
//     var person = list.filter((p) => {
//         return p.MC = '男';
//     })
//     console.log(person);
// })

router.get('/test2', async function (req, res) {
    let list = await mysql.query('SELECT * FROM t_user')
    // console.log(list[2]);

    trans.listTrans(list)
    res.end('success')
})


//所有用户列表
router.post('/getAllUserListQuery', async function (req, res) {
    res.status(200).json({
        status_code: 0,
        message: 'ok',
        list: await trans.listTrans(
            await mysql.query('SELECT * FROM `t_user`')
        )
    });
})
//特征查询
router.post('/getUserQuery', async function (req, res) {
    res.status(200).json({
        status_code: 0,
        message: 'ok',
        list: await trans.listTrans(
            await mysql.query(`SELECT * FROM \`t_user\` where YHID='${req.body.id}'`))
    });
})
//部门列表
router.post('/getDepartListQuery', async function (req, res) {
    res.status(200).json({
        status_code: 0,
        message: 'ok',
        list: await mysql.query('SELECT * FROM `t_depart`')
    });
})
//部门所有人员查询
router.post('/getDepartUserListQuery', async function (req, res) {
    let content = JSON.parse(JSON.stringify(req.body[0]));
    res.status(200).json({
        status_code: 0,
        message: 'ok',
        list: await trans.listTrans(
            await mysql.query(`SELECT * FROM \`t_user\` where YHBM='${content.BMDM}'`))
    });
})
//性别列表
router.post('/getGenderListQuery', async function (req, res) {
    res.status(200).json({
        status_code: 0,
        message: 'ok',
        list: await mysql.query('SELECT * FROM `ts_bzdm`')
    });
})


router.post('/test', async function (req, res) {
    // res.render('register.html', {
    //     name: 'Master'
    // })

})

//修改页
router.get('/edit', function (req, res) {
    //触发了
    let code = req.session.code
    let YHID = (req.session.code != 1 && req.session.chooseID != undefined) ?
        req.session.chooseID : ''
    // console.log(YHID);
    if (req.session.isLogin) {
        if (code == 1 || code == 2 || code == 3) {
            res.render('edit.html', {
                // name: req.session.name,
                //func_code渲染功能
                FUNC_CODE: code,
                index: "{{index}}",
                depart: {
                    BMMC: '{{depart.BMMC}}'
                },
                gender: {
                    MC: '{{gender.MC}}'
                },
                YHID: YHID,
            })
        } else {
            //回登录页
            res.redirect('/')
        }
    } else {
        res.redirect('/logout')
    }
})

//新增操作请求
router.post('/add', async function (req, res) {
    // 
    if (req.session.isLogin) {
        req.session.code = 1
        res.status(200).json({
            status_code: 1,
            route: '/edit',
        });
    }
})

//改
router.post('/edit', async function (req, res) {
    // 
    if (req.session.isLogin) {
        req.session.code = 2
        req.session.chooseID = Object.keys(req.body)[0]
        res.status(200).json({
            status_code: 1,
            route: '/edit',
        });
    }
})

//查看
router.post('/audit', async function (req, res) {
    // 
    // console.log(Object.keys(req.body)[0]);
    if (req.session.isLogin) {
        req.session.code = 3
        req.session.chooseID = Object.keys(req.body)[0]
        res.status(200).json({
            status_code: 1,
            route: '/edit',
        });
    }
})

//返回
router.post('/back', async function (req, res) {
    // 
    // console.log(Object.keys(req.body)[0]);
    delete req.session.code
    delete req.session.chooseID
    if (req.session.isLogin) {
        res.status(200).json({
            status_code: 1,
            route: '/manage',
        });
    }
})



//登出请求
router.post('/logout', async function (req, res) {
    delete req.session.user
    delete req.session.code
    delete req.session.chooseID
    delete req.session.isLogin
    res.status(200).json({
        status_code: 1,
        route: '/'
    });
})


//用户数据插入
router.post('/insertUser', async function (req, res) {
    // console.log('insert');
    if (req.session.isLogin) {
        // console.log(req.body);
        let content = req.body
        let YHXB = await mysql.query(`SELECT CODE from ts_bzdm where MC='${content.YHXB}'`)
        let YHBM = await mysql.query(`SELECT BMDM from t_depart where BMMC='${content.YHBM}'`)
        content.YHXB = YHXB[0].CODE
        content.YHBM = YHBM[0].BMDM
        // console.log(content);
        res.status(200).json({
            status_code: 1,
            message: 'ok',
            list: await mysql.query(`INSERT INTO t_user (YHDM,DWDM,YHID,YHXM,YHKL,YHXB,YHBM,CSRQ,DJSJ,SFJY,PXH) VALUES('${content.YHDM}','${content.DWDM}','${content.YHID}','${content.YHXM}','${content.YHKL}','${content.YHXB}','${content.YHBM}','${content.CSRQ}','2020-10-01 05:05:02','${content.SFJY}',${content.PXH} );`),
            route: '/manage',
        });
    }
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
            message: 'ok',
            list: await mysql.query('SELECT * FROM `ts_bzdm`')
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