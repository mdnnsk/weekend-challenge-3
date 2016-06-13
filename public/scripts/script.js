$(document).ready(function(){

  $('input[name="submit"]').click(function() {
    $.post('/math', $(this).closest('form').serialize(), function(data) {
       console.log(data);
       $('#answer').append(data);
    });
  });
});
