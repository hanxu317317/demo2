$(document).ready(function() {
    initIndex();
    $(".select_role .role").click(function() {
        var self = this;
        $(this).removeClass("fadeInLeft fadeInRight animated").addClass("rubberBand active");
        setTimeout(function() {
            $(self).removeClass("rubberBand")
        }, 300);
    })
})