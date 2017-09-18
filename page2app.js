console.log("test");
$(document).ready(function() {
$.get('https://lit-fortress-6467.herokuapp.com/object/', function(data) {
  console.log(data.results.length);

  for (var i = 0; i < data.results.length; i++) {
    albumCovers(i);
  }

  //console.log(data.results[i].cover_art);

  function albumCovers(num) {
    $.get('https://lit-fortress-6467.herokuapp.com/object/', function(data) {
      ///creating row of album covers
      var albumList = document.getElementsByClassName('albumList')[0];
      var img = document.createElement('img');
      img.className = "albumCov";
      img.id = "album" + num;
      img.src = `images/${data.results[num].cover_art}`;
      console.log(img);
      albumList.append(img);
      ///added click fuction to album covers
      $("#album" + num).click(function() {

        var textBox = document.getElementsByClassName('textBox')[0];
        var p = document.createElement('p');
        p.innerHTML = data.results[num].artist + ": " + data.results[num].title;
        console.log('HELLO');
        textBox.append(p);

      })

      albumCovers();
      /////clear button
      //var clear = document.getElementById('#clear');
      $('#clear').click(function() {
        $('.textBox').empty();
      });
      $('#submit').click(function() {
        $.post('.textBox', console.log("POST"));
      });

    });

  }
  });
});
