/*  jqurey 的学习

问题：什么是jqurey？？？

1、jqurey是一个js函数库，
2、jQuery是一个轻量级的"写的少，做的多"的JavaScript库。
    ①它封装了很多js的方法，实现了很多有用的功能。
    使得一些js的特效方法使用起来很方便。它就是用js封装的一些方法，开发者可以直接调用这些方法。
    不必再为了实现一些特效而费时费力的去编写大段的js脚本。
    （但是不能不会js，开发者也可以去开发封装函数，做一套新的js库也创建类似jqurey的东西出来给开发用）
    ②jqurey还封装了浏览器的兼容性问题，使用它我们不必再担心浏览器的兼容问题
    ③jqurey的功能
        html元素选取（DOM元素查找），更加方便 $(" ")
        html元素操作              ，更加方便
        css操作，                 ，更加方便
        html事件函数              ， 更加方便，且不用担心浏览器的兼容性的问题
        js的特效与动画             ，
        html的DOM遍历与修改        ，
        AJAX                        异步请求方式，在不刷新的同时更新页面的内容      
        utilities，使得代码写起来非常的方便
         除此之外，Jquery还提供了大量的插件。
        jQuery 团体知道JS在不同浏览器中存在着大量的兼容性问题，
        目前jQuery兼容于所有主流浏览器, 包括Internet Explorer 6!
                jQuery 版本 2 以上不支持 IE6，7，8 浏览器。
                如果需要支持 IE6/7/8，那么请选择1.9
                你还可以通过条件注释在使用 IE6/7/8 时只包含进1.9。
                <!--[if lt IE 9]>
                    <script src="jquery-1.9.0.js"></script>
                <![endif]-->
                <!--[if gte IE 9]><!-->
                    <script src="jquery-2.0.0.js"></script>
                <!--<![endif]-->



问题：如何引入jqurey？？？
    ①从jqurey.com下载文件到项目的jqurey库中使用，就是在html文件中用src="路径"的方式引入
    ②从CDN中载入jqurey，就是在html文件中用src="http://.....",的方法引入
    以下是例子，具体的还看更新的新的地址是什么，版本是什么
        百度服务器中存有的jqurey
        http://libs.baidu.com/jqurey/3.31/jqurey.min.js
        新浪服务器中的jqurey
        ？？
        谷歌服务器中的，
         http://ajax.googleapis.com/ajax/libs/jqurey/jqurey.min.js

问题：jqurey的语法！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    语法：$("元素"/"#id"/this).方法（）             $(元素/this).action（）
    $就是jQuery的别称。也就是用$来定义jqurey
    元素/this，指html中的元素
    方法（），jquery中定义的方法
    例子：
        $(this).hide()  隐藏当前函数
        $("p").hide()   隐藏所有段落


一、window
    window是浏览器端的全部数据变量的引用。          比如 window.window === window
    window.jQuery 就是浏览器中的全局变量里的jQuery。    window.jQuery ===jQurey
    但是jQurey特殊，要写window.jQuery，不然会出错的。 
二、$就是jQuery的别称！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    因此window.jQuery ===window.$  ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    $=jQuery！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

三、$(document).ready()和$(document).load()的区别！！！！！！！！！！！！！！！！！！！！！！
    与window.onload区别
    ready速度快


四、$()的几种用法、
    ①DOM选择，可以指定上下文?什么鬼，指定上下文，不就是在html中查找元素？？？？
        有的元素不好获取，就跟居父子/邻居关系来获取。
    ②DOM创建，可以指定所属的document、属性、事件、甚至所有jQuery方法；啥意思？？是this么？？
    ③DOM加载完成事件监听，是$(document).ready()的简化写法。  
        即$()=$(document).ready()  ！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        $(func)=$(document).ready(func)  
  */


/*
  jqurey选择器
  可以获取到0个，1个，多个元素，他们都会被封装一个类数组的对象中。所以我们把他们叫做，类数组，
  jqurey对象，jqurey集合，jqurey对象集合，jqurey元素集合，  是一个东西
*/



