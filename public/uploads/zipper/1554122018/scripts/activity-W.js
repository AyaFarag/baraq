function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    $("#langIcon, #print_it img").mouseover(function () {
        var str = $(this).attr('src');
        $(this).attr('src', str.replace("off.png", "on.png"));
    });
    $("#langIcon, #print_it img").mouseout(function () {
        var str = $(this).attr('src');
        $(this).attr('src', str.replace("on.png", "off.png"));
    });
}

var counter = 0;

function changeLang() {
    counter++;
    var $currentImg = $('#printableArea').children('img');
    if (counter % 2 === 0) {
        $currentImg.attr('src', $currentImg.attr('src').replace('english', 'arabic'));
        $('#langIcon').attr('src', 'images/en-off.png');
    } else {
        $currentImg.attr('src', $currentImg.attr('src').replace('arabic', 'english'));
        $('#langIcon').attr('src', 'images/ar-off.png');
    }
}

$("#langIcon, #print_it img").mouseover(function () {
    var str = $(this).attr('src');
    $(this).attr('src', str.replace("off.png", "on.png"));
});
$("#langIcon, #print_it img").mouseout(function () {
    var str = $(this).attr('src');
    $(this).attr('src', str.replace("on.png", "off.png"));
});
