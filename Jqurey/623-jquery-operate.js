/* 学习了如何获取jquery选择器之后，就是对这些对象进行操作了，也就是jquery的功能！！！

操作一、
        1、html元素选取   2、html元素操作       3、css操作，         4、html事件函数               
        5、js的特效与动画 6、html的DOM遍历与修改 7、AJAX 异步请求方式 8、utilities，      
    获取jquery对象
操作二、
    jquery对象其他的jquery对象
    622已经学习了对获取到的jquery对象，操作之后获取其他的jquery对象
 */


/* 操作三、
    CSS特性，属性，设置值
    属性(property)和特性(attribute)是不同的。属性是DOM节点的属性，而特性是HTML标签的特性
    因为html是不区分大小写的，我们的特性是不区分大小写的，但是属性是区分大小写的。

    attribute表示HTML文档节点属性，property表示JS对象的属性

   ① properties属性：我们指的是DOM元素标签上那些特定的值，  对象.属性  获取属性值
     attribute特性：一个对象实例的特征。                  对象.getAttribute 获取特性值

   ② 值的区别
    特性的值都是字符串，string
    属性的值不只是字符串，对应的属性值可以是字符串、布尔值、数值甚至是对象。
    string Boolean number object
    
    下面这些src=" ",这些所有的  =前的东西  都是img  或者input 的特性，后面是他们的值。
    <img class="img1" id="img1" src="../img/fe.png" alt="image1" title="photo" style="width: 100px;height: 100px;" />
    <input type="checkbox" id="book" name="book" title="Check this!" book="jQuery in Action" />
    
    元素的所有特性性会根据属性名集中封装在一个对象中， DOM元素实例中的attributes就是存储这些信息的对象。
    另外，代表了元素标签的对象还会被给予一些属性，这些属性就代表了元素标签中那些属性。 
    */
$(function () {
    //document.write($("#img1").attributes);//为什么我的图片一闪而过？？？
    console.log($("img").attributes); //为什么是undefined
    //因为attributes是DOM对象的操作方法，不能用于jquery对象上的
    var imgarg = document.getElementById("img1");
    console.log(imgarg.attributes);
    /*     NamedNodeMap {
        0: class, 
        1: id, 
        2: src, 
        3: alt, 
        4: title, 
        5: style, 
        class: class, id: id, src: src, alt: alt, title: title, …} */
    console.log(imgarg.getAttribute("class")); // img1
    console.log(imgarg.getAttribute("id")); // img1
    console.log(imgarg.getAttribute("src")); //../img/fe.png
    console.log(imgarg.getAttribute("alt")); // image1
    console.log(imgarg.getAttribute("title")); // photo
    console.log(imgarg.getAttribute("style")); //  width: 100px;height: 100px;
    console.log(imgarg.class); //undefined
    console.log(imgarg.id); //img1
    console.log(imgarg.src); //file:///D:/go/src/github.com/xiaomizhou66/web-2/img/fe.png
    console.log(imgarg.alt); //image1
    console.log(imgarg.title); //photo
    console.log(imgarg.style);
})
//CSSStyleDeclaration {0: "width", 1: "height", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

/* •	属性（Properties）是JavaScript固有的对象，每个属性都有一个名字和一个值。
           JavaScript的动态属性允许我们在脚本的控制下去创建其对象的属性。
   •	对于特性（Attributes），我们指的是DOM元素标签上那些特定的值。
           考虑下面的HTML代码：
            <img id="my-image" src="image.gif" alt="An image" class="some-class" 
            title="This is an image" />
           这个元素的标记中，标签名是img，其中的id、src、alt、class和title代表元素的特性。
           每一个特性都由一个名称和值组成。

        属性值可能会和其相关联的特性值不同。
        <input id="surname" tabindex="1" style="color:red; margin:2px;" />
        
        ①tabindex 当我们其作为特性检索时，它是一个字符串；1
            而当作为属性时，它是没有定义的，tabindex不是input的属性
        ②style，当我们其作为特性检索时，它是一个字符串；color:red; margin:2px;
            而当作为属性时，style又变成了一个对象（类型为CSSStyleDeclaration）。

    •   元素的所有特性会根据特性名集中封装在一个对象中，
        DOM元素实例中的attributes就是存储这些信息的对象。
        另外，代表了元素标签的对象还会被给予一些属性，这些属性就代表了元素标签中那些特性。
    •	因此，特性值不仅存储在attributes属性中，还有一小部分会存储在其他属性中。
        
        attribute表示HTML文档节点属性，property表示JS对象的属性 
*/

