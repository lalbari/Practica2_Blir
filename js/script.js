
/* trabajados */
function showOverlay(container) {
       
    if (container.classList.contains('active')) {
      container.classList.remove('active'); 
    } 

    else { document.querySelectorAll('.image-container.active').forEach((el) => {
        el.classList.remove('active');
      });
      container.classList.add('active');
    }
  }