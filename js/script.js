/* Modal Suscribirse al Blog*/

document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById('stickerModal'));
  modal.show();
});

/*Stickers que se pueden arrastrar*/

$(document).ready(function() {
  $('.sticker').draggable({
    containment: 'body'
  });
});

$(document).ready(function() {
  $('.sticker-movil').draggable({
    containment: 'body'
  });
});

function ajustarStickerContainer() {
  const masonryGrid = document.getElementById('inicio-masonry-grid');
  const stickerContainer = document.querySelector('.sticker-container');

  if (masonryGrid && stickerContainer) {
    const gridHeight = masonryGrid.offsetHeight;
    stickerContainer.style.height = `${gridHeight}px`;
  }
}

window.addEventListener('load', ajustarStickerContainer);
window.addEventListener('resize', ajustarStickerContainer);

/* Masonry grid */

document.addEventListener("DOMContentLoaded", function () {
    new Masonry("#inicio-masonry-grid", {
      itemSelector: ".inicio-grid-item",
      columnWidth: ".inicio-grid-item",
      percentPosition: true,
      gutter: 15
    });
  });

/* Carousel Merchandising*/

const myCarouselElement = document.querySelector('#carousel-merchandising')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: true,
  pause:"hover"
})

const myCarouselElementmovil = document.querySelector('#carousel-merchandising-movil')
const carouselmovil = new bootstrap.Carousel(myCarouselElementmovil, {
  interval: 3000,
  touch: true,
  pause:"hover"
})

