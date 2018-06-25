/* jquery功能、功能4学习
        1、html元素选取   2、html元素操作       3、css操作，         4、html事件函数               
        5、js的特效与动画 6、html的DOM遍历与修改 7、AJAX 异步请求方式 8、utilities， 
*/
/* 
学习jquery事件的时候，先来回顾js中的事件，
DOM 0级事件：在html文件上直接添加事件，这个一般不用的，  
            DOM0事件模型还涉及到直接写在html中的事件，
            <div id="test" class="test" onclick="exec();" ></div>   
            通过这种方式注册的事件，同样遵循覆盖原则，同样只能注册一个，最后一个生效。
            区别就是，这样注册的事件，相当于动态调用函数(有点eval的意思)，因此不会传入event对象，
            同时，this指向的是window，不再是触发事件的dom对象。

DOM 0级事件:直接在dom对象上注册事件名称，就是DOM0写法，比如：
            document.getElementById("test").onclick = function(e){};
            document.getElementById("test")["onmousemove"] = function(e){};

            两种访问js对象属性的方法，[]的形式主要是为了解决属性名不是合法的标识符，
            比如：object.123肯定报错，但是object["123"]就避免了这个问题，
            与此同时，[]的写法，也把js写活了，用字符串表示属性名称，可以在运行时动态绑定事件。

            言归正传，事件被触发时，会默认传入一个参数e，表示事件对象，或者参数event
            通过e，我们可以获取很多有用的信息，比如点击的坐标、具体触发该事件的dom元素等等。
            基于DOM0的事件，对于同一个dom节点而言，只能注册一个，
            后边注册的同种事件会覆盖之前注册的。

            this。事件触发时，this就是指触发 事件的 那个dom对象 
            解除事件就相当简单了，只需要再注册一次事件，把值设成null
            原理就是最后注册的事件要覆盖之前的，最后一次注册事件设置成null，也就解除了事件绑定。
*/

/*  DOM 0级 ，一个元素绑定的事件中，会被后者覆盖，只有最后一个会生效。
    所有的浏览器都支持DOM 0级事件，但是他们有兼容差异， 
*/

