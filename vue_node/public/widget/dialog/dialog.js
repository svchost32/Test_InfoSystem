use([], function() {
    Vue.component('dialogWidget', {
        pageName: "common",
        template: "/public/widget/dialog/dialog.html",
        props:["isHidden","msg","confirmName","cancelName","handle","dialogIcon","confirmHidden","notifyHidden"],
        data:function() {
            return {
                isHD:'dialog-hidden'
            }
        },
        created: function() {},
        mounted: function() {
            this.isHD = this.isHidden;
        },
        methods: {
            IKonw:function(){
                this.isHD = "dialog-hidden";
            },
            confirm:function(){
                this.IKonw();
                if(this.handle){
                    this.handle();
                }
            }
        }
    });
});

var dialog = {
    viewDialog: null,
    init: function(config) {
        var type = config.type || "notify";
        var msg = config.msg || "参数配置有误";
        var confirmName = config.confirmName || '';
        var cancelName = config.cancelName || '';
        var handle = config.handle || '';

        var isHidden='',dialogIcon,confirmHidden,notifyHidden;

        if(type == "confirm"){
            dialogIcon = "dialog-confirm-icon";
            confirmHidden = "";
            notifyHidden = "notify-hidden";
        }
        if(type == "notify"){
            dialogIcon = "dialog-notify-icon";
            confirmHidden = "confirm-hidden";
            notifyHidden = "";
        }
        if(type == "warning"){
            dialogIcon = "dialog-warning-icon";
            confirmHidden = "confirm-hidden";
            notifyHidden = "";
        }

        this.viewDialog = Vue.extend({
            template: '<dialogWidget :isHidden = "isHidden" :msg="msg" :confirmName="confirmName" :cancelName="cancelName" :handle="handle" :dialogIcon="dialogIcon" :confirmHidden="confirmHidden" :notifyHidden="notifyHidden"></dialogWidget>' ,
            data: function() {
                return {
                    isHidden : isHidden,
                    msg : msg,
                    confirmName : confirmName,
                    cancelName : cancelName,
                    handle : handle,
                    dialogIcon : dialogIcon,
                    confirmHidden : confirmHidden,
                    notifyHidden : notifyHidden
                }
            }
        });

        if($("#viewPrompter")){
            $("#viewPrompter").remove();
        }
        var component = new this.viewDialog().$mount();//挂载到内存节点上

        var viewerEle = $("<div id='viewPrompter'></div>");
        $("#content-box").append(viewerEle);
        viewerEle.append($(component.$el));
    }
};