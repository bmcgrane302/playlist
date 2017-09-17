console.log("test");
$(document).ready(function() {

  $.get('https://lit-fortress-6467.herokuapp.com/object/', function(data) {
    console.log(data.results.length);
    //console.log(data.results[0].cover_art);
    /////////start of album
    function albumCovers() {
      for (var i = 0; i < data.results.length; i++) {

        var albumList = document.getElementsByClassName('albumList')[0];
        var img = document.createElement('img');
        img.className = "albumCov";
        img.id = "album"+i;
        img.src = `images/${data.results[i].cover_art}`;
        console.log(img);
        albumList.append(img);
    ///added click

        $("#album"+i).click(function() {
          var textBox = document.getElementsByClassName('textBox')[0];
          var p = document.createElement('p');
          p.innerHTML = data.results[0].artist;
          textBox.append(p);

        })
    //bottom of click .results["0"].artist
      }
    }
    albumCovers();
    ////end album
    // $('#album0').click(function(){
    //   console.log("album test");
    //     var textBox = document.getElementsByClassName('textBox')[0];
    //     var p = document.createElement('p');
    //     p.innerHTML = data.results[0].artist+ ": "+data.results[0].title;
    //     textBox.append(p);
    // });
    // $('#album1').click(function(){
    //   console.log("album test");
    //     var textBox = document.getElementsByClassName('textBox')[0];
    //     var p = document.createElement('p');
    //     p.innerHTML = data.results[1].artist+ ": "+data.results[1].title;
    //     textBox.append(p);
    // });

    /////clear button
    $('#clear').click(function() {
      $('.textBox').empty();
    });
    ///////post button
    $('#submit').click(function() {
      $.post('.textBox',console.log("POST"));
    });

  });

});
