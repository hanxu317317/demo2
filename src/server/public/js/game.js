
// 初始化首页
var index = 0;
var index_title_interval;
function initIndex() {
    $("#index").removeClass("hide");
    // var word = '泡椒凤爪是一项精深的食材工艺, 让我们去和"友哥"一起学习精制吧!';
    // $("#index .title").html('');
    // index = 0;
    function showSelecRoleTitle() {
        setTimeout(function() {
            $("#index .select_sex").removeClass("hide");
        }, 100);
    }

    function showTwoRole() {
        setTimeout(function() {
            $(".role").removeClass("hide")
        }, 100);
    }
    showSelecRoleTitle();
    showTwoRole();
    // function oneByoneWord(){
    //     $("#index .title").html(word.substring(0, index++));
    //     if (index > word.length) {
    //         clearInterval(index_title_interval);
    //         // 出现选择人物角色的文字
    //         showSelecRoleTitle();
    //         showTwoRole();
    //     }
    // }
    // index_title_interval = setInterval(oneByoneWord, 100);
}

function initChat() {
    $("#intro").removeClass("hide");
    $(".chushi-wrap").removeClass("hide");
    $(".role-wrap").removeClass("hide");
    
}
function removeIndex() {
    $(".role_girl").addClass("fadeOutLeft");
    $(".role_boy").addClass("fadeOutRight");
    $(".index-head").addClass("fadeOutUp");
    $("#start-game").removeClass("hide fadeInUp").addClass("fadeOutDown");
    setTimeout(function() {
        $("#index").addClass("hide");
    }, 600);
    setTimeout(function() {
       chatGuild();
    }, 2000)
}

function removeChat() {
    $(".chushi-wrap").removeClass("fadeInLeft").addClass("fadeOutLeft");
    $("#chatRight").removeClass('fadeIn').addClass("fadeOut");
    $(".role-wrap").removeClass('fadeInRight').addClass("fadeOutRight");
    $("#start-question").removeClass("hide fadeInUp").addClass("fadeOutDown");
    setTimeout(function() {
    $("#intro").addClass("hide");
    }, 500)
}


var chatIndex = 0;
var wordIndex = 0;
var wordSpeed = 100; // 说话的速度 
var times = 2000; // 每句话的间隔

// var wordSpeed = 0; // 说话的速度 
// var times = 0; // 每句话的间隔
var wordInterval = null;
// 奇数是厨师.偶数角色
var chatLog = [
    '欢迎来到有友小厨房。泡凤爪是起源于川渝地区的特色美食，今天我们就来体验一下如何制作这道美味的家常菜!',
    '哇！好期待!',
    '首先，我们要挑选大个凤爪，洗净，从中间剁开，放入沸水锅中煮10-15分钟，随后捞出、冷却。',
    '好的，然后呢？',
    '接下来，将准备好的蒜和小米辣剁碎，倒入盛满开水的宽口容器中，冷却。',
    '明白了，这些是调味用的吧？',
    '对。下一步呢，是将老坛泡菜水与冷开水充分混合，然后加入花椒、胡椒粉、小米辣及味精少许。',
    '原来做一坛泡凤爪要这么多步骤啊！ ',
    '别急，还有最后一步。现在，我们只要将之前煮好的凤爪倒入冷却后的泡菜水中，浸泡24小时就完成了。',
    '谢谢坛小厨！听了您的讲解，我的口水都快掉下来了。我要亲手试做一下！'
];

