/*①设置每两秒轮播图自动切换，但是鼠标放在轮播图上停止自动切换
* ②设置轮播按钮与轮播圆圈可以切换上下图片*/


/*我们要对元素进行操作，每次都要通过id来获取元素，每次都会比较麻烦，为了简化我们的代码，
我们可以封装一个（通过代码获取元素的）方法。*/
function byId(idName) {
    /*    var idNameArg=document.getElementById("idName");
    return idNameArg;要考虑完善，如果这个id是数值要直接返回这个id，虽然说id不能是数值，但是万一在定义id的时候做错了，我们要通过这个来避免错误
    代码更新如下*/
    return typeof(idName) === "string" ? document.getElementById(idName) : idName; //如果id名字是字符串那么返回元素，否则返回这个id名
}


var index = 0,
    idTime = null, //定义一个间歇调用  返回的id参数值
    bannerArgs = byId("banner").getElementsByTagName("div"),  //调用byId函数，一定要加上引号！！！！！！不要忘记啊！！！！
    dotsArgs=byId("dots").getElementsByTagName("span"),
    preArg=byId("pre"),
    nextArg=byId("next"),
    bannerArgLen = bannerArgs.length;

/*
①设置每两秒轮播图自动切换，但是鼠标放在轮播图上停止自动切换
   那就是对最外层的文本框main进行设计，先去获取main，然后设计事件*/
function backgroundImg() {
    var mainArg = byId("main");
    /* 调用byId函数*/
    /*鼠标在图片上，停止轮播*/
    mainArg.onmouseover= function () {
        if(idTime){                  //打开页面就自动轮播，调用间歇调用属性，图片切换，返回id值idTime
           clearInterval(idTime);    //当鼠标滑到图片上，idTime为真，取消间歇调用，停止轮播
        }
    };
    /* 鼠标离开开始轮播*/
    mainArg.onmouseout = function () { //这里是触发一个事件
        idTime = setInterval(function () {
            index++;
            if (index >= bannerArgLen) {
                index = 0;
            }
            changeImg();
            /*调用图片切换函数*/
        }, 2000)
    };
    /*打开页面就开始自动轮播， 在main元素上自动触发鼠标滑过离开的事件*/
    mainArg.onmouseout();//这里是调用一个onmouseout方法，不懂？？？？？？？？？？？？？？？
    /*点击左按钮，切换图片*/
    preArg.onclick=function () {
        index--;
        if(index<=-1){
            index=bannerArgLen-1;//为什么我的按钮只能点击一次？？？？？？？？？？？？？？？？？？？、
        }
        changeImg();//为什么我的按钮只能点击一次？是鼠标不好，没有反应
    };
    /*点击右按钮，切换图片*/
    nextArg.onclick=function () {
        index++;
       if(index>=bannerArgLen) {
           index = 0;
       }
        changeImg();
    };
    /*点击圆点，切换图片*/
    for(var j=0;j<bannerArgLen;j++){      //圆圈的个数与上面轮播的个数长度是一样的，没必要换算两个变量了
        dotsArgs[j].id=j; //通过改变index使得它作为当前圆点的索引值,"circleIndex" 避免id为纯数字
        dotsArgs[j].onclick=function () {
            index=this.id;
             changeImg();
        }
    }
}
backgroundImg();


/*图片切换函数*/
function changeImg() {
    /*    bannerArgs[index].setAttribute("background-active");这个为啥不成功？？？？？？？？*/
    for (var i = 0; i < bannerArgLen; i++) {
        bannerArgs[i].style.display="none"; //将所有的div都隐藏起来不显示
        dotsArgs[i].className="";//将所有的dots的背景阴影 class都设置为空
    }
    bannerArgs[index].style.display = "block"; // 根据index找打当前的div将其显示出来，block的话，轮播一轮之后每张图片都block了不遍历隐藏其他的图片的话，就不变了
    dotsArgs[index].className="active";//将当前的背景阴影 class 设置为active
}


/*
=function () {
    //console.log(j);              3,在js中func会改变作用域，在这里j不是0,1,2，它是上面孙欢的最终值
    changeImg()

}*/