$(function () {
    var inputArg = document.getElementById("surname");
    console.log(inputArg.getAttribute("id")); //surname
    console.log(inputArg.getAttribute("tabindex")); //1   
    /*  var tabindexarg = inputArg.getAttribute("tabindex");
     console.log(typeOf(tabindexarg)); 
     这个typeOf为什么总是错，不能这样用么？？？*/
    console.log(inputArg.getAttribute("style")); //color:red; margin:2px;
    console.log(inputArg.id); //surname
    console.log(inputArg.tabindex); //undefined
    console.log(inputArg.style); //返回对象
    //CSSStyleDeclaration {0: "color", 1: "margin-top", 2: "margin-right", 3: "margin-bottom",
    // 4: "margin-left", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
    console.log(inputArg.getAttribute("checked")); //  null  没有这个特性
    console.log(inputArg.checked); //false   这个元素中没有checked属性   
})

/* •	存储在attributes对象中的特性值会和其对应的属性值保持着一个积极的联系。
    改变一个特性的值经常会导致其对应属性值的改变，反之亦然。 
    •	<input type="checkbox" id="book" name="book" title="Check this!"book="jQuery in Action" checked />
    */
$(function () {
    var inputArg1 = document.getElementById("book");
    console.log(inputArg1.getAttribute("checked")); //  空   有特性但是没有值，
    console.log(inputArg1.checked); //true   有属性  这种情况，我们要用属性的办法来获取
    console.log(inputArg1.getAttribute("title")); //Check this!
    console.log(inputArg1.title); //Check this!  
})
/*
 结论:
1.	如果某个特性在其对应的DOM对象中存在着内置（原生）的属性，则它们的值会保持同步。
 比如，title是一个标准的特性并且代表了图片（image）的DOM元素中也有其对应的title属性。
 因此，任何对于其特性值的修改都会同步更新到它关联的属性中去，反之亦然。
 
 在html中，在浏览器的解析中，它的属性与特性值保持着动态链接，他们的值保持同步。
 如果特性是本来就存在DOM对象中的，特性值与属性值会同步。改一个的值，另外一个的值就会被改变，
 页面的中的值也会被改变。
 如果特性是本来就存在DOM对象中的，但是值的类型是boolean型，特性值与属性值 不会 同步。
 改变属性值，特性值不会被改变，html中的值也不会被改变。特性值是html中的值。
 如果特性 不是 html内建的特性  的，特性值与属性值 不会 同步。
 （内建）设计者杜撰的特性，不是html中自带的特性。
 例如，book特性将不会被当成DOM元素中的一个属性被创建。 
 
2.	如果一个特性存在着对应得内置属性，但属性的类型是一个布尔类型，那么它们的值将不会被同步。
 例如，checked特性作为一个标识了复选框是否被选中的特性被检索，那么如果元素中没有定义则为null，
 就像我们例子中的这个input元素一样。但是如果它被当成属性来看待，不管它是否被定义，
 你总能获取到一个布尔值（true表示选中，false表示未被选中）。
 
3.	如果特性不存在对应的内置属性，那么这个特性对应的属性将不会被创建当然也不会同步了。
例如，book特性将不会被当成DOM元素中的一个属性被创建。  
 
4、特性值是html页面的值，特性值被改变了，html页面中值就会被改变了。
 
 
5、还有一些特殊之处，有点时候，特性值与属性值是同步的，但是他们的值不一样！！！！
*/
/* 题外知识！ 
       js获取元素的方法中，只有id的是单个DOM元素，可以直接用，
       tagname、classname，的都是数组，都要借助索引才能得到单个DOM元素来操作的！！！！
   */
