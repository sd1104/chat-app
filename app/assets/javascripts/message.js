$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});