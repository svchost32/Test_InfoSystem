var express = require('express')
// var User = require('./model/user')
// var Comment = require('./model/comments')
// var md5 = require('blueimp-md5')
// const user = require('./model/user')
// const cmts = require('./model/comments')
// const consolep = require('./public/js/console')
// const { nextTick } = require('process')


var router = express.Router()

router.get('/', function (req, res) {
    res.render('login.html', {
        name: 'Master'
    }) 
})
router.get('/manage', function (req, res) {

    // req.session.user = null
    res.send(req)
    console.log("来请求了");
    res.end('success')
})


router.post('/console', function (req, res) {

    // req.session.user = null
     console.log(req.body)
    res.end('success')

})


router.get('/manage', function (req, res) {
    res.render('manage.html', {
        name: 'Master'
    })
})




module.exports = router