$(function () {
    var img = document.getElementsByClassName("img1");
    console.log(img[0].src); //file:///D:/go/src/github.com/xiaomizhou66/web-2/img/fe.png
    console.log(img[0].getAttribute("src")); //../img/fe.png
    //属性值得到的是绝对地址，特性值得到的是相对地址（页面中设置的地址）
    var imgarg4 = document.getElementById("img1");
    console.log(imgarg4.className); //img1
    console.log(imgarg4.getAttribute("class")); // img1
    //注意class是保留字，要用其属性值要用className的方法来获取
})

/* 操作三、
    1、html元素选取   2、html元素操作       3、css操作，         4、html事件函数               
    5、js的特效与动画 6、html的DOM遍历与修改 7、AJAX 异步请求方式 8、utilities， 
    回到我们jquery的操作使用。
    CSS特性，属性，设置值
    https://blog.csdn.net/g6uqwseseo/article/details/71172814

    上面学习了特性与属性的区别，这个是js的区别，实际上他们在英文中的翻译是一样的
    在使用的时候也没有太过意的区分他们。通常都叫他们是属性。
    ①获取特性的值 attr("name")   返回DOM元素  都是获取第一个元素，有几个这样的标签都是获取第一个
    ②设置特性的值 attr("name","value")   设置单个值  
                  attr({name:"value",  name:"value", name:"value"})设置多个值 
    ③删除特性的值 removeAttr("name")  删除单个特性
                  removeAttr("name name name")  删除多个特性                   
  
                  <img class="img1" id="img1" src="../img/fe.png" alt="image1" title="photo" style="width: 100px;height: 100px;" />
    <img class="img1" id="img2" src="../img/fe.png" alt="image1" title="photo" style="width: 100px;height: 100px;" />
    <input id="surname" tabindex="1" style="color:red; margin:2px;" />
    <input type="checkbox" id="book" name="book" title="Check this!" book="jQuery in Action" checked/>
*/
$(function () {
    console.log($("img").attr("class")); //img1
    console.log($("img").attr("hui", "90")); // 
    //Query.fn.init(2) [img#img1.img1, img#img2.img1, prevObject: jQuery.fn.init(1)]
    console.log($("img").attr({
        hui: "90",
        title: "imge logo",
        book: "po"
    })); // 
    /* [注意]attr()方法只获取第一个匹配元素的属性值。要获取每个单独的元素的属性值，
        我们依靠jQuery的.each()或者.map()方法循环
        属性(property)和特性(attribute)是不同的。属性是DOM节点的属性，而特性是HTML标签的特性

    设置值与取值不一样，取值的时候有两个img标签，取值只能取到第一个，
    但是设置值会把两个img标签的特性值都设置了.删除值也是sha删除所有的img标签的值。 */
    /* 设置的值还可以是一个函数，这样就很灵活，我们可以在中间做一些判断再返回值 */
    console.log($("img").attr("mi", function (index, prevValue) {
        return prevValue;
    })); //
    console.log($("img").removeAttr("class"));
    var imgargn = console.log($("img").removeAttr("class id hui"));
})
/* 注意因为这个不是DOM对象，
    不能直接使用  对象.属性       来获取
    可以是对象[index].属性       先转化为DOM对象再来获取
    可以是对象.get(index).属性， 先转化为DOM对象再来获取 
    还有下面的方法，jquery方法，直接对jquery对象进行操作
    因为特性的是都是字符串，我们用获取到的特性可能不是一样真值，要通过属性的办法来获取操作。

    
④获取属性的值 prop("name")   返回DOM元素  都是获取第一个元素，有几个这样的标签都是获取第一个
⑤设置属性的值 prop("name","value")   设置单个值  ,value是字符串就有引号，不是字符串没有引号！！
            prop({name:"value",  name:"value", name:"value"})设置多个值???不可以把？ 
⑥删除属性的值 removeProp("name")  删除单个属性，属性只能一次删除一个，不能同时删除多个
  
*/
/* $(function () {
    imgargn.end().end().end().end().end();
}) 
end()是返回被查询的时候破坏的元素，在特性这里并不能返回，不是他的方法，不能用。
*/
$(function () {
    console.log($("#book").prop("checked", true)); //设置这个复选框被选中的意思
})

