// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      url: Parse.server, // parse API or other website to which we want to send a request
      type: 'POST', // HTTP verb
      data: '{ order: -createdAt }', //data sent to the server which specifies extra options for how the verb should happen
      contentType: 'application/json', //format of content you are providing to the server, type of data being sent
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // parse API or other website to which we want to send a request
      type: 'GET', // HTTP verb
      data: { order: '-createdAt' }, //data sent to the server which specifies extra options for how the verb should happen
      contentType: 'application/json', //format of content you are providing to the server, type of data being sent
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};