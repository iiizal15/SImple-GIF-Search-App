import { Gif } from './gif.js';

export class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  search(q, gifCount, callback) {
    let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((info) => {
        let gifsData = info.data;
        let gifs = gifsData.map((gif) => new Gif(gif)); // create new instances of Gif class
        callback(gifs);
      });
  }
}
