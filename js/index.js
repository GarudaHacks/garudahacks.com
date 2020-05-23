var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
    // options
    contain: true,
    autoPlay: true,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false,
    pauseAutoPlayOnHover: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
    // options
});

flkty.on("staticClick", function (event, pointer, cellElement, cellIndex) {
    flkty.playPlayer();
});

flkty.on("dragEnd", function (event, pointer, cellElement, cellIndex) {
    flkty.playPlayer();
});

var prizeExpanded = false;

$(".accordion .magic-container").css(
    "minHeight",
    $(".accordion .magic-container").prop("scrollHeight") + 150
);

$(".prize-expand").click(function () {
    $(".section-prize .items-container").toggleClass("show");
    $(".section-prize .prize-expand .fa-chevron-up").toggleClass("rotate");

    if (prizeExpanded) {
        $(".section-prize .items-container").removeAttr("style");
        prizeExpanded = !prizeExpanded;
    } else {
        $(".section-prize .items-container").css(
            "height",
            $(".section-prize .items-container").prop("scrollHeight")
        );
        prizeExpanded = !prizeExpanded;
    }
});

$(document).ready(function () {
    if (Weglot.getCurrentLang() == "EN") {
        $("#languageSelector").html("🇬🇧 English");
    } else {
        $("#languageSelector").html("🇮🇩 Bahasa Indonesia");
    }
});
