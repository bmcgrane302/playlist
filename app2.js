console.log("test");

$(document).ready(function() {

  $.get('https://lit-fortress-6467.herokuapp.com/object/', function(data) {
    console.log(data);
    console.log(data.results[0].cover_art);
    var newArr = [];
    function random() {
    //console.log(newArr);
      var num = Math.floor(Math.random() * 3);
      //console.log(num);
      for (let i = 0; i < 3; i++) {
        newArr.push(i + num);
      }
      return newArr;
    }
    random();

    function albumRandom() {
      for (var i = newArr[0]; i <=newArr[2]; i++) {

        var centerR = document.getElementsByClassName('centerR')[0];
        console.log(centerR)
        var img = document.createElement('img');
        img.className = "albumArt";
        img.src = `images/${data.results[i].cover_art}`;
        console.log(img);
        centerR.append(img);
      }
    }
    albumRandom();
  });
});
