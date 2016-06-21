$(document).ready(function(){
    $('#body-content').load(function(){
            $(this).height($(this).contents().find('body').height()+40);
    });
});