// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $refresh: $('#refresh'),
  $spinner: $('.spinner img'),

  username: 'anonymous',



  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.$refresh.on('click', function () {
      App.fetch(App.stopSpinner);
      $('#chats').empty();
      MessagesView.render();
    });
    // FormView.$form.on('submit', FormView.handleSubmit);



    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

  },



  fetch: function(callback = ()=>{}) {
      console.log('fetch called');
      Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      Messages._data = data;
      console.log(Messages._data);

      // Rooms._data = [];

      MessagesView.initialize();
      RoomsView.initialize();

      callback();


      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },


  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