/*
1、DOM对象与jqurey对象的区别
    https://www.cnblogs.com/yellowapplemylove/archive/2011/04/19/2021583.html       
    
    ①.jQuery对象和DOM对象
        DOM对象，即是我们用传统的方法(js)获得的对象，var domObj = document.getElementById("id");
        jQuery对象即是用jQuery类库的选择器获得的对象;  var $obj = $("#id");
        jQuery对象：是通过jQuery包装DOM对象后产生的对象，它是jQuery独有的。

        获取id为foo的元素内的html代码。
            js方法：document.getElementById("foo").innerHTML;
        jqurey方法：$("#foo").html()
        注意：在jQuery对象中无法使用DOM对象的任何方法。
        例如$("#id").innerHTML 和$("#id").checked之类的写法都是错误的
        可以用$("#id").html()和$("#id").attr ("checked")之类的 jQuery方法来代替。
        同样，DOM对象也不能使用jQuery方法。学习jQuery开始就应当树立正确的观念，
        分清jQuery对象和DOM对象之间的区别，之后学习 jQuery就会轻松很多的。

    ②判断是DOM对象还是jqurey对象
        jqurey对象使用 .jqurey  可以获取版本号
        DOM对象使用.nodeType    可以获得节点，
        检测它是jqurey    object:if (对象.jqurey)
        检测它是DOM       object:if (对象.nodeType)

    ③jQuery对象和DOM对象的互相转换。 DOM对象与jqurey对象之间的转换。
        jquery对象和dom对象是不一样的！比如jquery对象不能使用dom的方法，dom对象不能使用jquery方法，
        那假如我 jquery没有封装我要的方法，那能怎么办呢？这时我们可以将jquer对象转换成dom对象，
        然后使用js去操作DOM对象来实现我们的效果。
        jquery提供了两种方法将一个jquery对象转换成一个dom对象，即[index]和get(index)。
        可能有人会觉得奇怪，怎么是用下标呢，没错，jquery对象就是一个数组对象.
        
        var jqureyObject=$("domobject");  //获取一个jqurey对象。下面来转化为DOM对象
        方法1：使用方法get（index）：    var domObject=jqureyObject.get(index);
        方法2：使用类数组取索引的办法：   var domObject=jqureyObject[index];
        var $cr=$("#cr"); //jquery对象
        var cr = $cr[0]; //dom对象 也可写成 var cr=$cr.get(0);
        alert(cr.checked); //检测这个checkbox是否给选中

        dom对象转换成jquery对象。转换后可以任意使用jquery中的方法了.
        jquery对象提供了一套更加完善的工具用于操作dom
        对于一个dom对象，只需要用$()把dom对象包装起来，就可以获得一个jquery对象了，方法为$(dom对象);
        var domObject = document.getElementById("div");
        var cr=document.getElementById("cr"); //dom对象
        var $cr = $(cr); //转换成jquery对象
        */


/* jQuery与js的区别
        jQuery 入口函数:
                $(document).ready(function(){
                    // 执行代码
                });
                或者
                $(function(){
                    // 执行代码
                });

JavaScript 入口函数:
                window.onload = function () {
                    // 执行代码
                }
    jQuery 入口函数与 JavaScript 入口函数的区别：
    jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
    JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。 
    */


/* 下面这代码的开头可以是,完整全程的写法
       $(document).ready(function(){。。。})
       这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。
       如果在文档没有完全加载之前就运行函数，操作可能失败。下面是两个具体的例子：
       试图隐藏一个不存在的元素
       获得未完全加载的图像的大小 */