window.onload = function () {
    //window.onload只能用一次，就是说用来window.onload来写js肯定是所有函数都放在一起了。
    //子级函数才放出去
    document.getElementById("p1").onclick = function () {
        /*         event = event || window.event; //由于浏览器的差异性，我们需要写上这么一句话，
                //参数可以传进来的参数直接获取，或者是从window上获取
                var target = event.target || event.srcElement; //获取属性的差异性 */
        console.log("click");
    }
    /* dom元素冒泡事件 */
    document.getElementsByClassName("div1")[0].onclick = function () {
        console.log("div1");
    }
    document.getElementsByClassName("div2")[0].onclick = function (event) {
        console.log("div2");
    }
    document.getElementsByClassName("div3")[0].onclick = function (event) {
        console.log("div3");
        event.cancelBubble = true;
    }
    document.getElementsByClassName("div4")[0].onclick = function (event) {
        console.log("div4");
        event.stopPropagation();
    }

    //点击子元素div4，得到结果div4    div3  div2  div1 
    //也就是说我们点击子元素，它会逐级的去看父元素是否存在事件，存在的话也会执行这些事件，
    /*  <div class="div1">
            <div class="div2">
                <div class="div3">
                    <div class="div4">
                        <p id="p2">okokokokok</p>
                    </div>
                </div>
            </div>
        </div> 
    */
    /*  阻止冒泡的方法，在子元素，增加方法,取消了冒泡元素，冒泡传递到这里就会中断。
        方法1：对象.stopPropagation();  翻译：停止传播
        方法2：对象.cancelBubble=true  翻译：取消泡泡
        应用：有的时候我们需要防止点击超链接点击进一个网页，那么我们就会使用到这种办法。
             阻止点击一个按钮就会刷新页面。
             还有其他的利用return false来实现，
             default来实现。
    以上就是DOM 0级事件的复习
    大部分情况，0级就够用了，但是最大的缺陷只能支持一个事件函数，这个缺陷就要用DOM2事件来弥补。
    */


    /* DOM 2级事件:
     DOM2支持同一dom元素注册多个同种事件。不会覆盖
    ①addEventListener(eventType,listener,useCapture布尔值)
       "事件名称", "事件回调", "捕获/冒泡"
        eventType:事件类型：click,mouseover,   就是js中的事件省略on
                    事件名称就不用多说了，相比DOM0，去掉了前边的on而已。
        listener：事件函数：就是事件函数的参数，第一个参数也是event，可以是函数
                    事件回调也很好理解，事件触发了总得通知你吧！回调时和DOM0一样，
                    也会默认传入一个event参数，同时this是指触发该事件的dom节点。
        useCapture：布尔值： 捕获true还是冒泡false
                    最后一个参数是布尔型，true代表捕获事件，false代表冒泡事件。
                    默认值为false，也就是这个事件跟DOM 0级一样的，只冒泡不捕获
                    如果值为true，那么这个事件就是只捕获，不冒泡
        某个元素触发了某个事件，最先得到通知的是window，然后是document，然后是body，
        然后是对应的有div就是div啦，还有其他的等等html结构。依次而入，
        直到真正触发事件的那个元素(目标元素)为止，这个过程就是捕获。
        也就是说完我们触发一个事件，它是从整个window开始取找到触发事件的元素的。

        接下来，事件会从目标元素开始起泡，再依次而出，直到window对象为止，这个过程就是冒泡。
        捕获事件要比冒泡事件先触发

    ②removeEventListene 
    */
    var elementp2 = document.getElementById("p2");
    elementp2.addEventListener("click", function () {
        console.log(click);
    }, false);

    /* 下面的代码，
    为false 的时候，它的执行顺序是从子元素事件开始的，div3  div2  div1 
    如果是true就是从父元素事件开始的，div1  div2  div3
    想要两种办法都执行一便就是false的写一边，true的写一遍就好了，因为DOM2不会覆盖
    
    但是一般我们都不会去用捕获，因为ie8，这种来的浏览器不支持，为了兼容，我们不用捕获
    */
    var elementbox1 = document.getElementsByClassName("div3")[0];
    elementbox1.addEventListener("click", function () {
        console.log(box1);
    }, false);
    var elementbox1 = document.getElementsByClassName("div3")[0];
    elementbox1.addEventListener("click", function () {
        console.log(box1);
    }, false);
    var elementbox1 = document.getElementsByClassName("div3")[0];
    elementbox1.addEventListener("click", function () {
        console.log(box1);
    }, false);

}

/* DOM 2级事件（IE8以下的浏览器不支持这种模型事件）:
        但IE8及其以下版本浏览器，自娱自乐，搞出了对应的自己的方法，你说你烦不烦？
        ③attachEvent(),连接事件
        ④detachEvent(),分离事件
*/


/*  总结：
        对于新手来说，我们做到浏览器兼容，问题太难了，那么jquery库就已经解决了这个问题。
        下面来学习jquery的事件函数 功能 
*/










/* 
jquery  事件:
    1、提供了统一的处理事件的方法，不用区分各种浏览器
    2、允许对一个元素添加多个事件函数，采用DOM2的功能
    3、采用的标准的事件名称，不用on
    4、事件实例event作为事件处理函数的第一个参数
    5、标准化事件实例event最常用的属性、
    6、提供的统一的事件取消 与 阻止默认行为的方法 
    
统一使用方法
    1、stopPropagation() 阻止冒泡
    2、preventDefault()  阻止默认行为？？？
    3、return false      阻止冒泡与默认行为
    
jquery事件处理，支持的方法。
    1、blur  失去焦点 
    2、change
    3、click     单击
    4、dblclick  双击
    5、error
    6、focus
    7、focusin
    8、focusout
    9、keydown
    10、keypress
    11、keyup
    12、load
    13、unload
    14、mouseover
    15、mouseenter
    16、mousedown
    17、mousemove
    18、mouseout
    19、mouseleave
    20、mouseup
    21、ready
    22、resize
    23、scroll
    24、select
    25、submit
*/

