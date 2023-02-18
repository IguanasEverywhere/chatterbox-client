// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
      <p class="username"> <%= username %> </p>
      <p class="post-message"> <%= text %> </p>
      </div>


    `),

  renderFriend: _.template(`
    <div class="chat">
    <p class="username"> <%= username %> </p>
    <p class="post-message"> <strong> <%= text %> </strong> </p>
    </div>


  `)

};


{/* <div class="chat">
<div class="username"></div>
<div></div>
</div> */}