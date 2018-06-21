/*①设置每两秒轮播图自动切换，但是鼠标放在轮播图上停止自动切换
* ②设置轮播按钮与轮播圆圈可以切换上下图片*/


//一、封装函数
/*我们要对元素进行操作，每次都要通过id来获取元素，每次都会比较麻烦，为了简化我们的代码，
我们可以封装一个（通过代码获取元素的）方法。*/
function byId(idName) {
    /*    var idNameArg=document.getElementById("idName");
    return idNameArg;要考虑完善，如果这个id是数值要直接返回这个id，虽然说id不能是数值，但是万一在定义id的时候做错了，我们要通过这个来避免错误
    代码更新如下*/
    return typeof(idName) === "string" ? document.getElementById(idName) : idName; //如果id名字是字符串那么返回元素，否则返回这个id名
}





//二、定义变量
var index = 0,
    idTime = null, //定义一个间歇调用  返回的id参数值
    bannerArgs = byId("banner").getElementsByTagName("div"),  //调用byId函数，一定要加上引号！！！！！！不要忘记啊！！！！
    dotsArgs=byId("dots").getElementsByTagName("span"),
    preArg=byId("pre"),
    nextArg=byId("next"),
    bannerArgLen = bannerArgs.length,
    munuItemAgrs=byId("menu-content").getElementsByClassName("menu-item");//数组，getElementsByClassName（）这个ie8以下的浏览器不支持，那你用这个干吗？？？
                                                                            // ie8的怎么办？？？，还是用id啊！！，自己去封装一个通过classname来获取元素的方法
                                                                            //同时兼容很多浏览器，所以怎么用？？？？？？？？？？？？
    munuItemAgrsLen=munuItemAgrs.length;
    subMenuItemArgs=byId("sub-menu-content").getElementsByClassName("sub-menu-item");

/*三、打开页面就可以操作的函数
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
        dotsArgs[j].setAttribute("j-index",j);
     /*   dotsArgs[j].id=j; //通过改变index使得它作为当前圆点的索引值,"circleIndex" 避免id为纯数字*/
        dotsArgs[j].onclick=function () {
          /*  index=this.id;*/
            index=this.getAttribute("j-index");
             changeImg();
        }
    }
    /*导航菜单*/
    //在主菜单项目上显示子菜单
    for(var k=0;k<munuItemAgrsLen;k++){
        // munuItemAgrs[k].id=k;   不能再用这个id了，会与上面的冲突，自定义一个属性作为它的索引
        munuItemAgrs[k].setAttribute("k-index",k);
        munuItemAgrs[k].onmouseover=function () {
          /*  index=this.k-index;*///不是标准的html属性要用getAttribute去获取属性值
            index=this.getAttribute("k-index");
            changeSubItem();
        }
    }
      /*在离开主菜单项目，但是来到子菜单，显示子菜单*/
    byId("sub-menu-content").onmouseover=function () {
        byId("sub-menu-content").className="sub-menu-content";
        byId("sub-menu-box").className="sub-menu-box";
    };
    /*在离开主菜单项目，来到到子菜单，离开子菜单，隐藏子菜单*/
    byId("sub-menu-content").onmouseout=function () {
        byId("sub-menu-content").className="sub-menu-content hide";
        byId("sub-menu-box").className="sub-menu-box hide";
    };
   /* 离开轮播图的时候，子菜单也不显示*/
     byId("banner").onmouseout=function(){
        byId("sub-menu-content").className="sub-menu-content hide";
        byId("sub-menu-box").className="sub-menu-box hide";
    };
    /*在离开主菜单项目，隐藏子菜单*/
    byId("menu-content").onmouseout=function(){
        byId("sub-menu-content").className="sub-menu-content hide";
        byId("sub-menu-box").className="sub-menu-box hide";
    };
}
backgroundImg();  //调用函数

/*  function () {
    //console.log(j);              3,在js中func会改变作用域，在这里j不是0,1,2，它是上面换算的最终值
    changeImg()  }*/




/*四、子函数
    图片切换函数*/
function changeImg() {
    /*    bannerArgs[index].setAttribute("background-active");这个为啥不成功？？？？？？？？*/
    for (var i = 0; i < bannerArgLen; i++) {
        bannerArgs[i].style.display="none"; //将所有的div都隐藏起来不显示
        dotsArgs[i].className="";//将所有的dots的背景阴影 class都设置为空
    }
    bannerArgs[index].style.display = "block"; // 根据index找打当前的div将其显示出来，block的话，轮播一轮之后每张图片都block了不遍历隐藏其他的图片的话，就不变了
    dotsArgs[index].className="active";//将当前的背景阴影 class 设置为active
}

/*菜单显示隐藏函数*/
function changeSubItem() {
    for (var i = 0; i < munuItemAgrsLen; i++) {
        byId("sub-menu-box").className="sub-menu-box hide";
        byId("sub-menu-content").className="sub-menu-content";
        subMenuItemArgs[i].className="sub-menu-item hide";
        munuItemAgrs[i].style.background="none";
     }
    byId("sub-menu-box").className="sub-menu-box";
    subMenuItemArgs[index].className="sub-menu-item";//
    munuItemAgrs[index].style.backgroundColor="rgba(0,0,0,0.1)";
}