/*  添加事件处理函数
① on("事件名称"，"选择器"，{数据名：值}，事件处理函数func);
    事件可以是多个，以空格分隔
    之前js 的其他都不需要记忆bind(),delegate(),live(),都不用管，不用记，都过时了
*/
$(function () {
    $("p").on("click", null, null, function (event) {
        console.log("p clicked");
        //2个null可以不写，这个on方法是很只能的，它自己可以判断我们没有什么值。
        //下面是链式语法绑定多个事件
    }).on("click", function () {
        console.log("p clicked2");
    }).on("click", function () {
        console.log("p clicked3");
    });
    //下面是用选择器过滤了，点击到class=div2会胡触发事件，
    //点击div3会触发的话是因为冒泡
    //点击div1就不会触发事件了
    $("div").on("click", ".midiv2", function (event) {
        console.log("div clicked");
    });
    //还可以传入一些数据，数据的获取方法是event.data,
    //控制台打印出来还要加上站位符  %o
    $("div").on("click", ".midiv2", {
        mi: 70
    }, function (event) {
        console.log("div clicked %o", event.data); //div clicked {mi: 70}
    });
})

/* 给每个列表项添加一个事件函数 */
$(function () {
    /* 方法1：给每个li列表都添加上事件，但是列表多的话，这个开销大，性能就不好了， 
    而且列表是动态增加的，用这个方法就及其不好了，*/
    /*     $("li").on("click", function (event) {
            console.log("cliced %o", $(this));
            //this指的是触发事件的$("li") 对象
        }) 
        */
    /* 方法2， 借助冒泡的功能， 给父元素ol去添加事件，达到子元素可以触发事件的效果
    我们点击子元素li的时候，往上冒泡，冒泡到ol的时候就检测到ol绑定的事件，触发这个事件*/
    $("ol").on("click", function (event) {
        //这个target是什么东西？？？？？？？
        //我们需要去判断这个target是什么，如果是li就知道，不是就不执行。
        console.log("clicked1 %o", $(event.target));
    })
})


/* 统一使用方法
stopPropagation() 阻止冒泡
preventDefault()  阻止默认行为？？？
return false      阻止冒泡与默认行为
*/
$(function () {
    $(".midiv2").on("click", function (event) {
        event.stopPropagation();
        //在他这阻止，那么它的父级元素不会被它的内层元素的事件触发影响，而触发父级的事件了
        console.log("clicked1 %o", $(this));
    })
})
/* jquery 支持的事件

*/

/* 一次性处理事件的添加，
    有的时候我们不希望事件每次都执行，而是执行完一次就ok了，就像是一次性筷子一样，
    只能执行一次。
②one("事件类型名","选择器",{数据},事件函数)
 */

/* 移除事件函数，
③off("事件类型名","选择器",事件函数)
  off()移除该对象所有的事件
  off("事件类型名")移除该对象 该类型事件，如果是对象集合也就是删除对象集合中所有对象的该事件
    事件类型可以是多个，以空格分隔
*/
$(function () {
    $(".midiv2").off("click");
})



/*
事件实例对象的属性
1、altKey 
2、bubbles
3、button
4、cancelable
5、charCode
6、clientX
7、clientY
8、ctrlKey
9、currentTarget
10、data
11、detail
12、delegateTarget
13、eventPhase
14、metaKey 有浏览器兼容问题
15、namespace
16、offsetX
17、offsetY
18、originalTarget
19、originalEvent
20、pageX 有浏览器兼容问题
21、pageY  有浏览器兼容问题
22、prevValue
23、relatedTarget 有浏览器兼容问题
24、result
25、screenX
26、screenY
27、shiftKey
28、target   有浏览器兼容问题
29、timeStamp
30、type
31、view
32、which   有浏览器兼容问题
*/

