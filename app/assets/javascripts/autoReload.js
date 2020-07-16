$(function(){

  function buildHTML(message){
    if(message.image){
      let html = `<div class="Chat-main__message-list__message-box" data-message-id=${message.id}>
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
      let html = `<div class="Chat-main__message-list__message-box" data-message-id=${message.id}>
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

  let reloadMessages = function() {
    let last_message_id = $('.Chat-main__message-list__message-box:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__message-list').append(insertHTML);
        $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);

});