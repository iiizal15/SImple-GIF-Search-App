export class Loader {
  constructor() {
    this.loader = document.querySelector('.loader');
    this.wrapper = document.querySelector('.wrapper');
    if (!this.loader) {
      throw new Error('Unable to find element with class "loader"');
    }
    if (!this.wrapper) {
      throw new Error('Unable to find element with class "wrapper"');
    }
  }

  show() {
    try {
      this.loader.style.display = 'block';
      this.wrapper.style.display = 'none';
    } catch (err) {
      console.error('Error showing loader:', err);
    }
  }

  hide() {
    try {
      this.loader.style.display = 'none';
      this.wrapper.style.display = 'grid';
    } catch (err) {
      console.error('Error hiding loader:', err);
    }
  }
}
