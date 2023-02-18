// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  // $button: $('#rooms button'),
  // $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    for (var i = 0; i < Messages._data.length; i++) {

      if (!Rooms._data.includes(Messages._data[i].roomname) && Messages._data[i].roomname !== null) {
        Rooms._data.push(Messages._data[i].roomname);
      }

    }

    this.render();
    this.handleChange();
    this.handleClick();
    MessagesView.handleClick();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate over rooms data
    // use template on each room
    // append room HTML to dropdown

    var sanitizeHTML = function (str) {
      if(str === null) {
        return;
      }
      return str.replace(/[^\w. ]/gi, function (c) {
      return '&#' + c.charCodeAt(0) + ';';
      });
    };

    var html = '';



    for (var i = 0; i < Rooms._data.length; i++) {
      console.log(Rooms._data[i]);
      var room = sanitizeHTML(Rooms._data[i])
      $('#rooms select').append('<option>'+room+'</option>')

    }
  },

  makeRoomHTML: _.template(`
  <option value="<%= room %>"> <%= room %> </option>
`),

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    console.log('render room called');

    $('#chats').empty()

      console.log(Messages._data)
      var filteredMessagesByRoom = Messages._data.filter(message => message.roomname === roomname);
      console.log(filteredMessagesByRoom);

      var sanitizeHTML = function (str) {
        return str.replace(/[^\w. ]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
        });
      };

      for (var i = 0; i < filteredMessagesByRoom.length; i++) {
        filteredMessagesByRoom[i].text = sanitizeHTML(filteredMessagesByRoom[i].text)
        filteredMessagesByRoom[i].username = sanitizeHTML(filteredMessagesByRoom[i].username)
        if (filteredMessagesByRoom[i].roomname !== null) {
          filteredMessagesByRoom[i].roomname = sanitizeHTML(filteredMessagesByRoom[i].roomname)
        }
      }

      var html = '';
      for (var i = 0; i < filteredMessagesByRoom.length; i++) {
        html += MessageView.render(filteredMessagesByRoom[i]);
      }
      $("#chats").append(html);

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    $('#selection').change(function(){
      RoomsView.renderRoom($(this).val());
    });
  },

  handleClick: function(event) {
    var roomResponse;
    $('#addRoomBtn').click(function() {
      roomResponse = prompt('Enter a room name')

      Rooms._data.push(roomResponse);
      $('#rooms select').append('<option>'+ roomResponse +'</option>')
      console.log('Rooms data', Rooms._data);
    })

  }
};
