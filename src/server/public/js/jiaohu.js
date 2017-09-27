var role = -1;
var answerOver = false;
function isMulti() {
  var type = questions[questionIndex].right;
  // console.log("type", questions[questionIndex])
  if (type.length > 1) {
    return true;
  } else {
    return false;
  }
}
function testResult () {
  var list = $(".list-item");
  for (var i = 0 ;i < list.length; i++) {
    var rightList = questions[questionIndex].right;
    var isSelected = list.eq(i).hasClass("select");
    var checkTarget = list.eq(i).find(".check");
    var pText = list.eq(i).find('p').html();

    if (isSelected && rightList.indexOf(pText) === -1) {
      checkTarget.addClass("error");
      list.eq(i).css("background" ,'red');
    } else if (isSelected && rightList.indexOf(pText) !== -1) {
      checkTarget.addClass("right");
    } else if (!isSelected && rightList.indexOf(pText) !== -1) {
      list.eq(i).css("background" ,'white');
      checkTarget.addClass("no-select");
    }
  }
}
$(document).ready(function() {
    initIndex();
    // initQuestion();
    // 选择角色
     $(document).on('touchstart', '.select_role .role .avatar', function() {
        var _this = this;
       $(this).addClass("animated shake");
       setTimeout(function() {
           $(_this).removeClass("animated shake");
           if (role == -1) {
                $("#start-game").removeClass("hide");
            }
           role = $(_this).data().role;
           
       }, 300);
    });
 
    $(document).on('touchstart', '#start-game', function() {
        // 关掉 首页index场景
        removeIndex();
        var src = role === 0 ? '/public/img/game/girl_2.png' : '/public/img/game/boy.png'
        $("#intro .role").attr("src", src)
        setTimeout(function() {
            initChat();
        }, 1000)
        // 进入场景2
    });
    $(document).on('touchstart', '#start-question', function() {
        // 关掉对话
        removeChat();
        setTimeout(function() {
          initQuestion();
        }, 1000)
    })

    // $(".list-item").live("tap", function() {
    // })
    $(document).on('touchstart', '.list-item', function() {
      if (answerOver) {
        return 0;
      }
      //function code here.
      var isSelected = $(this).hasClass("select");
      // var answer  = $(this).find("p").html();

      var isMultiSelect = isMulti();
      if (isMultiSelect) {
         if (isSelected) {
            $(this).removeClass("select");
         } else {
            $(this).addClass("select")
         }
      } else {
         if (isSelected) {
            
            $(this).removeClass("select");
         } else {
            $(".list-item").removeClass("select");
            $(this).addClass("select")
         }
      }
    });
    $(document).on('touchstart', '#confirm-answer', function() {

      if (questionIndex ==4) {
        initOver();
        $("#question").addClass("hide");
        return 0;
      }
      // 回到答题的状态
      if (answerOver === true) {
        // if (questionIndex === 4)
        questionIndex++;
        renderQuestion();
         $("#confirm-answer").html('确定')
        answerOver= false;
        setTimeout(function() {
          $(".question-chushi").removeClass("hide");
        }, 100)
        return 0;
      }
      var selects = $(".list-item.select");
      if (selects.length === 0) {
          $("#alert").addClass("active");
          setTimeout(function() {
             $("#alert").removeClass("active");
          }, 1500)
          return 0;
      }
      answerOver = false;
      testResult();

      var perGrade  = questions[questionIndex].grade;
      var rightNums = $(".check.right").length;
      var errorNumber = $(".check.error").length;
      var allRights = questions[questionIndex].right.length;
      var face = 'cry';
      console.log("allRights", allRights);
      console.log("rightNums", rightNums);
      if (allRights == rightNums && errorNumber == 0) {
        grade = grade + 25;
        face = 'laugh';
        $(".grade-chat").html(
          "太棒了!<br />"+
          "答对了!<br />"+
          "+"+ 25 +"分<br />"
        )
      } else {
        face = 'cry';
        $(".grade-chat").html(
          "呃...<br />"+
          "答错了!<br />"+
          "好遗憾"
        )
      }
      
      if (role === 0) {
        $(".questions-grade .grade-role").attr("src", '/public/img/game/girl_' + face +'.png')
      } else {
        $(".questions-grade .grade-role").attr("src", '/public/img/game/boy_' + face +'.png')
      }

      answerOver = true;
      $(".question-chushi").addClass("hide");
      if (questionIndex == 3) {
        $("#confirm-answer").html('结束答题')
        questionIndex +=1;
      } else {
        $("#confirm-answer").html('下一题')
      }
      $(".questions-grade").removeClass('hide');
    });

  $(".restart-game").on("tap", function() {
      window.location.reload();
  });
})