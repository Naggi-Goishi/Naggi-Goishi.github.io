window.onload = function(){
  const shobodot = new ShoboDot({colorBoxes: true, clickFunction: true});
  const setting = {
    plus: document.querySelector('.plus'),
    minus: document.querySelector('.minus'),
    border: document.querySelector('.border')
  };
  setting.plus.addEventListener('click', function() {
    shobodot.plusSize();
  });
  setting.minus.addEventListener('click', function() {
    shobodot.minusSize();
  });
  setting.border.addEventListener('click', function() {
    shobodot.swichBorders();
  });
};

window.addEventListener('keydown', function(e){
  if (e.keyCode === 91){
    command = true;
  }
});

window.addEventListener('keyup', function(e){
  if (e.keyCode === 91){
    command = false;
  }
});
