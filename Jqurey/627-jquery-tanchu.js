/* 弹出层，
    我们可以用alert来做，但是这样性能不高，
    像一些登录注册，等等，都要用到弹出层，我们现在学习使用jquery制作出弹出层的效果。
    ①不用做页面跳转与刷新，
    ②统一消息提示框  代替alert
    */
/* 制作弹出层，
    ①在同一个html写弹出层（不需要跳转刷新，建立显示隐藏即可）
    ②遮罩层框、弹出框设计  z-index 取值，设计他们的层级关系
    ③css设计，
    ④jquery动态空时显示隐藏
    最后把这个弹出层封装起来，在多个地方使用
    */
$(document).ready(function () {
    $("#login").click(function () {
        $("#layer-mask").show();
        $("#layer-pop").show(); //显示函数方法show();;       
    });
    $("#pop-close").click(function () {
        $("#layer-mask").hide();
        $("#layer-pop").hide(); //显示函数方法show();;
    });
})

/* 然后呢 ？？？
怎么做注册跟登录在一个页面？？？
怎么做到没有登录点击加到购物车就弹出登录窗？？？ */