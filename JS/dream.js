//点击 明白了
function hidAbout(){
    document.getElementById("about").setAttribute("style","animation: moveOut 1.2s forwards");
    document.getElementById("choose").setAttribute("style","bottom: 50%");
}
//先创建要使用的全局变量
{
    var pressD = false,press3 = false;  //按键
    var round = new Object;  //回合数
    round.num = +1;
    roundAdd = true;
    var prepareD3 = true;   //是否可以按
    var prepareEnter = true;
    var pressLeft = true;
    var pressRight = true;
    var roundStop = false;
}
//选择AI
function leftChoose(){
    //取消显示选择
    document.getElementById("choose").style.display="none";
}
//选择 另一位玩家
function rightChoose(){
    //取消显示选择
    document.getElementById("choose").setAttribute("style","bottom: -50%");
    //显示按键提示
    document.getElementById("keyboardInputLeft").setAttribute("style","left: 10%;bottom:50%");
    document.getElementById("keyboardInputRight").setAttribute("style","right: 10%;bottom:50%");
    //双方确定完毕
    document.onkeydown = function(event){
        let e = event || windows.event;
        if(prepareD3){
            switch(e.key){
                case 'd':
                    document.getElementById("keyboardInputLeft").setAttribute("style","left: -50%;bottom:50%");
                    document.getElementById("start").setAttribute("style","top: 50%");
                    pressD = true;
                    break;
                case '3':
                    document.getElementById("keyboardInputRight").setAttribute("style","right: -50%;bottom:50%");
                    document.getElementById("start").setAttribute("style","top: 50%");
                    press3 = true;
                    break;
            }
        }
        //D和3都按过就可以按Enter继续
        if((press3&&pressD&&e.which===13)&&prepareEnter){
            document.getElementById("start").style.display="none";
            prepareD3 = false;
            prepareEnter = false;
            game(); 
        }
    } 
}
//创建人物object
{
    var player1 = new Object;
    player1.gas = 0;
    player1.life = true;
    player1.do = 'D';
    var player2 = new Object;
    player2.gas = 0;
    player2.life = true;
    player2.do = '3';
}
//创建defend
{
    var defend1 = new Object;
    defend1._1 = false;
    defend1._2 = false;
    var defend2 = new Object;
    defend2._1 = false;
    defend2._2 = false;
    var defend3 = new Object;
    defend3._1 = false;
    defend3._2 = false;
}
//创建时间优化
{
    var timeReady = new Object;
    timeReady._1 = false;
    timeReady._2 = false;    
}
//开始
function game(){
    var newH1 = "Round"+" "+round.num;
    document.getElementById("round").innerHTML = newH1;
    //开始计时
    timeGoOn();
}
//计时中用到的变量
{
    var x = 3000;
    var seconds = parseInt(x);
    var s = parseInt(seconds /1000);
    var ss = parseInt(seconds / 10 %100);
}
//计时函数
function timeGoOn(){
    seconds = parseInt(x);
    s = parseInt(seconds /1000);
    ss = parseInt(seconds / 10 %100);
    setTimeout(timeGoOn,10);
    setTimeout(x-=10,10);
    var newH3 = "本回合剩余"+"  "+s+"."+ss+"  "+"秒";
    document.getElementById("time").innerHTML = newH3;
    //检测你回合中按了哪个键
    document.onkeydown = function(event){
        let e = event || windows.event;
            if(pressLeft){
                switch(e.key){
                    case 'q':player1.do="Q";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = true;
                            defend2._1 = false;
                            defend3._1 = false;
                            timeReady._1 = true;
                            break;
                    case 'w':player1.do="W";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = true;
                            defend2._1 = true;
                            defend3._1 = false;
                            timeReady._1 = true;
                            break;
                    case 'e':player1.do="E";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = true;
                            defend2._1 = true;
                            defend3._1 = true;
                            timeReady._1 = true;
                            break;
                    case 'a':player1.do="A";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = true;
                            defend2._1 = false;
                            defend3._1 = false;
                            timeReady._1 = true;
                            break;
                    case 's':player1.do="S";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = false;
                            defend2._1 = true;
                            defend3._1 = false;
                            timeReady._1 = true;
                            break;
                    case 'd':player1.do="D";
                            broken = false;
                            pressLeft = false;
                            console.log(player1.do);
                            defend1._1 = false;
                            defend2._1 = false;
                            defend3._1 = false;
                            timeReady._1 = true;
                            break;
                }                
            }if(pressRight){
                switch(e.key){
                    case '4':player2.do="4";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = true;
                            defend2._2 = false;
                            defend3._2 = false;
                            timeReady._2 = true;
                            break;
                    case '5':player2.do="5";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = true;
                            defend2._2 = true;
                            defend3._2 = false;
                            timeReady._2 = true;
                            break;
                    case '6':player2.do="6";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = true;
                            defend2._2 = true;
                            defend3._2 = true;
                            timeReady._2 = true;
                            break;
                    case '1':player2.do="1";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = true;
                            defend2._2 = false;
                            defend3._2 = false;
                            timeReady._2 = true;
                            break;
                    case '2':player2.do="2";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = false;
                            defend2._2 = true;
                            defend3._2 = false;
                            timeReady._2 = true;
                            break;
                    case '3':player2.do="3";
                            broken = false;
                            pressRight = false;
                            console.log(player2.do);
                            defend1._2 = false;
                            defend2._2 = false;
                            defend3._2 = false;
                            timeReady._2 = true;
                            break;
                }
            }
    }
    if(timeReady._1 && timeReady._2){
        x = 0;
    }
    if(x<=0){
        document.getElementById("time").innerHTML = "本回合剩余 0.0 秒<br/>按Enter继续下一回合";
        judge();
        roundStop = true;
        stop();
    }
}
//停止后函数
function stop(){
    //停止计时后按Enter进入下一回合
    document.onkeydown = function(event){
        let e = event || windows.event;
        if(roundStop&&(e.which===13)){
            document.getElementById("time").innerHTML = "本回合剩余"+"  "+s+"."+ss+"  "+"秒";
            //更新参数至回合开始时
            roundStop = false;
            x = 3000;
            roundAdd = true;
            timeReady._1 = false;
            timeReady._2 = false;
            if(roundAdd){
                round.num+=1;
                roundAdd = false;
            }
            var newH1 = "Round"+" "+round.num;
            document.getElementById("round").innerHTML = newH1;
            //更新显示
            document.getElementById("q").setAttribute("style","left: -1500px");
            document.getElementById("w").setAttribute("style","left: -1500px");
            document.getElementById("e").setAttribute("style","left: -1500px");
            document.getElementById("a").setAttribute("style","left: -1500px");
            document.getElementById("s").setAttribute("style","left: -1500px");
            document.getElementById("d").setAttribute("style","left: -1500px");

            document.getElementById("_4").setAttribute("style","right: -1500px");
            document.getElementById("_5").setAttribute("style","right: -1500px");
            document.getElementById("_6").setAttribute("style","right: -1500px");
            document.getElementById("_1").setAttribute("style","right: -1500px");
            document.getElementById("_2").setAttribute("style","right: -1500px");
            document.getElementById("_3").setAttribute("style","right: -1500px");

            document.getElementById("draw").setAttribute("style","bottom: -40%");
            //同时允许进行judge中的判断
            can.Q = true;
            can.W = true;
            can.E = true;
            can.A = true;
            can.S = true;
            can.D = true;
            can._4 = true;
            can._5 = true;
            can._6 = true;
            can._1 = true;
            can._2 = true;
            can._3 = true;
            //同时允许进行timeGoOn中的按键检测
            pressLeft = true;
            pressRight = true;
        }
    }
}
//创造全局变量can
{
    var can = new Object;
    can.Q = true;
    can.W = true;
    can.E = true;
    can.A = true;
    can.S = true;
    can.D = true;
    can._4 = true;
    can._5 = true;
    can._6 = true;
    can._1 = true;
    can._2 = true;
    can._3 = true;
    can.die = true;
}

