var $ = require('jquery')
var formData = this.userID + '&' + this.password
console.log(formData);
var loginpost = $.ajax({
    url: '/manage',
    type: 'post',
    data: formData,
    dataType: 'json',

    // withCredentials: true,
    success: function (data) {
        var status_code = data.status_code
        if (status_code === 0) {
            window.alert('登录成功')
            window.location.href = '/main'
        } else if (status_code === 1) {
            window.alert('邮箱或密码错误')
        } else if (status_code === 2) {
            window.alert('用户名已存在')
        } else if (status_code === 500) {
            window.alert('服务器忙，稍后重试')
        }
    }
})
var path = require('path')
module.exports=loginpost