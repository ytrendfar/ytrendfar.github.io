//确定一下最大值和最小值还有范围方便后面确定范围时用
var max = 100;
var min = 0;
var range;
//c，累计值
var c = 0;
//生成随机数x
var x = Math.floor(Math.random() * 100);
//不让x得0和100
if(x==0){
    x += 1; 
    console.log(x);
}else if(x==100){
    x -= 1;
    console.log(x);
}else{
    console.log(x);
}
//取消回车功能
// function disableTextSubmit(e){
//     if (e.keyCode == 13) {
//         return false;
//改变回车功能
var focus = document.getElementById("in");
    //获取输入的值并纳入条件，防止输入超范围
focus.onkeypress = function(event){
    if(event.which === 13){ 
        if(+focus.value>+min && +focus.value<+max){
            document.getElementById("button").onclick();
        }else{
            alert("请输入范围内的值!");
            document.getElementById("in").value ="";
        }
    }
}
//按下按钮后
function upload(){
    var vlu = document.getElementById("in").value;
    if(+vlu>+min && +vlu<+max){
         //记录你输入的值
    var a = document.getElementById("in").value;
    console.log(a);
    //然后删除你在输入框中输入的值
    document.getElementById("in").value ="";
        //修改input的读写性为只读
        // var In = document.getElementById("in");
        // In.setAttribute("readOnly",true);
    //试图在这一切结束后隐藏div元素
    document.getElementById("div").style.display="none";
    //与此同时，隐藏的元素将显形。具体是哪个元素显形，那就得看判断条件了
    if(a > x){
        //取消显示猜小了和猜大了还有范围
        var big = document.getElementById("big");
        big.style.display = "none";
        var small = document.getElementById("small");
        small.style.display = "none";
        var range = document.getElementById("range");
        range.style.display = "none";
        //重新确定最大值
        max = a;
        //显示你猜的怎么样    
        var big = document.getElementById("big");
        big.style.display = "block";
        //确定范围
        range_value ="当前范围:"+ min +"~"+ max;
        //显示范围
        var range = document.getElementById("range");
        range.style.display = "block";
        document.getElementById("range").innerHTML = range_value;
        //重新显示输入框
        document.getElementById("div").style.display="inline";
        //重新限制输入框输入范围
        var range_write_max = document.getElementById("in");
        range_write_max.setAttribute("max",max);
        //累计数+1
        c = c+1;
        //弹出弹窗
        alert("猜大了!");
    }else if(a < x){
        //取消显示
        var big = document.getElementById("big");
        big.style.display = "none";
        var small = document.getElementById("small");
        small.style.display = "none";
        var range = document.getElementById("range");
        range.style.display = "none";
        //重新确定最小值
        min = a;    
        //显示你猜的怎么样
        var small = document.getElementById("small");
        small.style.display = "block";
        //确定范围
        range_value ="当前范围:"+ min +"~"+ max;
        //显示范围
        var range = document.getElementById("range");
        range.style.display = "block";
        document.getElementById("range").innerHTML = range_value;
        //重新显示输入框
        document.getElementById("div").style.display="inline";
        //重新限制输入框输入范围
        var range_write_min = document.getElementById("in");
        range_write_min.setAttribute("min",min);
        //累计数+1
        c = c+1;
        //弹出弹窗
        alert("猜小了!");
    }else{
        //弹出弹窗
        alert("猜对了!恭喜");
        //取消显示
        var big = document.getElementById("big");
        big.remove();
        var small = document.getElementById("small");
        small.remove();
        var range = document.getElementById("range");
        range.remove();
        div.remove();
        //猜对了，恭喜
        var right = document.getElementById("right");
        right.removeAttribute("hidden");
        //汇总一下你有多der
        var b = c+1;
        var last = "你总共猜了"+[b]+"次!<br>"
        var apprize;
        if(b<2){
            apprize = "超越了全球100%的狗der!<br>你一定偷看了控制台!"
        }else if(b<=3){
            apprize = "超越了全球"+[100-(b/20)*100]+"%的狗der!<br>你就是欧洲狗der!"
        }else if(b<=6){
            apprize = "超越了全球"+[100-(b/20)*100]+"%的狗der!<br>狗der运气不错!"
        }else if(b<=9){
            apprize = "超越了全球"+[100-(b/20)*100]+"%的狗der!<br>der地十分一般!"
        } else if(b<=12){
            apprize = "超越了全球"+[100-(b/20)*100]+"%的狗der!<br>你太der了!"
        }else if(b<=15){
            apprize = "超越了全球1%的狗der!<br>你简直der到了极致!"
        }
        //显示你有多der
        var out = last + apprize;
        document.getElementById("out").innerHTML = out;
        var h = document.getElementById("playAgain");
        h.style.display="inline-block";
    }
    }else{
        alert("请输入范围内的值!");
        document.getElementById("in").value ="";
    }
   
}
function hid(){
    var hid = document.getElementById("about");
    hid.style.display="none";
    var title = document.getElementById("title");
    title.style.display="block";
    var type = document.getElementById("type");
    type.style.display="block";
    type.style.textAlign="center";
    var ranges = document.getElementById("range");
    ranges.style.display="block";
    var ins = document.getElementById("in");
    ins.style.display="block";
    var button = document.getElementById("button");
    button.style.display="block";
}
