// 记录当前步数的变量  
var currentStep = 1;  
// 存储音频的数组  
var myMedia = [];  
// 音频来源地址数组  
var music = ['./assets/audios/1.mp3',  
    './assets/audios/2.mp3',  
    './assets/audios/3.mp3',  
    './assets/audios/4.mp3',  
    './assets/audios/5.mp3',  
    './assets/audios/6.mp3',  
    './assets/audios/7.mp3',  
    './assets/audios/8.mp3',  
    './assets/audios/9.mp3',  
    './assets/audios/10.mp3',  
    './assets/audios/11.mp3'  
];  
//对话框内容文本  
var text = [ 
    '欢迎来到铜钿来哉，从此刻起，财富人生，由你自己把握。',  
    '在以后的日子里，我将始终伴随您左右。',  
    '不要紧张，请先放松心态，跟我一起来了解一下这个世界。',  
    '您的个人信息显示在左上角，以后可以点选头像的位置，进入个人信息页面更改、查看您的信息。',//4  
    '而在右上角，则标注着您的战绩和金钱，而我们的目的也正是不断的使这两个数值变高，我坚信您在日后会成为一方巨富名震八方。',  
    '在右方，是三个非常非常重要的按钮，点选“战绩排行”可以直观的查看您的成就，您的财富和排名可以在此处炫耀向世界各处。',//6  
    '模拟交易”按钮也正是整个游戏的核心，我们在这里进行贵金属交易，以您的才智，不消数日一定就能赚取到巨额的财富。',  
    '如果您对交易规则还不熟悉的话，选择“名师讲解”补充一下交易知识是再好不过的选择了。',//8  
    '左下角还有一些辅助性质的小按钮~坚持每天签到，也能积累起不错的资本。而在遭遇窘境的时候，您则可以玩一下小游戏放松身心，说不定还会有意外收获~',  
    '人际交往自然也是必不可少的部分，在左侧的好友侧边栏可以查看、添加您的好友，尽快建立起您的人际圈吧~！',//10  
    '好~！多说无益，我们现在就来体验一下交易流程好了，看着我的眼睛，我知道，您可以的……这就打开模拟交易开始吧！'  
];

// 箭头的位置属性和图片地址  
var arrow = [  
    { 'x': 900, 'y': 0, 'img': '' }, // 1  
    { 'x': 900, 'y': 150, 'img': '' }, // 2  
    { 'x': 900, 'y': 300, 'img': '' }, // 3  
    { 'x': 41, 'y': 0, 'img': 'assets/images/arrow_up.png' }, // 4  
    { 'x': 960, 'y': -30, 'img': 'assets/images/arrow_up.png' }, // 5  
    { 'x': 860, 'y': 82, 'img': 'assets/images/arrow_right.png' }, // 6  
    { 'x': 860, 'y': 230, 'img': 'assets/images/arrow_right.png' }, // 7  
    { 'x': 860, 'y': 420, 'img': 'assets/images/arrow_right.png' }, // 8  
    { 'x': 250, 'y': 300, 'img': 'assets/images/arrow_down.png' }, // 9  
    { 'x': 50, 'y': 300, 'img': 'assets/images/arrow_left.png' }, // 10  
    { 'x': 860, 'y': 230, 'img': 'assets/images/arrow_right.png' } // 11  
]  
  
//播放和停止音乐  
function playMuisc(Media) {  
    Media.play();  
}  
function pauseMuisc(Media) {  
    Media.pause();  
}  
//初始化向导，加载音频  
function initGuide() {  
    for (var i = 0; i < 11; i++)  
        myMedia.push(new Audio(music[i]));  
    $("#bt_guide_next").css("cursor","pointer");  
}  
//进行某一步的函数  
function goToStep(currentStep) {  
    if (currentStep > 10) return false;  
    if ((currentStep - 1) >= 0)  
        pauseMuisc(myMedia[currentStep - 1]);  
    playMuisc(myMedia[currentStep]);  
    showDialog(text[currentStep]);  
    showArrow(arrow[currentStep]);  
    return true;  
}  
//显示对话框  
function showDialog(text) {  
    $("#lb_guide_text").html(text);  
}  
//显示箭头  
function showArrow(arrow) {  
    if(arrow.img!="")  
            $("#div_guide_arrow").html("<img src='" + arrow.img + "'></img>");  
    else  $("#div_guide_arrow").html("");  
    $("#div_guide_arrow").css("left", arrow.x + "px");  
    $("#div_guide_arrow").css("top", arrow.y + "px");  
}  
//引导主函数  
function guide(){  
    $("#div_guide_dialog").hide();  
    if(GetQueryString("guide")=="true"){  
         $("#div_guide_dialog").show(500);  
         setTimeout(goToStep(0),500);  
     $("#bt_guide_next").click(function () {  
        if (currentStep >= 11) {  
        $("#div_guide_dialog").hide(500);  
        $("#div_guide_arrow").hide(100);  
        return false;  
    }  
        goToStep(currentStep++);  
    });  
    }  
}  