;
(function (window) {
    import axios from 'axios'
    const app = new Vue({
        el: '#app',
        // router,
        data: {
            userID: '',
            password: '',
            info:'',
            // test2: function () {
            //     console.log(this.userID)
            // }
            onSubmit: function () {
                axios
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => (this.info = response))
            }
        },
        methods: {
            login: function () {
                // window.location = window.location.href + '/manage';
                // console.log(this.userID+" 412 "+this.password)
                // this.$router.replace('/menu')
                // this.$router.push('/testDemo');
                // this.$router.push("/");
                // this.$router.push({path:'home'})
                var formData = this.userID + '&' + this.password
                console.log(formData);

                axios({
                    url: '/console',
                    type: 'post',
                    data: formData,
                    dataType: 'json',

                    // withCredentials: true,
                    // success: function (data) {
                    //     var status_code = data.status_code
                    //     if (status_code === 0) {
                    //         window.alert('登录成功')
                    //         window.location.href = '/main'
                    //     } else if (status_code === 1) {
                    //         window.alert('邮箱或密码错误')
                    //     } else if (status_code === 2) {
                    //         window.alert('用户名已存在')
                    //     } else if (status_code === 500) {
                    //         window.alert('服务器忙，稍后重试')
                    //     }
                    // }
                    success: function () {
                        console.log('success');
                    }
                })
            },
            reset: function () {
                this.userID = '',
                    this.password = ''
            }
        }
    })
})(window)