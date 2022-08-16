const initModal = (name, handler) => {
  name.config.linkAttributeName = handler;
  name.init();
}
const basedModalOptions = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};
const simpleModal = new HystModal(basedModalOptions);
