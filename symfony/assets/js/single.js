$(".dropdown img.flag").addClass("flagvisibility");

$(".dropdown dt a").click(function () {
    $(".dropdown dd ul").toggle();
});

$(".dropdown dd ul li a").click(function () {
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    $("#result").html("Selected value is: " + getSelectedValue("sample"));
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});


$("#flagSwitcher").click(function () {
    $(".dropdown img.flag").toggleClass("flagvisibility");
});

$('#etalage').etalage({
    thumb_image_width: 300,
    thumb_image_height: 400,

    show_hint: true,
    click_callback: function (image_anchor, instance_id) {
        alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
    }
});
// This is for the dropdown list example:
$('.dropdownlist').change(function () {
    etalage_show($(this).find('option:selected').attr('class'));
});
