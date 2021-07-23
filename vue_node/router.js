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



module.exports = router