$(function(){

 
    

     


    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : 'Next Step',
            finish : 'Submit',
            current : ''
        },
    });
    

        $('#password,#confirm').on('keyup', function () {
        console.log("kk");
  if ($('#confirm').val() == $('#password').val()) {
    
    $('#message').html('Matching').css('color', 'green');
  } else 
    $('#message').html('Not Matching').css('color', 'red');
});

    

  


});
