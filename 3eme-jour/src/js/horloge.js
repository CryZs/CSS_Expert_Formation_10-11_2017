import '../scss/horloge.scss';

export class Horloge {
  /**
   * Le constructeur
   * @param {Element} container
   */
  constructor(container) {
    this._container = container;

  }

  start() {
    this._container.textContent = (new Date()).toLocaleTimeString();
    setInterval(() =>{
      this._container.textContent = (new Date()).toLocaleTimeString();
    }, 1000);
  }
}

