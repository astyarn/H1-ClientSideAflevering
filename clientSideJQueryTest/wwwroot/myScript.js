$(document).ready(function () {
    //Sætter uret til at opdatere hver 100ms
    setInterval(function () {
        clockFunction();    //Kalder clock code
    }, 100);
    $("#content").load("contentIndex.html")
    //onclick function til at gemme en bestemt id
    $(document).on("click", "#hide", function () {
        $("h2.gem").hide(1000);
    });
    /*Tager fat i menu-item class elementer og sætter det
      clicked element til at være activ
      Yderligere loades det nye content ind på siden.*/
    $(document).on("click",".menu-item",function () {
        var url = $(this).attr("data-page");
        $("#content").empty();
        $("#content").load(url);
        var clickedItem = $(this);
        $(".menu-item").each(function (index, element) {
            if ($(element).hasClass("menu-item-active")) {
                $(element).removeClass("menu-item-active");
            }
        });
        clickedItem.addClass("menu-item-active");
    });
    //onclick til at vise det gemte element med id
    $(document).on("click","#show", function () {
        $("h2.gem").show(1000);
    });
    //function til at udføre fade animation tildelt via class
    $(document).on("click","#btnFadeToggle", function () {
        $("h2.fade").fadeToggle("slow");
    });
    //function til at ekstende et panel når der klikkes på paneloverskriften
    $(document).on("click",".flip", function () {
        myfunction();
    });
    //Animation af logo.jpg
    $(document).on("click", "#logoAnimation", function () {
        var btn = $(this);
        var img = $(document).find("#imgAnimation");
        if (img.hasClass("rotateimage")) {
            img.attr("data-flipped", "true");
            img.animate({ left: '8px', opacity: '1' });
            $("#footer").css("position", "fixed");
            $("#footer").slideDown(500);
            $(".menu").slideDown(500);
            btn.removeClass("redBtn");
            btn.text("Start animation af logo!");
        }
        else {
            img.animate({ left: '35%', opacity: '0.4' });
            btn.addClass("redBtn");
            btn.text("Reset billede, menu og footer!");
            $("#footer").css("position", "absolute");
            $("#footer").slideUp(500);
            $(".menu").slideUp(500);

        }
        img.toggleClass("rotateimage");
    });
});
//egen custom function til at udføre ekstende delen af panelet
function myfunction() {
    $(".panel").slideToggle("slow");
}

//Function der opretter en tekstlinje med clock data
function clockFunction() {
    var time = new Date();

    var hour = pad(time.getHours(), 2);
    var min = pad(time.getMinutes(), 2);
    var sec = pad(time.getSeconds(), 2);

    $("#clock").text(hour + ":" + min + ":" + sec);
    $("#clockMenu").text(hour + ":" + min + ":" + sec);
}

//Function der udfører padding på tekst
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

