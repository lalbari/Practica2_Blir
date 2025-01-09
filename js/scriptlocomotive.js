const scroll = new LocomotiveScroll({
    el: document.querySelector("#body"),
    smooth: true,
    lerp: 0.1
});

  const image = document.querySelector('.scroll-image');

  scroll.on('scroll', function () {
      const scrollPosition = scroll.scroll.instance.scroll.y;
      const scale = Math.max(1 - (scrollPosition / 1000), 0.5);
      image.style.transform = `scale(${scale})`;
  });

window.addEventListener('load', () => {
    scroll.update();
});