/* 在DOM元素中存贮数据，有的时候，我们直接的在html中去设置特性，会导致内存泄漏，或者是降低
    jquery提供了我们在DOM元素找那个 储存数据的方法。
 */
/* jQuery中attr()、prop()、data()用法及区别
    https://www.cnblogs.com/yaomeng/p/5359894.html 
    .attr()，此方法从jq1.0开始一直存在，官方文档写的作用是读/写DOM的attribute值，
        其实1.6之前有时候是attribute，有时候又是property。
    .prop()，此方法jq1.6引入，读/写DOM的property。
    .data()，此方法在jq1.2.3引入，作用是把任意的值读取/存储到DOM元素对应的jq对象上。
        data()存取的内容可以是字符串、数组和对象。
        从性能上对比，.prop() > .data() > .attr()，不同浏览器不同版本.data()和.attr()的
        性能关系有差异，不过.prop()总是最优的。
    
    对于一些非内建的特性，data("name","value")我们修改的它的属性的时候，它的页面值是不变的，但是我们已经用data存贮了
    数据，下次可以用data("name")来获取到值。
    ⑦设置属性的值 data("name","value")   设置单个值，vlaue的有没有引号，看值类型
    ⑧获取属性的值，data("name"),获取到的显示data设计的值，不是html中data的值，这是优先级
    ⑨删除属性的值 removeData("name")  删除单个，
                  removeData("name" "name")  删除多个
                  removeData()  删除所有
    注意：这里的属性值指的是非内建的，删除的都是非内建的，内建的还是会留在html中的。
    ⑩判断数据是否存在 jQurey.hasData(DOM元素)//返回值，布尔值

*/
$(function () {
    console.log($("#book").data("ui", true)); //
    //设置的data值可以是字符串，布尔值，number，对象
    console.log($("#book").attr("ui")); //undefined
    console.log($("#book").prop("ui")); //undefined
    console.log($("#book").data("ui")); //true
    //console.log($("#book").data());不加“name”用于返回对象
    //要注意3之前的版本的data属性的bug

})

/* 操作三、
    1、html元素选取   2、html元素操作       3、css操作，         4、html事件函数               
    5、js的特效与动画 6、html的DOM遍历与修改 7、AJAX 异步请求方式 8、utilities，  
    */
