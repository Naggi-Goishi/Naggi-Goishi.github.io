function ShoboDot(){
	this.init();
	var _dots;

	Object.defineProperty(this, 'dots', {
		get: function(){return document.querySelectorAll('.dot');},
		set: function(){throw new Error("can't change 'dots'");}
	})
}

ShoboDot.prototype.init = function init(){
		const canvas = document.querySelector('.canvas');
		let html = '';
		for (var i=0; i < 10000; i++){
			html += `<div class='dot' id='${i}'></div>`;
		}
		canvas.innerHTML = html;
}

ShoboDot.prototype.setColors = function setColors(){
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

	var i = 0;
	for (color of colors){
		dot = document.getElementById(i);
		dot.style.backgroundColor = color;
		dot.classList.add('colorBox');
		i += 1;
	}
}

const shobodot = new ShoboDot();

function RGB(){
	var _max = 255;
	var _r = 255;
	var _g = 0;
	var _b = 0;
	Object.defineProperty(this, 'max', {
		get: function() {return _max},
		set: function(val){
			_max = val;
			if (_max < 0)
				_max = 255;
			colors = ShoboDot.prototype.setColors();
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

	var rgb = new RGB();
	let mouseColor = 'black';
	let command = false;

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


function clickFunction(dot){
  if (dot.classList.contains('colorBox')){
    dot.addEventListener('click', changeMouseColor);
  } else {
    dot.addEventListener('click', clickDot);
  }
}

function changeMouseColor(){
  mouseColor = this.style.backgroundColor;
}

function clickDot(){
  if (command){
    deleteDot(this)
  } else{
  	paint(this);
  }
}

function XlineNum(){
  const dots = document.querySelectorAll('.dot');
  let i = 0;
  dots.forEach(function(box){
    if (box.offsetTop == 1)
      i += 1;
  });
  return i;
}

function paint(dot){
	const audio = document.getElementById('dot');
	audio.play();
	dot.style.backgroundColor = mouseColor;
}

function deleteDot(dot){
	dot.style.backgroundColor = 'rgb(0, 0, 0)';
}