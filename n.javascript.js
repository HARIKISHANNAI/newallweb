$(document).ready(function(){
    $("#sn").mouseenter(function(){
        $("#fn").slideDown()
    })
})
$(document).ready(function(){
    $("#fn").mouseleave(function(){
        $("#fn").slideUp()
    })
})
$(document).ready(function() {
    $("#ii").click(function() {
        $("#ii").css("background-color", "silver");
    });
});
$(document).ready(function() {
    $("#ii").mouseleave(function() {
        $("#ii").css("background-color", "white");
    });
});
$(document).ready(function() {
    $("#hm").mouseenter(function() {
        $("#hm").css({
            zIndex: 400,
            boxShadow: "1px 1px 2px 1px",
        });
    });
});
$(document).ready(function() {
    $(".httt").mouseenter(function() {
        $(".httt p").css({
            "fontSize": "35px",
            "margin-top":"45px"
        },4000);
    });
});
$(document).ready(function(){
    $(".ffs").mouseenter(function(){
        $(".ffs p").slideDown()
    })
})
$(document).ready(function(){
    $(".ffs").mouseleave(function(){
        $(".ffs p").slideUp()
    })
})
$(document).ready(function() {
    $("#fe").mouseenter(function() {
        $("#fe").animate({
            opacity: 1,
        }, 2000); // 3000 milliseconds (3 seconds) duration
    });
});

$(document).ready(function(){
    $(".iic i").click(function(){
        $(".fns ul").slideToggle()
    })
})






gsap.to("#sn p", {
    x: 900,
    duration: 2,
    delay: 1,
    opacity:2,
    fontSize: "30px",
});
gsap.to("#hs h1",{
    duration:2,
    delay:1,
    rotate:360,
})