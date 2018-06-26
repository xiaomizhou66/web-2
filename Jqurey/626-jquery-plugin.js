/* jquery   插件机制 */

/*
jquery有两种使用方式，
①在jquery集合对象上调用方法？？？
    需要先选中一个jquery对象，然后调用方法。比如find，Element
②直接调用jquery方法？？？？
    就是用$.  这种形式，
*/

/*
jquery扩展方式，
①扩展jquery对象上的方法：jquery.fn.extend()
②扩展jquery工具方法：   jquery.extend(),     给jquery本身的类添加新的方法
*/






/* 一、选择jquery插件（其实就是js文件）

当我们需要建立一个网站项目的时候，不需要从头开始自己慢慢的编辑，很多功能别人已经做好了，
我们只需要找到自己要的插件，那么我们如何去找自己的插件，（学习我们的拿来主义，时间观念）

官方网站：http://plugins.jquery.com
但是官方网站只提供查询已经不维护， 要子npm上面去找到最新的。
找到github主页，需要的话下载使用即可


不用上面那样，直接进入自己的github主页，然后在昨天的猫哪里搜索，然后左边导航栏选择 语言 js
还可以根据项目的星星排序，在里面找到自己想要的项目，下载使用
还可以直接在搜索引擎上面关键词去查找自己要的项目，百度也可以的。当然还是github好，
看星星，看维护的人员，看维护时间，看创建时间，等等风险要小
*/




/* 二、使用jquery插件
    1、引入插件 
    <script src="../../../vendor/jquery-1.12.4.js"></script>   引入jquery库，
    <script src="../../../vendor/jquery-easing.js"></script>   引入jquery插件的例子，
    <link  rel=                                                引入
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.css"/>
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick-theme.css"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.min.js"></script>
    2、查看并实现实例代码
    3、阅读文档

    找到可用的，适用的插件之后，克隆或者是下载下来。
    根据使用要求去引入文件，html结果如有要求，要按照要求，否则不能实现效果。
*/

/* 三、几个比较实用 jquery插件
    
    1、chosen插件：单选框，多选框，下拉框等等
            bootcdn网站：http://www.bootcdn.cn
    2、pickadate插件：日期/时间选择框  PC，移动端相应式
            github网址：http://github.com/amsul/pickadate.js
    3、magnific-popup：
        点击图片可以放大，缩小的功能
        点击文字弹出视频
        点击文字弹出表单

    总结：
    主要是学习怎么去使用这些插件，修改插件，等等
*/

/* 四、 jquery插件 的协议
    
  开源中经常使用的协议：
  CPL/LGPL/APL/BSD/MIT
  CPL/LGPL：这2个很严格。
    是有传染性的，如果我们用于商业的话还是不要用这样的协议的插件。


    使用插件的时候要把插件的版权信息带上，就是作者。
    MIT这样的就不是很严格，把版权带上就不会违反协议了。
*/



/* 五、如何制作 jquery插件 
    扎实的功底是必须的，js，这种的都是要精练的。
    然后就是写出通用的插件，遵循一些准则。
    ①插件的命名：要容易记，符合功能描述的名称
                 当然也不能与别人的重名（要贡献给功能社区的话）
                 jquery-xxxx，形式来命名
                 可以包含公司名称
                 可以包含版本号
                如： jquery-xx公司-1.1.1.js
    ②注意$符号
        可能别的库使用$,会发生冲突，我们自己做库的时候级不要直接用$,
        而是用jqurey，然后再插件里面把jqurey转化为$便捷使用就好
        如：
        (function(&)){
            .....
        })(jquery);    //这样使用jqurey转化为$（立即继成函数）
    ③处理复杂的参数，
        不要在函数括号中写入复杂的参数，这样使用者看起来很麻烦，
        functio name(arg1,arg2,arg3,arg4,arg5,arg6...){...}
        要用配置项的方法：通过对象传递配置参数
        <script type="text/javascript">
            $(document).ready(function(){
            $('.your-class').slick({
                setting-name: setting-value//配置项：设置值
            });
        });
        </script>   
        就是先写一些默认项，然后用户配置进来的把默认项覆盖掉就好了，需要修改的
        就配置，不需要修改的就使用我们设置的默认值就ok】
*/