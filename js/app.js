var board = document.getElementById('board');
var ctx = board.getContext('2d');

//buttonOne
var drawRectangle = function(event){
  'use strict';
  event.preventDefault();

  var xStart = Math.floor(Math.random() * (250 - 0) + 0);
  var yStart = Math.floor(Math.random() * (100 - 0) + 0);
  console.log(xStart, yStart);

  var color = '#';
  var letters = '0123456789ABCDEF'.split('');
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  };
  console.log(color);

  ctx.fillRect(xStart, yStart, 50, 50);
  ctx.fillStyle = color;
};

document.getElementById('buttonOne').addEventListener('click', drawRectangle);

//buttonTwo

//clear
var clearBoard = function(event){
  'use strict';
  event.preventDefault();
  ctx.clearRect(0, 0, board.width, board.height);
};

document.getElementById('clear').addEventListener('click', clearBoard);
