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
    var html = '';
    for (var i = 0; i < Messages._data.length; i++) {
      html += MessageView.render(Messages._data[i]);
    }
    $("#chats").append(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};