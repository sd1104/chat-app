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
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        let insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
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