/* 下面真正的进入到jquery对CSS的操作，样式修改 
  html的样式都是预先在css中能够设置好的，通过jquery去修改元素的属性来达到修改css样式的效果。
  ⑪addClass("name")            添加class类       值可以是一个函数
    addClass("name name name")添加多个类          值可以是一个函数
  ⑫removeClass("name")                          值可以是一个函数
    removeClass("name name name")移除多个类       值可以是一个函数
    
*/
$(function () {
    $("#domo").addClass("bg-red");
    $("#domo").addClass("m10 p10 b10");
    $("#domo").removeClass("m10 p10 ");
    console.log($("#domo")[0]); //<div class="bg-red b10" id="domo">div</div>
    $("#domo").removeClass(function (index, className) {
        console.log(index); //
        console.log(className); //box11 bg-red b10
        return "box11"; // 只返回box11这个类，就是要remove这个box11的类，
    });
    console.log($("#domo")[0]); //<div class="bg-red b10" id="domo">div</div>
    /* 注意，上面的两行console.log($("#domo")[0]);的值都是一样的，按理来说按照顺序执行我们得到的值
         应该是不一样的，但是实际得到的结果是一样的，为什么呢？
    因为 console.log不是这个js提供对象，提示浏览器提供的，是在浏览器后台有的一个输出。更具体的就是说
        首先明确一点，$("#domo")[0]所储存的是一个引用类型值的地址，所有对$("#domo")[0]的操作都会具体
        到这个地址所对应的那个对象上，html文档被修改了。其次，console并不是JavaScript提供的对象，
        而是浏览器的控制台提供的。这具体到不同的浏览器，比如Chrome中是由Devtool的控制台提供，
        Firefox中是由Firebug的控制台提供。
        传进console.log中的参是一个地址，当代码执行完毕后，打开控制台，console.log开始起作用，
        那么它打印出的实际上是已经做完全部处理后的对象。
        因此不管我们的console.log写在哪里，它都是类似最后执行的。
        那么该如何解决这个问题？只能在执行的过程中创建新对象来曲线救国了：
        var a = $("#domo")[0];
        console.log(JSON.parse(JSON.stringify(a)));
        a.name = '2';
        console.log(JSON.parse(JSON.stringify(a)));
        这相当于帮浏览器对要被改变的对象存了个快照。
    */
})
/* $(function () {
    console.log($("li"));
    if ($("li").hasClass("hide")) {
        $("li").removeClass("hide");
    } else {
        $("li").addClass("hide");
    }
})
$(function () {
     $(".box11")。
    if ($(".box11").hasClass("hide")) {
        $(".box11").removeClass("hide");
    } else {
        $(".box11").addClass("hide");
    }
}) 
hasClass()   removeClass()   addClass()     只能对单个对象进行操作，遍历
都是对jquery对象中的一个对象的元素进行操作的，上面的例子中$("li")  与$(".box11") ，
获取的对象都不是单一的元素，它获取到的元素都是html中第一个出现的元素。
对多个元素操作需要要用遍历
*/
/*上面一段代码的简化方法，
⑬toggleClass("hide",布尔值),切换属性，有的变成没有，没有的变成有，
  toggleClass("classname1 classname2"，布尔值)   多个属性同时切换
  布尔值：省略，默认为true
        可以是返回布尔值的逻辑算数表达式
        可以是返回布尔值的函数等等  
    这个方法可以对多个jquery对象进行操作，也就是 $("classname")或者是$("Tag")获取的jquery集合
    不用遍历为单个元素，就可以直接操作，方法是对集合进行操作。
    其实是这个方法封装了一个遍历jquery对象的方法。
 */
$(function () {
    var liarg = $("li");
    //这个是对jquery集合操作的方法
    liarg.toggleClass("hide");
    //
    $(liarg[6]).addClass("bg-red"); //这里的liarg[6]不是选择器，不用引号，这里是jquery与DOM的转化
    //下边的是遍历，因为hasClass()   removeClass()   addClass()     只能对单个对象进行操作
    var liargn = liarg.each(function () {
        if ($(this).hasClass("hide")) {
            $(this).removeClass("hide");
        } else {
            $(this).addClass("hide");
        }
    })
})

/* 
在给html修改样式的时候，有的时候不需要修改很多的样式，我们可以直接对style样式值进行修改。
⑭ css("stylename","value") 单个样式的增加，值可以是函数表达式
    css(
        {name:"value",
         name:"value",
         name:"value"
    });                   多个样式的增加，值可以是函数表达式
    获取样式的值css("name") 获取单个样式值
               css([])     获取多个样式的值
 */
