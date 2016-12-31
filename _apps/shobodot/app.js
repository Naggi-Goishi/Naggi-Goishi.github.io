window.onload = function(){

  let i = 0;
  let g = 0;
  let b = 0;
  let command = false;
  let color = 'black';

  setCanvas();

  function RGB(){
    this.direction = true;
    var _max;
    var _r = 255;
    var _g = 0;
    var _b = 0;
    Object.defineProperty(this, 'max', {
      get: function() {return _max},
      set: function(val){
        _max = val;
        if (_max < 0)
          _max = 255;
        colors = setColors();
      }
    });
    Object.defineProperty(this, 'r', {
      get: function() {return _r},
      set: function(val){
        _r = val;
        if (_r > _max)
          _r = _max;
      }
    });
    Object.defineProperty(this, 'g', {
      get: function() {return _g},
      set: function(val){
        _g = val;
        if (_g > _max)
          _g = _max;
      }
    });
    Object.defineProperty(this, 'b', {
      get: function() {return _b},
      set: function(val){
        _b = val;
        if (_b > _max)
          _b = _max;
      }
    });
  }

  var rgb = new RGB()
  rgb.max = 255;

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

  function setCanvas(){
    const body = document.querySelector('body');
    let html = '';
    for (var i=0; i < 10000; i++){
      html += `<div class='canvas' id='${i}'></div>`;
    }
    body.innerHTML = html;
  }

  setColors(rgb);

  function setColors(){
    colors = [];
    colors.push(...add('g'));
    rgb.g = rgb.max;
    colors.push(...substract('r'));
    rgb.r = 0;
    colors.push(...add('b'));
    rgb.b = rgb.max;
    colors.push(...substract('g'));
    rgb.g = 0;
    colors.push(...add('r'));
    rgb.r = rgb.max;
    colors.push(...substract('b'));
    rgb.b = 0;

    i = 0;
    for (color of colors){
      canvas = document.getElementById(i);
      canvas.style.backgroundColor = color;
      canvas.classList.add('colorBox');
      i += 1;
      console.log(color);
      console.log(rgb.max);
    }
  }

  function add(i){
    const colors = [];
    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;
    if (i === 'r'){
      for (r; r < rgb.max; r+=5){
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else if (i === 'g'){
      for (g; g < rgb.max; g+=5){
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else if (i === 'b'){
      for (b; b < rgb.max; b+=5){
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else{
      console.log('ERROR: invalid "i"');
    }
    return colors;
  }

  function substract(i){
    const colors = [];
    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;
    if (i === 'r'){
      for (r; r >= 0; r-=5){
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else if (i === 'g'){
      for (g; g >= 0; g-=5){
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else if (i === 'b'){
      for (b; b >=0; b-=5){
        colors.push(`rgb(${r}, ${g}, ${b})`)
      }
    } else{
      console.log('ERROR: invalid "i"');
    }
    return colors;
  }

  i = 0;

  const canvases = document.querySelectorAll('.canvas');

  canvases.forEach(function(canvas){
    if (canvas.classList.contains('colorBox')){
      canvas.addEventListener('click', changeColor);
    } else {
      canvas.addEventListener('click', dot)
    }
  });

  function changeColor(){
    color = this.style.backgroundColor;
  }

  function dot(){
    if (command){
      this.style.backgroundColor = '#fff';
    } else{
      this.style.backgroundColor = color;
    }
  }

}
