<script>
  const slideshow = document.querySelector('.slideshow');
  const images = document.querySelectorAll('.slideshow img');
  const prevArrow = document.querySelector('.prev');
  const nextArrow = document.querySelector('.next');
  let current = 0;

  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }

  function startSlide() {
    reset();
    images[current].classList.add('active');
  }

  prevArrow.addEventListener('click', function() {
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    startSlide();
  });

  nextArrow.addEventListener('click', function() {
    current++;
    if (current >= images.length) {
      current = 0;
    }
    startSlide();
  });

  startSlide();
</script>
``
