$(function(){
  function buildHTML(message){
    if(message.image){
      let html = `<div class="Chat-main__message-list__message-box">
                    <div class="Chat-main__message-list__message-box__sender">
                      <div class="Chat-main__message-list__message-box__sender__sender-name">
                        ${message.user_name}
                        &nbsp;
                      </div>
                      <div class="Chat-main__message-list__message-box__sender__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Chat-main__message-list__message-box__message">
                      <p class="Chat-main__message-list__message-box__message__body">
                        ${message.body}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="Chat-main__message-list__message-box">
                    <div class="Chat-main__message-list__message-box__sender">
                      <div class="Chat-main__message-list__message-box__sender__sender-name">
                        ${message.user_name}
                        &nbsp;
                      </div>
                      <div class="Chat-main__message-list__message-box__sender__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Chat-main__message-list__message-box__message">
                      <p class="Chat-main__message-list__message-box__message__body">
                        ${message.body}
                      </p>
                    </div>
                  </div>`
        return html;
    }   
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
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

    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })

    .fail(function(){
      alert('error');
    })
  })
});