function chushiChat() {
    $("#chatLeft").removeClass("hide");
    $("#chatRight").addClass("hide");
    wordIndex = 0;
    var words = chatLog[chatIndex];

    function oneByOne(){
        $("#chatLeft").html(words.substring(0, wordIndex++));
        if (wordIndex > words.length) {
            clearInterval(wordInterval);
            // 出现选择人物角色的文字
            chatIndex++;
            if (chatIndex < chatLog.length) {
                setTimeout(function() {
                    $("#chatLeft").html('');
                    roleChat();
                }, times)
            }
        }
    }
    wordInterval = setInterval(oneByOne, wordSpeed);

    // chushiChat(index + 1);
}
function roleChat() {
    $("#chatLeft").addClass("hide");
    $("#chatRight").removeClass("hide");
    wordIndex = 0;
    var words = chatLog[chatIndex];

    function oneByOne(){
        console.log("wordIndex", wordIndex);
        $("#chatRight").html(words.substring(0, 1+wordIndex++));
        if (wordIndex >= words.length) {
            clearInterval(wordInterval);
            // 出现选择人物角色的文字
            chatIndex++;
            if (chatIndex < chatLog.length) {
                setTimeout(function() {
                    chushiChat();
                    $("#chatRight").html('')
                }, times);
            } else {
                $("#start-question").removeClass("hide");
            }
        }
    }
    wordInterval = setInterval(oneByOne, wordSpeed);
}
function chatGuild() {
    chushiChat(chatIndex);
}




var questions = [
    {   
        title: '以下哪一种辣椒最适合制作泡凤爪？（单选）',
        grade: 25,
        selects: [
            {
                title: '小米辣',
                src: 'xiaomijiao'
            },
            {
                title: '牛角椒',
                src: 'niujiaojiao'
            },
            {
                title: '灯笼椒',
                src: 'denglongjiao'
            },
            {
                title: '二椒条',
                src: 'erjiaotiao'
            },
            {
                title: '朝天椒',
                src: 'chaotianjiao'
            }
        ],
        right: ['小米辣'],
    }, {
        title: '制作泡凤爪，需要以下那些佐料呢？（多选）',
        grade: 3,
        selects: [
            {
                title: '葱',
                src: 'cong'
            },
            {
                title: '姜',
                src: 'jiang'
            },
            {
                title: '蒜',
                src: 'suan'
            },
            {
                title: '洋葱',
                src: 'yangcong'
            },
            {
                title: '番茄酱',
                src: 'fanqiejiang'
            },
            {
                title: '料酒',
                src: 'liaojiu'
            },
            {
                title: '白砂糖',
                src: 'bashatang'
            },
            {
                title: '盐',
                src: 'yan'
            },
            {
                title: '酱油',
                src: 'liaojiu'
            },
            {
                title: '花椒',
                src: 'huajiao'
            },
            {
                title: '胡椒',
                src: 'hujiao'
            },
            {
                title: '甘草',
                src: 'gancao'
            },
            {
                title: '八角',
                src: 'bajiao'
            },
            {
                title: '三奈',
                src: 'sannai'
            },
            {
                title: '味精',
                src: 'weijing'
            },
            {
                title: '小茴香',
                src: 'xiaohuixiang'
            }
        ],
        right: ['姜', '蒜', '料酒', '白砂糖', '盐', '花椒','胡椒', '味精'],
    }, {
        title: '进入泡制环节后，以下哪些液体不能用来调制泡凤爪的汤汁？（多选）',
        grade: 13,
        selects: [
            {
                title: '沸水',
                src: 'feishui'
            },
            {
                title: '凉开水',
                src: 'shui'
            },
            {
                title: '泡菜水',
                src: 'paocaishui'
            },
            {
                title: '淘米水',
                src: 'taomishui'
            },
        ],
        right: ['沸水', '淘米水']
    },
    {
        title: '为了保持泡凤爪的最佳味道，应当浸泡多长时间后开始食用？（单选）',
        grade: 25,
        selects: [
            {
                title: '30分钟',
                src: 'time0'
            },
            {
                title: '24小时',
                src: 'time1'
            },
            {
                title: '3天',
                src: 'time2'
            },
            {
                title: '15天',
                src: 'time3'
            },
        ],
        right: ['24小时']
    }
]

