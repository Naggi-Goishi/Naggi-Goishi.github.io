window.onload = function() {
  const sakana = document.querySelector('img')
  const header = document.querySelector('header');
  const clickme = document.querySelector('.clickme');
  const MAX_POSITION = header.getBoundingClientRect().width - sakana.getBoundingClientRect().width;

  function swim(){
    sakana.classList.add('swimming');
    clickme.classList.add('hide')
  }

  function animate(e){
    if (e.propertyName == 'left'){
      if (this.className.includes('turning180')){
        this.classList.remove('turning180');
        this.classList.add('turning360');
      } else {
        this.classList.add('turning180');
        this.classList.remove('turning360');
      }
    } else{
      this.classList.remove('swimming');
    }
  }

  header.addEventListener('click', swim);

  sakana.addEventListener('transitionend', animate);

  setTimeout(function(){
    clickme.style.transform = 'scale(1)'
  }, 1000);
  setTimeout(function(){
    clickme.style.transform = 'scale(0)'
  }, 3000);
};