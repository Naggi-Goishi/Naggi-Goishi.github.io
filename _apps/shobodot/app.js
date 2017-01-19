window.onload = function(){
  const shobodot = new ShoboDot({colorBoxes: true, clickFunction: true});
};

window.addEventListener('keydown', function(e){
  if (e.keyCode === 91){
    command = true;
  }
});

window.addEventListener('keyup', function(e){
  if (e.keyCode === 91)
    command = false;
});