/* 统一使用方法，
    1、stopPropagation() 阻止冒泡
    2、preventDefault()  阻止默认行为？？？ 事件实例对象的方法
        例如阻止点击提交按钮 提交表单的行为
        阻止点击链接跳转页面
    3、return false     阻止冒泡且默认行为 
    4、stopImmediatePropagation() 
        立刻阻止事件处理函数的执行并防止事件冒泡
        
        就是说链式事件的时候，使用了stopImmediatePropagation() 的事件可以执行，
        后面连接的事件函数得不到执行了，并且使用的这个方法的事件的冒泡行为也被阻止了。
         $("p").on("click", function (event) {
                console.log("p clicked");       可以执行 
         }).on("click", function () {
             stopImmediatePropagation()
                console.log("p clicked2");   可以执行，阻止冒泡
         }).on("click", function () {
                console.log("p clicked3");   不会被执行了
         });
    5、isDefaultPrevented()，返回布尔
    6、isPropagationStoped()，返回布尔
    7、isImmediatePropagationStoped()，返回布尔
    后面三个是用来看它是否用了 阻止方法 的检测
*/



/* 主动触发事件，不是用户行为触发的事件，
   1、trigger("事件名称",{数据})
   2、triggerHandler("事件名称",[数据])
    都是触发指定事件
   
    区别：
    trigger()
    


    triggerHandler()
    ①不会触发浏览器默认事件？？？？？什么鬼意思
    ②不会产生事件冒泡
    ③只触发jquery对象集合中的第一个元素的的事件处理函数
    ④返回的是事件处理函数的返回值，而不是jquery对象（所以不能使用链式语法！！！）

    应用：给新闻列表标记已读
*/
$(function () {
    $("li").on("click", function () {
        console.log("已读 %o", $(this)); //点击li触发点击事件
    })
    $("input").on("click", function () {
        $("li").trigger("click"); //点击按钮的时候，触发点击事件函数
        //这个按钮事件去触发另外一个事件，另外的事件自动的去  触发li点击事件
    })
})
//上面用triggerHandler()就 做不到
$(function () {
    $("li").on("click", function () {
        console.log("已读 %o", $(this)); //点击li触发点击事件
    })
    $("input").on("click", function () {
        $("li").triggerHandler("click"); //点击按钮的时候，触发点击事件函数
        //这个按钮事件去触发另外一个事件，另外的事件自动的去  触发li点击事件
    })
})

$(function () {
    $("li").on("click", function (event, arg1, arg2) {
        console.log("已读 %o", $(this)); //点击li触发点击事件
        console.log(arg1);
        console.log(arg2);
    })
    $("input").on("click", function () {
        $("li").triggerHandler("click", [1, 2]); //点击按钮的时候，触发点击事件函数
        //这个按钮事件去触发另外一个事件，另外的事件自动的去  触发li点击事件
    })
})

/*
事件触发/添加的快捷方法，
没都写on的话就会很麻烦，这里提供快捷方式，省略on
带有函数就是事件的添加， 不带就是事件的触发
当然这个不能添加数据了，就是不能添加event之外的参数

语法：  事件名()    触发事件
       事件名(函数) 添加事件
1、 blur 
2、 change
3、 click
4、 dblclick
5、 focus
6、 focusin
7、 foucsout
8、 keydown
9、 keypress
10、keyup
14、mouseover
15、mouseenter
16、mousedown
17、mousemove
18、mouseout
19、mouseleave
20、mouseup
21、ready
22、resize
23、scroll
24、select
25、submit
*/
$(function () {
    $("li").click(function (event) {
        console.log("已读 %o", $(this)); //添加事件
    })
    $("input").on("click", function () {
        $("li").click(); //触发事件
    })
})