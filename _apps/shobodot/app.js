window.onload = function(){
  const shobodot = new ShoboDot()
  shobodot.setColors();
  shobodot.dots.forEach(dot => clickFunction(dot));
}

window.addEventListener('keydown', function(e){
  if (e.keyCode === 91){
    command = true;
  } else if (e.keyCode == 18){
    rgb.max -= 10;
  }
})

window.addEventListener('keyup', function(e){
  if (e.keyCode === 91)
    command = false;
})