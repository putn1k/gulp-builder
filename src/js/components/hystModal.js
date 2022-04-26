const myModal = new HystModal({
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
});

(function initModal() {
  myModal.config.linkAttributeName = 'data-hystmodal';
  myModal.init();
})();
