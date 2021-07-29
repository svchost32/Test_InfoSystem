(function (Vue) {
    var template = ` <transition name="modal" tag="div">
    <div class="modal" v-show="visible" transition="fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <!--头部-->
                <div class="modal-header">
                    <slot name="header">
                        <p class="title">{{modal.title}}</p>
                    </slot>
                    <a @click="close(0)" class="xd xd-close" href="javascript:void(0)"></a>
                </div>
                <!--内容区域-->
                <div class="modal-body">
                    <slot name="body">
                    </slot>
                </div>
                <!--尾部,操作按钮-->
                <div class="modal-footer">
                    <slot name="footer">
                        <slot name="button">
                            <a v-if="modal.showCancelButton" href="javascript:void(0)" class="button"     :class="modal.cancelButtonClass" @click="close(1)">{{modal.cancelButtonText}}</a>
                            <a v-if="modal.showConfirmButton" href="javascript:void(0)" class="button" :class="modal.confirmButtonClass" @click="submit">{{modal.confirmButtonText}}</a>
                        </slot>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    <!-- <div v-show="show" class="modal-backup"></div> -->
</transition>`


    var element = document.createElement('div');
    element.id = 'V-confirm'
    element.innerHTML = template
    document.body.appendChild(element)


    var $confirm = new Vue({
        el: '#V-confirm',
        data: {
            show: false,
            onCancel: false,
            onOk: false,
            title: '',
            content: ''
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            options: {
                type: Object,
                default: {}
            }
        },
        // 采用v-bind将visible传入

        methods: {
            ConfirmHandler() {
                this.$emit('update:visible', false); // 更新visible的值（可选，如果想点击确认之后，进行一些处理再决定关不关闭，可取消在这里更新visible）
                this.$emit('Confirm'); // 传递确认事件
            },
            CancelHandler() {
                this.$emit('update:visible', false); // 更新visible的值
                this.$emit('Cancel'); // 传递取消事件
            }
        },
        computed: {
            /**
             * 格式化props进来的参数,对参数赋予默认值
             */
            modal() {
                let modal = this.options;
                if (modal) {
                    modal = {
                        title: modal.title || '提示',
                        showCancelButton: typeof modal.showCancelButton == 'undefined' ? true : modal.showCancelButton,
                        cancelButtonClass: modal.cancelButtonClass ? modal.showCancelButton : 'btn-default',
                        cancelButtonText: modal.cancelButtonText ? modal.cancelButtonText : '取消',
                        showConfirmButton: typeof modal.showConfirmButton == 'undefined' ? true : modal.cancelButtonClass,
                        confirmButtonClass: modal.confirmButtonClass ? modal.confirmButtonClass : 'btn-active',
                        confirmButtonText: modal.confirmButtonText ? modal.confirmButtonText : '确定',
                    };
                } else { // 使用时没有传递参数
                    modal = {
                        title: '提示',
                        showCancelButton: true,
                        cancelButtonClass: 'btn-default',
                        cancelButtonText: '取消',
                        showConfirmButton: true,
                        confirmButtonClass: 'btn-active',
                        confirmButtonText: '确定',
                    };
                }
                return modal;
            },

        }
    })

    window.$confirm = $confirm

})(Vue)