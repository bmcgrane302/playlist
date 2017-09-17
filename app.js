console.log("test");
$(document).ready(function() {

var art = [0,1,2,3,4];

  function albumCovers() {
    $.get('https://lit-fortress-6467.herokuapp.com/object/', function(data) {
      for (var i = 0; i < 3; i++) {
        $('.centerR').append(
          `<img class="albumArt" src="images/${data.results[i].cover_art}">`
        )
      }
    });
  }

  albumCovers();





});