$(function () {
    $("#domo2").css({
        backgroundColor: "blue",
        //"background-color": "blue",
        position: "fixed",
        left: "0px",
        top: "400px"
    });
    console.log($("#domo2").css("top")); //400px  
})
/* 值可以是函数表达式 */
$(function () {
    $("li").each(function (index) {
        if (index % 2 == 0) {
            $(this).css("color", "yellow");
        }
    });
})

/*获取/设置元素的尺寸， 
    
⑮width() ,获取元素的宽度（不包含内外边距），返回值是number不带单位的，默认是px，
    如果元素的尺寸是30em，那么用方法获取到的width(),值为480
⑯height(),获取元素的宽度（不包含内外边距），返回值是number不带单位的，默认是px，
⑰innerWidth() ,获取元素的宽度 （包含内边距 不包含边框  不包含外边距）
⑱innerHeight() ,获取元素的高度（包含内边距 不包含边框  不包含外边距）
⑲outerWidth() ,获取元素的宽度 （包含内边距   包含边框  不包含外边距）
⑳outerHeight() ,获取元素的高度（包含内边距   包含边框  不包含外边距） 
  outerWidth(true) ,获取元素的宽度 （包含内边距   包含边框  包含外边距）
  outerHeight(true) ,获取元素的高度（包含内边距   包含边框  包含外边距）

这些是对对象集合里面的第一个元素进行操作的，要对多个进行操作需要遍历。

*/


/*获取/设置元素的位置，就是之前的position的位置
    这些是对对象集合里面的第一个元素进行操作的，要对多个进行操作需要遍历。 
㉑offset()    返回值left，与top的值
㉒position()  返回的是left值，与top值，相对于最近的一级拥有relative属性的父级元素的位置 
        如果父级元素没有相对定位的，它就相对于整个窗口来定位。
        而且它的值不包含边距。
*/
$(function () {
    console.log($(".box").offset()); //{top: 295, left: 20} 
    //这个函数是用来获取left值与top值的，也就是获取元素的位置的
    console.log($(".box").position()); //{top: 275, left: 0} 
    //position 不含边距
    //为了防止塌陷，可以添加一个属性，overflow:hidden,??????????
})

/*设置元素的 滚动，
    这些是对对象集合里面的第一个元素进行操作的，要对多个进行操作需要遍历。 
㉓scrollLeft(number)   
  scrollLeft()  
㉔scrollTop(number)    
  scrollTop()    
*/
$(function () {
    console.log($("#scrolset").scrollLeft());
    console.log($("#scrolset").scrollTop());
    console.log($("#scrolset").scrollLeft(100));
    console.log($("#scrolset").scrollTop(50));
    //什么鬼效果啊？？？？？没有看出来????????????????????
})



/* 操作二、
        1、html元素选取   2、html元素操作       3、css操作，         4、html事件函数               
        5、js的特效与动画 6、html的DOM遍历与修改 7、AJAX 异步请求方式 8、utilities， 
*/

/* 获取与设置元素内容，
㉕html()          获取元素内容
  html("content") 设置元素内容
㉖text()          获取元素内容
  text("content") 获取元素内容

  区别：html() 只能获取对象中第一个元素的值，
       text()  获取对象中所有元素的值。
        
       html("content") 对象中的所有元素都被改变
       text("content") 对象中的所有元素都被改变

       text会把引号中的所有内容都当做文本，这个可以考虑到一个安全带问题，
       如果用户在标签内输入一段恶意的代码，用html的方法的话，恶意的代码
       或者是一些木马就会入侵系统。
       注意！！所以一般是用text来修改文本比较好。

*/
$(function () {
    console.log($(".item").html()); //item1
    console.log($(".item").text()); //item1item2item3item4item5item6item7
    console.log($(".item ").html(" < i > mi < /i>"));
    //所有的文本变成 mi
    console.log($(".item").text("<i>mi</i>"));
    //所有的文本变成 <i>mi</i>，他会把标签页当做html文本
    //console.log($(".item").html("<script>alert(123)</script>"));
    //这样是很危险的，当用于在<script>alert(123)</script>写入一个木马程序，
    //那么就会攻击我们的系统。
    //所有用户输入的消息我们都要在前端后端都过滤掉，尤其是后端。
})