//判断按键产生效果函数
function judge(){
    player1Do();
    player2Do();
    //判断结束了未
    if (player1.life==false && can.die){
        console.log("玩家一死亡!");
        document.getElementById("dead1").setAttribute("style","bottom: 20%");
        document.getElementById("draw").setAttribute("style","bottom: -50%");
        roundStop = false;
        can.die = false;
    }else if(player2.life==false && can.die){    
        console.log("玩家二死亡!");
        document.getElementById("dead2").setAttribute("style","bottom: 20%");
        document.getElementById("draw").setAttribute("style","bottom: -50%");
        roundStop = false;
        can.die = false;
    }
}
function player1Do(){
//玩家一操作
    //按A
    if(player1.do == 'A'&& can.A){
        document.getElementById("a").setAttribute("style","left: 1500px");
    }
    //按S
    if(player1.do == 'S'&& can.S){
        player1.gas -= 1;
        document.getElementById("s").setAttribute("style","left: 1500px");
        can.S = false;
    }
    //按D
    if(player1.do=='D'&&can.D){
        player1.gas += 1;
        console.log("玩家一的气现在有: "+player1.gas+" 个");
        document.getElementById("d").setAttribute("style","left: 1500px");
        can.D = false;
    }
    
    //按Q
    if(player1.do=='Q'&& can.Q){
        if(player1.gas>0){
            player1.gas -= 1;
            console.log("玩家一发起了攻击一!");
            document.getElementById("q").setAttribute("style","left: 1500px");
            if(defend1._2){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }else{
                player2.life = false;
            }
        }else{
            console.log("玩家一没气还试图发起攻击一!已自动转为集气");
            document.getElementById("d").setAttribute("style","left: 1500px");
            player1.gas += 1;
            console.log("玩家一的气现在有: "+player1.gas+" 个");
        }
        can.Q = false;
    }
    //按W
    if(player1.do == 'W'&& can.W){
        if(player1.gas>1){
            player1.gas -= 2;
            console.log("玩家一发起了攻击二!");
            document.getElementById("w").setAttribute("style","left: 1500px");
            if(defend2._2){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }else{
                player2.life = false;   
            }
        }else{
            console.log("玩家一没有气还试图发起攻击二!已自动转为集气");
            document.getElementById("d").setAttribute("style","left: 1500px");
            player1.gas += 1;
            console.log("玩家一的气现在有: "+player1.gas+" 个");
        }
        can.W = false;
    }
    //按E
    if(player1.do == 'E'&& can.E){
        if(player1.gas>2){
            player1.gas -= 3;
            console.log("玩家一发起了攻击三!");
            document.getElementById("e").setAttribute("style","left: 1500px");
            if(defend3._2){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }
            else {
                player2.life = false;
            }
        }else{
            console.log("玩家一没气还试图发起攻击三!已自动转为集气");
            document.getElementById("d").setAttribute("style","left: 1500px");
            player1.gas += 1;
            console.log("玩家一的气现在有: "+player1.gas+" 个");
        }
        can.E = false;
    }
}   
//! 目前问题:没问题(可能)
//TODO 显示优化---在界面上显示对战信息
//!
function player2Do(){
//玩家二操作
    //按1
    if(player2.do =='1'&&can._1){
        document.getElementById("_1").setAttribute("style","right: 1500px");
    }
    //按2
    if(player2.do =='2'&&can._2){
        document.getElementById("_2").setAttribute("style","right: 1500px");
        player2.gas -= 1;
        can._2 = false;
    }
    //按3
    if(player2.do=='3'&& can._3){
        player2.gas += 1;
        console.log("玩家二的气现在有: "+player2.gas+" 个");
        document.getElementById("_3").setAttribute("style","right: 1500px");
        can._3 = false;
    }
    //按4
    if(player2.do=='4'&& can._4){
        if(player2.gas>0){
            player2.gas -= 1;
            console.log("玩家二发起了攻击一!");
            document.getElementById("_4").setAttribute("style","right: 1500px");
            if(defend1._1){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }else{
                player1.life = false;
            }
        }else{
            console.log("玩家二没气还试图发起攻击一!已自动转为集气");
            document.getElementById("_3").setAttribute("style","right: 1500px");
            player2.gas += 1;
            console.log("玩家二的气现在有: "+player2.gas+" 个");
        }
        can._4 = false;
    }
    //按5
    if(player2.do == '5'&& can._5){
        if(player2.gas>1){
            player2.gas -= 2;
            console.log("玩家二发起了攻击二!");
            document.getElementById("_5").setAttribute("style","right: 1500px");
            if(defend2._1){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }else{
                player1.life = false;   
            }
        }else{
            console.log("玩家二没有气还试图发起攻击二!已自动转为集气");
            document.getElementById("_3").setAttribute("style","right: 1500px");
            player2.gas += 1;
            console.log("玩家二的气现在有: "+player2.gas+" 个");
        }
        can._5 = false;
    }
    //按6
    if(player2.do == '6'&& can._6){
        if(player2.gas>2){
            player2.gas -= 3;
            console.log("玩家二发起了攻击三!");
            document.getElementById("_6").setAttribute("style","right: 1500px");
            if(defend3._1){
                console.log("攻击被抵消!");
                document.getElementById("draw").setAttribute("style","bottom: 20%");
            }
            else {
                player1.life = false;
            }
        }else{
            console.log("玩家二没有气还试图发起攻击三!已自动转为集气");
            document.getElementById("_3").setAttribute("style","right: 1500px");
            player2.gas += 1;
            console.log("玩家二的气现在有: "+player2.gas+" 个");
        }
        can._6 = false;
    }
}
