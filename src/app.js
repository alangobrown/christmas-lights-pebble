/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');
var ajax = require('ajax');




var main = new UI.Card({
  title: 'Christmas Lights',
  icon: 'images/menu_icon.png',
  subtitle: 'by Alan',
  body: 'UP is ON, DOWN is OFF'
});

main.show();


main.on('click', 'up', function(e) {

  var URL = 'http://192.168.1.68:5000/on';
  
  // Make the request
  ajax(
    {
      url: URL,
      type: 'json',
      method: 'GET'
    },
  function(data) {
    // Success!
    console.log('Successfully fetched data!');
  }, function(error) {
    // Failure!
    console.log('Failed fetching data: ' + error);
  }
  );
});

main.on('click', 'down', function(e) {

  var URL = 'http://192.168.1.68:5000/off';
  
  // Make the request
  ajax(
    {
      url: URL,
      type: 'json',
      method: 'GET'
    },
  function(data) {
    // Success!
    console.log('Successfully fetched data!');
  }, function(error) {
    // Failure!
    console.log('Failed fetching data: ' + error);
  }
  );
  
});