/*移动插入元素
应用：跟列表中的新闻添加一个  阅读更多的  超链接
㉗ append("content1","content2","content3")   在元素内部尾部插入
    对象1.append(对象2)                       对象2被移动到对象1后面
㉘ prepend("content1","content2","content3") 在元素内部头部插入
㉙ before("content1","content2","content3")   在元素外部 前面 插入,不在被插入的元素所在box内
㉚ after("content1","content2","content3")    在元素外部 后面 插入,不在被插入的元素所在box内

*/
$(function () {
    console.log($(".item1").append('<a href="../img /fe.png ">阅读更多</a>', "您好"));
    //新闻内容阅读更多您好
    console.log($(".item1").prepend(" ok ")); //ok 新闻内容阅读更多您好
    console.log($(".item1").before(" 88 ")); //ok 新闻内容阅读更多您好
    /* 
    88
    ok 新闻内容阅读更多您好 
    */
    $(".item1").append($("h6")); //h6被移到.item1后面，因为这个对象是多个元素集合，就被移动成很多份了
    /*  
     88
     ok 新闻内容阅读更多您好
     标题
     88
     ok 新闻内容阅读更多您好
     标题
     88
     ok 新闻内容阅读更多您好
     标题 */

})

/* 移动插入元素
  给上面的比较就是说，把对象前候操作题反过来。
   对象1.append(对象2)    在对象1后面插入对象2
   对象1.appendTO(对象2)  把对象1超如到对象2中
㉛ appendTo(target)   在元素内部尾部插入---把元素插入到元素的尾部 
㉜ prependTo("content1","content2","content3") 在元素内部头部插入--把元素插入到元素的头部
㉝ insertBefore("content1","content2","content3")   
    在元素外部 前面 插入,不在被插入的元素所在box内---把元素插入到元素的前面
㉞ insetAfter("content1","content2","content3")    
    在元素外部 后面 插入,不在被插入的元素所在box内---把元素插入到元素的后面

    以上两类插入移动的办法的区别，
    当需要在很多歌不同的对象后面插入同一个元素，就用appendTo类方法  方便
    当需要把狠多不同的元素插图到一个元素里，就用append类的方法，    方便
*/



/* 包裹元素
比如说我们在一个元素外面再用一个div元素包裹起来
㉟ warp(""),  如果括号内是html中的元素对象，那么它是实现了复制，与append的移动时不同的    
warp()是对对象的所有元素进行操作。每个对象都会被()货号里面的东西分别包裹。多个
效果<div><a></a></div>  <div><a></a></div>  <div><a></a></div>  
㊱ warpAll(""),
warp()是对对象的所有元素进行操作。每个对象都会被()货号里面的东西包裹在一起。一个
效果
<div>  <a></a> <a></a> <a></a>  </div> 
㊲warpInner(""),把对象页面的文本包裹起来，
    原文：<p>内容</P>   效果  <p><div>内容</div></P>
㊳ unwarp(),取消包裹，用于移除元素的父元素
 */
$(function () {
    //$("#nihao-p").wrap('<div class="div2" style="background:red;width:100px;height:100px"></div>');
    $("#nihao-p").wrap($("#nihao-box"));
    $(".item1").wrap($("<div></div>"));
    $(".item1").wrapAll($("<div></div>"));
    $("#nihao-p").wrapInner($('<div class="box11"></div>'));
    // <p id="nihao-p"><div class="box11">nihao</div></p>
})

