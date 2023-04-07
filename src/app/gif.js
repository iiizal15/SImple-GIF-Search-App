export class Gif {
  constructor(gif) {
    this.gif = gif;
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.iframe = document.createElement('img');
    this.iframe.setAttribute('src', gif.images.downsized_medium.url);
    this.iframe.setAttribute('alt', gif.title);
  }

  load(callback) {
    this.iframe.onload = () => {
      if (callback) callback();
    };
    this.container.append(this.iframe);
    let copyBtn = document.createElement('button');
    copyBtn.innerText = 'Copy Link';
    copyBtn.onclick = () => {
      let copyLink = `https://media4.giphy.com/media/${this.gif.id}/giphy.mp4`;
      navigator.clipboard
        .writeText(copyLink)
        .then(() => {
          alert('GIF copied to clipboard');
        })
        .catch(() => {
          alert('GIF copied to clipboard');
          let hiddenInput = document.createElement('input');
          hiddenInput.setAttribute('type', 'text');
          document.body.appendChild(hiddenInput);
          hiddenInput.value = copyLink;
          hiddenInput.select();
          document.execCommand('copy');
          document.body.removeChild(hiddenInput);
        });
    };
    this.container.append(copyBtn);
  }
}
