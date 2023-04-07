class GifSearch extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="box">
        <!-- logo -->
        <div class="logo">
          <div class="container">
            <p>GIF<span>SearchApp.</span></p>
          </div>
        </div>
        <!-- end of logo -->
        <div class="search-container">
          <input type="text" id="search-box" value="happy" placeholder="Masukkan GIF yang Anda Cari..." />
          <button id="submit-btn">Submit</button>
        </div>
        <div class="loader"></div>
        <div class="wrapper"></div>
      </div>
    `;
  }
}
customElements.define('gif-search', GifSearch);