/*  删除元素
㊴ remove()  这个方法是删除页面中的html元素，但是它是不会删除这个匹配的jquery对象，
    很简单，我们删除的是网页上的html又不是html文件里面的东西，它依然还是可以获取$()的啊。
    还是可以再获取这个对象的。
    元素被删除之后，原来在它上面添加的事件、附加的数据都会被取消。
    再用appendTo方法把它加回来之后，
    click这种事件就不会存在了，data()获取不到数据了
㊵ detach(),分离，这个删除还可以保留元素的事件，以及数据，重新加回来之后，我们的事件依然可以触发
㊶ empty(),删除元素中的内容，但是元素（标签）本身还是存在的。
*/

/* 复制与替换元素
之前的append会移动元素，warp是包裹元素，可以复制，下面学习一个真正的 复制/克隆 clone()
㊷clone()
    1、对象1.clone().appendTo(对象2)，就是把对象1克隆之后加到对象2上面去，不是移动了
    2、clone(布尔值1，布尔值2)
        布尔值1就是说被复制的元素的最外层元素被克隆与否，布尔值2指的是内层所有的元素被克隆与否
        <div ><p>nihao</p></div>
        clone()==clone(true,true)
        clone(true,false) 只克隆div，不克隆p  
㊸ (target对象1)replaceWith(content对象2)，   把对象1替换成对象2
㊹ (content对象2)replaceAll(target对象1)，    把对象2 替换到对象1
*/

/* appendTO， prependTO， insertBefore， insertAfter，replaceAll 
执行的都是破坏性的方法，
都要使用之前的end()方法，才会返回原来的元素对象*/


/*处理表单元素值
对于多选框，单选框，下拉选择框以及，这些操作使用这个办法是有不同的
㊺ val()  获取值   
    文本框     $('[name="text"]').val()                       数值
    单选框     $('[name="radio"]:checked').val()
    多选框     val只能获取元素中的1个值，选择两个框以上的话就获取不到正确的值了，这里需要map遍历
              $('[name="checkbox"]:checked').map(function () {
                    return $(this).val();                    数值
              }).toArray()                                   变成数组                                 
    下拉框单选 $('[name="select"] option:selected').val()
    下拉框多选 $('[name="multiselect"]').val()                数组,一个数组，算是一个值
 */
$(function () {
    console.log($('[name="text"]').val());
    //获取到文本框中用户输入的值，当然了，需要有后端才会看到值，或者在浏览器的console上面执行才看到值
    //多行文本框也可以这样取值
    console.log($('[name="radio"]:checked').val()); //单选框
    console.log($('[name="checkbox"]:checked').map(function () {
        return $(this).val();
    }).toArray()); //多选框
    console.log($('[name="select"] option:selected').val());
    console.log($('[name="multiselect"]').val());
})
/* 插播学习， 要设置水平线的颜色， 要用背景色来设置， 并且给水平线一个高， color是设置文本的颜色不顶用
 插播学习，用户在用多选，需要按住ctrl键  */


/*  设置值
㊻ val("") 设置值   只对第一个元素设置值   ，让值变成数组放进去，
  文本框：$('[name="text"]').val("")
  单选框：$('[name="radio"]').val([""])
  多选框：$('[name="checkbox"]').val(["","",...])
  下拉框单选：$('[name="select"]').val([""]);
  下拉框单选：$('[name="multiselect"]').val(["","",...]);
*/




/*  总结
 到这里，我们就学习了jquery的三个功能了，
 1、获取html元素， $("")
    tag，id，class，三大基本获取，其他的就通过三大基本获取方法+jquery对象方法去获取简单，灵活。
    还有form表单元素的获取[name=""] ??？
    基本就知道4中类获取就ok，其他的通过方法去获取
 2、对html元素进行操作，
    插入元素，
    修改元素
    移动元素
    复制元素clone
    替换元素
 3、对css样式进行获取修改等等
    修改 获取 元素的特性，属性
    修改获取  元素的样式 语内容
 4、获取设置表单值，这里也是对html元素操作的一部分了     val()

*/