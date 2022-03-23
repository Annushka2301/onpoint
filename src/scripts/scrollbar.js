(function() {
  const container = document.querySelector('.slide-2__container');
  const viewport = document.querySelector('.slide-2__viewport');
  const contentBox = document.querySelector('.slide-2__content-box');
  const scrollbar = document.querySelector('.slide-2__scrollbar');
  const scroller = document.querySelector('.slide-2__scroller');
  const SCROLLER_HEIGHT_MIN = 30;
  let pressed = false;
  let viewportHeight;
  let contentHeight;

  function scrollbarInit () {
    viewportHeight = viewport.offsetHeight;
    contentHeight = contentBox.scrollHeight;
    if (viewportHeight >= contentHeight) {
      scrollbar.style = 'display: none';
      return;
    };

    const ratio = viewportHeight / contentHeight;

    createScrollbar(ratio);

    contentBox.addEventListener('scroll', (e) => {
      scroller.style.top = (contentBox.scrollTop * ratio) + 'px';
    });
    scroller.addEventListener('mousedown', e => {
      start = e.clientY;
      pressed = true;
    });

    document.addEventListener('mousemove', (e) => {
      if (pressed === false) return;

      let shiftScroller = start - e.clientY;
      scroller.style.top = (scroller.offsetTop - shiftScroller) + 'px';

      let shiftContent = scroller.offsetTop / ratio;
      const totalHeightScroller = scroller.offsetHeight + scroller.offsetTop;
      const maxOffsetScroller = viewportHeight - scroller.offsetHeight;

      if (scroller.offsetTop < 0) scroller.style.top = '0px';
      if (totalHeightScroller >= viewportHeight) {
        scroller.style.top = maxOffsetScroller + 'px';
      }

      contentBox.scrollTo(0, shiftContent);
      start = e.clientY;
    });
    document.addEventListener('mouseup', () => {
      pressed = false
    });
  };

  function createScrollbar(ratio) {
    scrollerHeight = parseInt(ratio * viewportHeight);
    scrollerHeight = (scrollerHeight <= SCROLLER_HEIGHT_MIN) ? SCROLLER_HEIGHT_MIN : scrollerHeight;
    scroller.style.height = scrollerHeight + 'px';
  }

  scrollbarInit();

})();
