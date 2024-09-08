
  document.querySelectorAll('.enlarge-img').forEach(item => {
    item.addEventListener('click', event => {
      const modalImage = document.getElementById('modalImage');
      modalImage.src = event.target.src; // Set modal image source to the clicked image source
    });
  });