$(function () {
    var jqureyObject = $("#div");  //用jqurey来获取html元素，            -jqurey对象            
    var domObject = document.getElementById("div");//document获取html元素-DOM对象
    console.log(jqureyObject);//jQuery.fn.init [div#div]      -jqurey对象  
    console.log(domObject);// <div id="div">我是小米粥</div>   DOM对象
    console.log(jqureyObject.jqurey); //undefined，不懂？？？？？？为什会没有版本号？？？？
    console.log(domObject.nodeType);//1  DOM元素的节点类型，
    console.log(jqureyObject.nodeType); //undefined，表示这个对象不是dom对象
    console.log(domObject.jqurey);//undefined，表示这个对象不是jqurey对象

    console.log($("domObject")); //jQuery.fn.init [prevObject: jQuery.fn.init(1)]
    console.log($(jqureyObject.get(0)));//jQuery.fn.init [div#div]
    console.log($(jqureyObject[0]));//jQuery.fn.init [div#div]


    /*  下面这个是不是不可以？？，到底这个classname方法获取元素是怎么用的，*/
    /* 题外知识！ 
      js获取元素的方法中，只有id的是单个DOM元素，可以直接用，
      tagname、classname，的都是数组，都要借助索引才能得到单个DOM元素来操作的！！！！
  */
    var jqureyObject1 = $(".div");  //用jqurey来获取html元素，            -jqurey对象            
    var domObject1 = document.getElementsByClassName("div");//document获取html元素-DOM对象
    console.log(jqureyObject1);//jQuery.fn.init [prevObject: jQuery.fn.init(1)]       -jqurey对象  
    console.log(domObject1);// HTMLCollection []    DOM对象
    console.log(jqureyObject1.jqurey); //undefined，不懂？？？？？？为什会没有版本？？？？
    console.log(domObject1.nodeType);//undefined  DOM元素的节点类型，


    /* 2、获取jQuery对象 
            通过id获取          $("#idname");
            通过标签获取        $("p");
            通过class获取       $(".classname")
            通过后代获取         $("p.classname")   ,获取class名字为classname的所有p元素       
            通过事件获取当前元素 $(this) 
            通过关系查找，用方法查找，见   6、 jQuery对象操作           
        */

    /* 3、创建jQuery对象 
        创建  $("<div>内容</div>");
        放到页面中用  对象.appendTo("标签元素") 方法放进去，放到该元素的最后面
       4、设置属性
            两种办法第一种办法是元素必须是空元素
           ①  $("<a>",{text:"jingdong",href:"url",target:"",title:""});
           ②  $("<a>jingdong</a>").attr({href:"url",target:"",title:""});
    */
    var div = $("<div>hello</div>");//但是这样只是定义在内存中，没有放到页面上，
    /*  我们通过选择器是选择不到它 的，需要先放到页面中*/
    div.appendTo("body"); //只能是标签么，用"p1"怎么不行，
    var link = $("<a>", { text: "jingdong", href: "url", target: "", title: "" });
    link.appendTo("body");


    /* 5、 jQuery对象 ，是一个集合，也就是类似数组的东西，可以获取它的长度，*/
    console.log($("#div").length);//1

    /* 6、 jQuery对象操作
        jqurey是一个集合，也就是类似数组的东西，我们通常是需要对其中的某些元素进行操作，
        就要提取元素，也就是索引来获取，之后就用方法来操作
        ①对象[index]    返回DOM元素
        ②对象.get(index)返回DOM元素，   index可以是负值，负数从右边开始取
          对象.get()     返回DOM元素数组   
        ⑥对象.toArray() 返回DOM元素的数组，与get()一样，

        上面的方法是用来将jqurey对象转化为DOM对象的，
        下面的对jqurey的操作都还是返回jqurey对象。
        ③对象.eq(index) 返回jqurey对象， 
        ④对象.first()   返回jqurey对象，
        ⑤对象.last()    返回jqurey对象，        
        ⑦对象.parent()    返回一级父元素，jQuery对象
        ⑧对象.parents()   返回所有父元素，jqurey对象
        ⑨对象.parentsUntil()返回到某个父元素的所有父元素，jqurey对象
        ⑩对象.children()  返回所有一级子元素，jqurey对象
        ⑪对象.contents()  返回所有一级子元素带文本节点，的jqurey对象
        ⑫对象.find()      后代元素  
        ⑬对象.closest()   返回它本身或者是逐级向上(父元素)查找到匹配的元素，没有就是空，jqurey对象  

     */
    var divJqurey = $("#div");
    console.log(divJqurey[2]);//undefined
    console.log(divJqurey.get(2));//undefined
    console.log(divJqurey.get());//(2) [div#div, div]
    console.log(divJqurey.eq(2));//jQuery.fn.init [prevObject: jQuery.fn.init(2)]
    console.log(divJqurey.eq());//jQuery.fn.init [prevObject: jQuery.fn.init(2)]
    console.log(divJqurey.first());//jQuery.fn.init [div#div, prevObject: jQuery.fn.init(2)]
    console.log(divJqurey.last());//jQuery.fn.init [div, prevObject: jQuery.fn.init(2)]
    console.log(divJqurey.toArray());//(2) [div#div, div]

    /* 7、 通过父子关系，邻居关系来获取对象，   */
    var arg = $(".span1").parent(); //              上一级父元素

    console.log(arg.toArray());//[p]
    var args = $(".span1").parents(); //            所有父元素
    console.log(args.toArray());// (6) [p, div, div, div, body, html]
    console.log(args.toArray()[1]);// 
    /*<div>
        <p><span class="span1">ok</span></p>
    </div> */
    console.log(args.eq()); //jQuery.fn.init [prevObject: jQuery.fn.init(6)]
    var arg1 = $(".box").children();//所有的一级子元素
    console.log(arg1);// jQuery.fn.init [p, prevObject: jQuery.fn.init(1)]
    console.log(arg1.contents()); //把所有的文本节点返回，文本节点的索引为1
    console.log(arg1.find(".span1").toArray());//[span.span1]
    console.log(arg1.closest(".span2"));//[] class=box的本身与父级没有.span2的元素

    /* 兄弟姐妹，邻居元素查找，找的是与自己同级的
      ⑭对象.next()，  查找下一个的兄弟姐妹，不包括自己
      ⑮对象.nextAll()  查找所有的的兄弟姐妹，不包括自己
      ⑯对象.nextUntil() 查找自己到另外一个兄弟姐妹之间的兄弟姐妹，头尾都不包括
      ⑰对象.prev()
      ⑱对象.prevAll() 
      ⑲对象.prevUntil() 
      ⑳对象.siblings()    找的是兄弟姐妹，不包括自己
      */
    console.log($(".span1").next("span"));//
    console.log($(".span1").nextAll(".span1"));
    console.log($(".span1").nextUntil(".span1"));
    console.log($(".span1").prev(".span1"));
    console.log($(".span1").prevAll(".span1"));
    console.log($(".span1").prevUntil(".span1"));
    console.log($(".span1").siblings(".span1"));

    /*  8、其他的方法,增加过滤元素
      ㉑ 对象.add()   同时查找很多元素，
      ㉒ 对象.not()    过滤其中的元素,()里面还可以是函数,通过函数的返回值决定是否过滤
      ㉓ 对象.filter()  过滤其他元素，就选择这个()元素,()里面还可以是函数
      ㉔ 对象.hasClass()选择拥有某属性的元素，一般用于列表中是否有二级菜单操作用的
    */
    console.log($(".span1").add("span"));
    // jQuery.fn.init(6) [span.span1, span.span1, span.span2, span, span, span, prevObject: jQuery.fn.init(2)]
    console.log($("span").not(".span1"));
    //jQuery.fn.init(4) [span.span2, span, span, span, prevObject: jQuery.fn.init(6)]
    console.log($("span").not(".span1").not(".span2"));
    //jQuery.fn.init(3) [span, span, span, prevObject: jQuery.fn.init(4)]
    console.log($("span").filter(".span1"));
    //jQuery.fn.init(2) [span.span1, span.span1, prevObject: jQuery.fn.init(6)]
    console.log($("span").filter(function (index) {//这里的函数怎么还传个参数index，去掉好像也没有问题
        return $(this).hasClass("span1");//
        //jQuery.fn.init(2) [span.span1, span.span1, prevObject: jQuery.fn.init(6)]
        /* this指的都是？？？？？还不是很明白这个this
        在js中它指的是触发事件的DOM元素 ，
        在jQuery中它指的是使用这个filter方法的$("span")？？？？还是什么？？？
        */
    }));



    /*  9、获取子集
      ㉕对象.slice(start,end)  返回jQuery集合,    半闭区间
            索引可以是负数，负数从右边开始计算
     */
    console.log($("li").slice(4, 6));//jQuery.fn.init(2) [li, li, prevObject: jQuery.fn.init(7)]
    console.log($("li").slice());//
    //jQuery.fn.init(7) [li, li, li, li, li, li, li, prevObject: jQuery.fn.init(7)]
    console.log($("li").slice(0));//
    //jQuery.fn.init(7) [li, li, li, li, li, li, li, prevObject: jQuery.fn.init(7)]


    /*10、转换元素
    ㉖对象.map()
    将jQuery对象转换成另外一个jQuery对象！！！！！！！！！！！！！！！！，
    它的返回值取决于我们在()使用函数时的回调值.
    它里面可以返回null||undefined，或者其他任何值，返回null这些空值，是为了忽略这些元素
     
    */
    console.log($("li").map(function (index, domElements) {
        return this.id; //这个this指的是domElements
        //jQuery.fn.init(7) ["li1", "li2", "", "", "", "", "", prevObject: jQuery.fn.init(7)]

    }));



    /* 10、遍历元素 
    ㉗对象.each()
    它只是去读取jQuery对象，不会  改变它。
    它的返回值取决于我们在()使用函数时的回调值.    
    */
    console.log($("li").each(function (index, domElements) {
        //return this.id; //这个this指的是domElements
        //jQuery.fn.init(7) [li#li1, li#li2, li, li, li, li, li, prevObject: jQuery.fn.init(1)]
        //this.title=this.innerHTML;//等同于=this.innerText;
        if (this.id === "li2") {//使用严格的全等
            //return flase;//相当于for循环中的break；终止遍历了，
            return true;//相当于for循环中的continue，跳出本次循环，但是还是继续          
        }
        this.title = this.id;//等同于=this.innerText;  
    }));



    /* 11、其他一些操作元素的方法
    ㉘ is() ,常用于判断这个元素里面是否存在图片，如果存在的话就对图片的大小尺寸进行定义
    */
    console.log($(".box3").children().is("p"));//false
    console.log($(".box3").children().is("img"));//false
    console.log($(".box3").children().is("li"));//false
    console.log($(".box3").children().is("ul"));//true
    /* ㉙ end(); 一般用于发生错误的时候（破坏性操作），让它返回错误的前一次状态
    破坏性操作：就是指任何改变，所匹配的jQuery对象的操作。就是把最开始的jQuery对象改变了的一些方法，
    比如not，filter，find()等等
    注意：end()使用的前面一定要是一个破坏性的操作，才用end（），没有破坏用了end(),不会有任何变化
    */
    console.log($("ul").find(".li4").css("color", "red").end().find(".li6")
        .css("color", "blue"));//jQuery.fn.init [li.li6, prevObject: jQuery.fn.init(1)]
    //如果没有end()那么，li6不会变成蓝色的，因为find方法把jQuery集合改变了，后面的就找不到了
    console.log($("ul").end());//jQuery.fn.init [document]


    /* ㉚ addBack()
        把之前被忽略的元素也添加进来
       */
    /* ㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿ */
    var ele1 = $(".li1").nextUntil(".li3");//不包括li1，也不包括li3
    ele1.css("color", "yellow");//这样只用li2变成黄色
    var ele2 = ele1.end().addBack();//包括被操作的li1
    ele2.css("color", "yellow");// 这样li1，与li2 变成黄色
})