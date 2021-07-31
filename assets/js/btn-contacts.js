$('#btn-contact').click(function() {
    $('#box-contacts').toggleClass('active');
    if($('#icon-contact').hasClass('fa fa-comments-o')){
        $('#icon-contact').removeClass('fa fa-comments-o');
        $('#icon-contact').addClass('fa fa-close');
    } else {
        $('#icon-contact').removeClass('fa fa-close');
        $('#icon-contact').addClass('fa fa-comments-o');
    }
});