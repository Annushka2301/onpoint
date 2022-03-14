"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var container = document.querySelector('.slide-2__container');

  var ScrollBox = /*#__PURE__*/function () {
    function ScrollBox(container) {
      _classCallCheck(this, ScrollBox);

      this.viewport = container.querySelector('.slide-2__viewport');
      this.contentBox = container.querySelector('.slide-2__content-box');
      this.pressed = false;
      this.init();
    }

    _createClass(ScrollBox, [{
      key: "init",
      value: function init() {
        this.viewportHeight = this.viewport.offsetHeight;
        this.contentHeight = this.contentBox.scrollHeight;
        if (this.viewportHeight >= this.contentHeight) return;
        this.max = this.viewport.clientHeight - this.contentHeight;
        this.ratio = this.viewportHeight / this.contentHeight;
        this.createScrollbar();
        this.registerEventsHandler();
      }
    }, {
      key: "createScrollbar",
      value: function createScrollbar() {
        var scrollbar = document.createElement('div'),
            scroller = document.createElement('div');
        scrollbar.className = 'scrollbar';
        scroller.className = 'scroller';
        scrollbar.appendChild(scroller);
        this.viewport.append(scrollbar);
        this.scroller = this.viewport.querySelector('.scroller');
        this.scrollerHeight = parseInt(this.ratio * this.viewportHeight);
        this.scrollerHeight = this.scrollerHeight <= ScrollBox.SCROLLER_HEIGHT_MIN ? ScrollBox.SCROLLER_HEIGHT_MIN : this.scrollerHeight;
        this.scroller.style.height = this.scrollerHeight + 'px';
      }
    }, {
      key: "registerEventsHandler",
      value: function registerEventsHandler(e) {
        var _this = this;

        this.contentBox.addEventListener('scroll', function () {
          _this.scroller.style.top = _this.contentBox.scrollTop * _this.ratio + 'px';
        });
        this.scroller.addEventListener('mousedown', function (e) {
          _this.start = e.clientY;
          _this.pressed = true;
        });
        document.addEventListener('mousemove', this.drop.bind(this));
        document.addEventListener('mouseup', function () {
          return _this.pressed = false;
        });
      }
    }, {
      key: "drop",
      value: function drop(e) {
        e.preventDefault();
        if (this.pressed === false) return;
        var shiftScroller = this.start - e.clientY;
        this.scroller.style.top = this.scroller.offsetTop - shiftScroller + 'px';
        var shiftContent = this.scroller.offsetTop / this.ratio;
        var totalheightScroller = this.scroller.offsetHeight + this.scroller.offsetTop;
        var maxOffsetScroller = this.viewportHeight - this.scroller.offsetHeight;
        if (this.scroller.offsetTop < 0) this.scroller.style.top = '0px';
        if (totalheightScroller >= this.viewportHeight) this.scroller.style.top = maxOffsetScroller + 'px';
        this.contentBox.scrollTo(0, shiftContent);
        this.start = e.clientY;
      }
    }]);

    return ScrollBox;
  }();

  _defineProperty(ScrollBox, "SCROLLER_HEIGHT_MIN", 25);

  var scrollbox = new ScrollBox(container);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGJhci5qcyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJTY3JvbGxCb3giLCJ2aWV3cG9ydCIsImNvbnRlbnRCb3giLCJwcmVzc2VkIiwiaW5pdCIsInZpZXdwb3J0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm1heCIsImNsaWVudEhlaWdodCIsInJhdGlvIiwiY3JlYXRlU2Nyb2xsYmFyIiwicmVnaXN0ZXJFdmVudHNIYW5kbGVyIiwic2Nyb2xsYmFyIiwiY3JlYXRlRWxlbWVudCIsInNjcm9sbGVyIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJzY3JvbGxlckhlaWdodCIsInBhcnNlSW50IiwiU0NST0xMRVJfSEVJR0hUX01JTiIsInN0eWxlIiwiaGVpZ2h0IiwiZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b3AiLCJzY3JvbGxUb3AiLCJzdGFydCIsImNsaWVudFkiLCJkcm9wIiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic2hpZnRTY3JvbGxlciIsIm9mZnNldFRvcCIsInNoaWZ0Q29udGVudCIsInRvdGFsaGVpZ2h0U2Nyb2xsZXIiLCJtYXhPZmZzZXRTY3JvbGxlciIsInNjcm9sbFRvIiwic2Nyb2xsYm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFXO0FBQ1YsTUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWxCOztBQURVLE1BR0pDLFNBSEk7QUFNVix1QkFBWUgsU0FBWixFQUF1QjtBQUFBOztBQUN0QixXQUFLSSxRQUFMLEdBQWdCSixTQUFTLENBQUNFLGFBQVYsQ0FBd0Isb0JBQXhCLENBQWhCO0FBQ0EsV0FBS0csVUFBTCxHQUFrQkwsU0FBUyxDQUFDRSxhQUFWLENBQXdCLHVCQUF4QixDQUFsQjtBQUNBLFdBQUtJLE9BQUwsR0FBZSxLQUFmO0FB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SUUsWUFBWSxHQUFHLEtBQUtwQixRQUFMLENBQWNtQixTQUFkLEdBQTBCLEtBQUt4QixLQUFsRDtBQUNBLFlBQU0wQixtQkFBbUIsR0FBRyxLQUFLckIsUUFBTCxDQUFjVixZQUFkLEdBQTZCLEtBQUtVLFFBQUwsQ0FBY21CLFNBQXZFO0FBQ0EsWUFBTUcsaUJBQWlCLEdBQUcsS0FBS2pDLGNBQUwsR0FBc0IsS0FBS1csUUFBTCxDQUFjVixZQUE5RDtBQUVBLFlBQUksS0FBS1UsUUFBTCxDQUFjbUIsU0FBZCxHQUEwQixDQUE5QixFQUFpQyxLQUFLbkIsUUFBTCxDQUFjTyxLQUFkLENBQW9CSSxHQUFwQixHQUEwQixLQUExQjtBQUNqQyxZQUFJVSxtQkFBbUIsSUFBSSxLQUFLaEMsY0FBaEMsRUFBZ0QsS0FBS1csUUFBTCxDQUFjTyxLQUFkLENBQW9CSSxHQUFwQixHQUEwQlcsaUJBQWlCLEdBQUcsSUFBOUM7QUFFaEQsYUFBS3BDLFVBQUwsQ0FBZ0JxQyxRQUFoQixDQUF5QixDQUF6QixFQUE0QkgsWUFBNUI7QUFDQSxhQUFLUCxLQUFMLEdBQWFKLENBQUMsQ0FBQ0ssT0FBZjtBQUNBO0FBdEVTOztBQUFBO0FBQUE7O0FBQUEsa0JBR0o5QixTQUhJLHlCQUltQixFQUpuQjs7QUF5RVgsTUFBTXdDLFNBQVMsR0FBRyxJQUFJeEMsU0FBSixDQUFjSCxTQUFkLENBQWxCO0FBQ0EsQ0ExRUQiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS0yX19jb250YWluZXInKTtcblxuICBjbGFzcyBTY3JvbGxCb3gge1xuXHRcdHN0YXRpYyBTQ1JPTExFUl9IRUlHSFRfTUlOID0gMjU7XG5cblx0XHRjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblx0XHRcdHRoaXMudmlld3BvcnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnNsaWRlLTJfX3ZpZXdwb3J0Jyk7XG5cdFx0XHR0aGlzLmNvbnRlbnRCb3ggPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnNsaWRlLTJfX2NvbnRlbnQtYm94Jyk7XG5cdFx0XHR0aGlzLnByZXNzZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdH1cblxuXHRcdGluaXQoKSB7XG5cdFx0XHR0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmNvbnRlbnRCb3guc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0aWYgKHRoaXMudmlld3BvcnRIZWlnaHQgPj0gdGhpcy5jb250ZW50SGVpZ2h0KSByZXR1cm47XG5cblx0XHRcdHRoaXMubWF4ID0gdGhpcy52aWV3cG9ydC5jbGllbnRIZWlnaHQgLSB0aGlzLmNvbnRlbnRIZWlnaHQ7XG5cdFx0XHR0aGlzLnJhdGlvID0gdGhpcy52aWV3cG9ydEhlaWdodCAvIHRoaXMuY29udGVudEhlaWdodDtcblx0XHRcdHRoaXMuY3JlYXRlU2Nyb2xsYmFyKCk7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRzSGFuZGxlcigpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZVNjcm9sbGJhcigpIHtcblx0XHRcdGNvbnN0IHNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0XHQgIHNjcm9sbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHRcdHNjcm9sbGJhci5jbGFzc05hbWUgPSAnc2Nyb2xsYmFyJztcblx0XHRcdHNjcm9sbGVyLmNsYXNzTmFtZSA9ICdzY3JvbGxlcic7XG5cblx0XHRcdHNjcm9sbGJhci5hcHBlbmRDaGlsZChzY3JvbGxlcik7XG5cdFx0XHR0aGlzLnZpZXdwb3J0LmFwcGVuZChzY3JvbGxiYXIpO1xuXG5cdFx0XHR0aGlzLnNjcm9sbGVyID0gdGhpcy52aWV3cG9ydC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsZXInKTtcblx0XHRcdHRoaXMuc2Nyb2xsZXJIZWlnaHQgPSBwYXJzZUludCh0aGlzLnJhdGlvICogdGhpcy52aWV3cG9ydEhlaWdodCk7XG5cdFx0XHR0aGlzLnNjcm9sbGVySGVpZ2h0ID0gKHRoaXMuc2Nyb2xsZXJIZWlnaHQgPD0gU2Nyb2xsQm94LlNDUk9MTEVSX0hFSUdIVF9NSU4pID8gU2Nyb2xsQm94LlNDUk9MTEVSX0hFSUdIVF9NSU4gOiB0aGlzLnNjcm9sbGVySGVpZ2h0O1xuXHRcdFx0dGhpcy5zY3JvbGxlci5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbGVySGVpZ2h0ICsgJ3B4Jztcblx0XHR9XG5cblx0XHRyZWdpc3RlckV2ZW50c0hhbmRsZXIoZSkge1xuXHRcdFx0dGhpcy5jb250ZW50Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5zdHlsZS50b3AgPSAodGhpcy5jb250ZW50Qm94LnNjcm9sbFRvcCAqIHRoaXMucmF0aW8pICsgJ3B4Jztcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXJ0ID0gZS5jbGllbnRZO1xuXHRcdFx0XHR0aGlzLnByZXNzZWQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJvcC5iaW5kKHRoaXMpKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB0aGlzLnByZXNzZWQgPSBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0ZHJvcChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGhpcy5wcmVzc2VkID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0XHRsZXQgc2hpZnRTY3JvbGxlciA9IHRoaXMuc3RhcnQgLSBlLmNsaWVudFk7XG5cdFx0XHR0aGlzLnNjcm9sbGVyLnN0eWxlLnRvcCA9ICh0aGlzLnNjcm9sbGVyLm9mZnNldFRvcCAtIHNoaWZ0U2Nyb2xsZXIpICsgJ3B4JztcblxuXHRcdFx0bGV0IHNoaWZ0Q29udGVudCA9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0VG9wIC8gdGhpcy5yYXRpbztcblx0XHRcdGNvbnN0IHRvdGFsaGVpZ2h0U2Nyb2xsZXIgPSB0aGlzLnNjcm9sbGVyLm9mZnNldEhlaWdodCArIHRoaXMuc2Nyb2xsZXIub2Zmc2V0VG9wO1xuXHRcdFx0Y29uc3QgbWF4T2Zmc2V0U2Nyb2xsZXIgPSB0aGlzLnZpZXdwb3J0SGVpZ2h0IC0gdGhpcy5zY3JvbGxlci5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdGlmICh0aGlzLnNjcm9sbGVyLm9mZnNldFRvcCA8IDApIHRoaXMuc2Nyb2xsZXIuc3R5bGUudG9wID0gJzBweCc7XG5cdFx0XHRpZiAodG90YWxoZWlnaHRTY3JvbGxlciA+PSB0aGlzLnZpZXdwb3J0SGVpZ2h0KSB0aGlzLnNjcm9sbGVyLnN0eWxlLnRvcCA9IG1heE9mZnNldFNjcm9sbGVyICsgJ3B4JztcblxuXHRcdFx0dGhpcy5jb250ZW50Qm94LnNjcm9sbFRvKDAsIHNoaWZ0Q29udGVudCk7XG5cdFx0XHR0aGlzLnN0YXJ0ID0gZS5jbGllbnRZO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHNjcm9sbGJveCA9IG5ldyBTY3JvbGxCb3goY29udGFpbmVyKTtcbn0pKCk7XG4iXSwiZmlsZSI6InNjcm9sbGJhci5qcyJ9
