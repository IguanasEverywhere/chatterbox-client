// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.

    var sanitizeHTML = function (str) {
      if(str === null || str === undefined) {
        return;
      }
	    return str.replace(/[^\w. ]/gi, function (c) {
		  return '&#' + c.charCodeAt(0) + ';';
	    });
    };

    for (var i = 0; i < Messages._data.length; i++) {
      Messages._data[i].text = sanitizeHTML(Messages._data[i].text)
      Messages._data[i].username = sanitizeHTML(Messages._data[i].username)
      if (Messages._data[i].roomname !== null) {
        Messages._data[i].roomname = sanitizeHTML(Messages._data[i].roomname)
      }
    }

    var html = '';
    for (var i = 0; i < Messages._data.length; i++) {
      if(Friends._data.includes(Messages._data[i].username)) {
        html += MessageView.renderFriend(Messages._data[i]);
      } else {
        html += MessageView.render(Messages._data[i]);
      }

    }
    $("#chats").append(html);
 // console.log(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var html = '';
    html += MessageView.render(message);
    $("#chats").append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.addFriend();
  }

};