var questionIndex = 0;  // 题目的编号
var questionsTitleInterval = null;
var questionTitleIndex = null; // 题目的index
var grade = 0;
// 按几个几个的分割数组=
// 
function spliteNumbers(array, number) {
    if (!array instanceof Array) {
        return [];
    }
    var result = [];
    for (var i = 0, len = array.length; i < len; i += number) {
        result.push(array.slice(i, i+number));
    }

    return result;
}
function fullScreen() {
    alert("fullScreen");
                    // var fullScreenButton = $("#fullScreen");
                    //     fullScreenButton.hide();
                    var docElm = document.documentElement;
                    docElm.webkitRequestFullScreen();
                    if (docElm.requestFullscreen) {  
                        docElm.requestFullscreen();
                    } else if (docElm.mozRequestFullScreen) {  
                        docElm.mozRequestFullScreen();
                    } else if (docElm.webkitRequestFullScreen) {  
                        docElm.webkitRequestFullScreen();
                    } else if (docElm.msRequestFullscreen) {
                        docElm.msRequestFullscreen();
                    }
                }

function renderDifferentTempla(lists) {

    var length = lists.length;
    var top = 0;
    var result = "";
    if (length === 5) {
        top = 150;
        var group = [
            [lists[0], lists[1]],
            [lists[2]],
            [lists[3], lists[4]]
        ];
        for (var i = 0; i< group.length; i++) {
            result += '<div class="flex-column flex-between">';
            for (var j = 0; j < group[i].length; j++) {
                result += '<div class="flex-item-4 list-item">';
                result += group[i][j];
                result += "</div>";
            }
            result+= "</div>";
            
        }
    }

    if (length === 16) {
        top = 0;
        var group = spliteNumbers(lists, 4);
        for (var i = 0; i< group.length; i++) {
            result += '<div class="flex-column flex-between">';
            for (var j = 0; j < group[i].length; j++) {
                result += '<div class="flex-item-4 list-item">';
                result += group[i][j];
                result += "</div>";
            }
            result+= "</div>";
            
        }
    }
    if (length === 4) {
        top = 230;
        var group = spliteNumbers(lists, 2);
        for (var i = 0; i< group.length; i++) {
            result += '<div class="flex-column flex-between">';
            for (var j = 0; j < group[i].length; j++) {
                result += '<div class="flex-item-4 list-item">';
                result += group[i][j];
                result += "</div>";
            }
            result+= "</div>";
            
        }
    }
    var finalResult = '<div style="margin-top:'+top+'px">' + result + '</div>';


    $("#questions_area").html(finalResult);
}

function renderQuestion() {

    var list = questions[questionIndex];
    var words = list.title;
    function oneByOne(){
        $(".question-title").html(words);
        renderList(list.selects);
    }
    function renderList(lists) {
        console.log("list", lists)
    
        var result = [];
        var listLength = lists.length
        for (var i = 0; i< listLength; i++) {
                var template = '<div class="list-wrap">' +
                        '<img src="/public/img/game/ans/'+ lists[i].src +'.png"></img>'+
                        '<p>'+lists[i].title+'</p>' +
                    '</div>' +
                    '<div class="check"></div>';

            result.push(template);
        }
        renderDifferentTempla(result);
    }
    questionsTitleInterval = oneByOne();
}

function initQuestion() {
    $("#intro .chushi-wrap").removeClass("hide")
    // $("#intro .role-wrap").removeClass("hide")
    $("#question").removeClass("hide");
    $("#confirm-answer").removeClass("hide");
    renderQuestion();
}

function initOver() {
    var sex = 'boy';
    var name = '有友哥';
    var face = 'cry';
    var text = '';
    var redGrade = '<span style="color: red">' + grade + "</span>";
    if (role === 0) {
        sex = 'girl';
        name = '有友妹';
    }

    if (grade == 100) {
        face = 'laugh';
        text = '恭喜你！全部答对了！' + redGrade + '分'
    } else if (grade == 75) {
        face = 'laugh';
        text = '不错呦！得到了' + redGrade + '分！加油！'
    } else  {
        text = '您的得分是：'+ redGrade +' 分，还要继续努力呦！'
    }
    $(".over-chat").html(text);
    $(".over-role").attr("src", '/public/img/game/' + sex + '_' + face + '.png');
    setTimeout(function() {
        $("#over").removeClass("hide");
    }, 300)

}