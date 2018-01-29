$(document).ready(function () {

    $(".w-logos-item:nth-child(5)").append("<a href='#'><p>Learn More </p></a>");



    //setting up multiple carosels
    var carosels = [];
    $(".image-carosel").each(function () {
        //set the carosel object   
        carosels.push({
            "box": "#" + $(this).parentsUntil(".box-name")[4].id,
            "max-width": $(this).width(),
            "index": 0,

        });

    });


    $('.next-arrow').click(function () {
        event.stopPropagation();
        //get correct parent box
        var boxName = "#" + $(this).parentsUntil(".box-name")[3].id;

        //find the corresponding carosel in the list 
        var carosel_index = 0;

        for (index = 0; index < carosels.length; ++index) {
            console.log("obj: " + carosels[index]);
            if (boxName == carosels[index].box) {
                console.log("match is index " + index);
                carosel_index = index;
            }
        }

        //calculate endIndex
        var endIndex = Math.floor(carosels[carosel_index]["max-width"] / 300) - 1;

        console.log('end index is ' + endIndex);

        event.preventDefault();
        if (carosels[carosel_index].index < endIndex) {
            carosels[carosel_index].index++;
            //only move div if under the correct box
            $('.image-carosel', boxName).animate({
                marginLeft: "-=300px"
            }, "fast");
        }
        //only change arrow if under the correct box
        $('.prev-arrow', boxName).fadeIn();
    });

    $('.prev-arrow').click(function () {

        event.stopPropagation();
        //get correct parent box
        var boxName = "#" + $(this).parentsUntil(".box-name")[3].id + "";

        //find the corresponding carosel in the list 
        var carosel_index = 0;

        for (index = 0; index < carosels.length; ++index) {
            console.log("obj: " + carosels[index]);
            if (boxName == carosels[index].box) {
                console.log("match is index " + index);
                carosel_index = index;
            }
        }


        event.preventDefault();
        if (carosels[carosel_index].index > 0) {
            carosels[carosel_index].index--;
            //only move div if under the correct box
            $('.image-carosel', boxName).animate({
                marginLeft: "+=300px"
            }, "fast");
        } else {
            //only change arrow if under the correct box
            $('.prev-arrow', boxName).fadeOut();
        }

    });


    $(".image-block").click(function () {
        $(this).toggleClass('fullsize');
        $(this).toggleClass('modal');
        $("body").toggleClass('modal-open');
        // Move the paragraph from #myDiv1 to #myDiv2

    });

    $(".show-all").click(function () {
        event.stopPropagation();
        //get correct parent box
        var boxName = "#" + $(this).parentsUntil(".box-name")[3].id + "";
        //only toggle divs under the correct box
        $('.image-carosel', boxName).toggleClass('grid', {
            duration: 500
        });
        $(".next-arrow", boxName).fadeToggle();
        $(".prev-arrow", boxName).fadeToggle();
        $(this).toggleClass('toggled');
    })
});


$(window).on("scroll", function () {
    var header = $(".head");
    $(".small").css({
        height: "15px",
        transition: "0.2s"
    });

    header.css({
        top: "0px",
        transition: "0.2s"
    });
    header.addClass('shadow');

    if ($(window).scrollTop() === 0) {
        header.css("top", "0px");
        header.removeClass('shadow');
        $(".small").css({
            height: "30px",
            transition: "0.2s"
        });
    }
});
