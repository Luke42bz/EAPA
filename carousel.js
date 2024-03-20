$('.tile').on('click', function(){
    $('.tile').removeClass('selected');
    $(this).addClass('selected');
});



addEventListener("dblclick", (event) => {});

ondblclick = (event) => {$('.tile').removeClass('selected');};