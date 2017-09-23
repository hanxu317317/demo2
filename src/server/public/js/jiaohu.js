var role = -1;

$(document).ready(function() {
    initIndex();
    // 选择角色
    $(".select_role .role .avatar").click(function() {
        var _this = this;
       $(this).addClass("animated shake");
       setTimeout(function() {
           $(_this).removeClass("animated shake");
           if (role == -1) {
                $("#start-game").removeClass("hide").addClass("fadeInUp");
            }
           role = $(_this).data().role;
           
       }, 300);
    });

    $("#start-game").click(function() {
        // 关掉 首页index场景
        removeIndex();
        setTimeout(function() {
            initChat();
        }, 1000)
        // 进入场景2
      
    })
})