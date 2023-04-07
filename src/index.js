import './styles/style.scss';
import './component/gift-search.js';
import { Loader } from './app/loader.js';
import { Api } from './app/api.js';

// Initialize the loader and API with your API key
const loader = new Loader();
const api = new Api('a1YuL59U8546gFwn16tK2y0E5FzRh5LD');

// Define a function to generate GIFs and display them on the page
const generateGif = () => {
  // Show the loader while the GIFs are being loaded
  loader.show();

  // Get the search query from the input field or use a default query
  const q = document.getElementById('search-box').value || 'happy';

  // Set the number of GIFs to generate
  const gifCount = 15;

  // Use the API to search for GIFs and pass a callback function to display them on the page
  api.search(q, gifCount, (gifs) => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    gifs.forEach((gif) => {
      // Load each GIF and hide the loader when all GIFs have loaded
      gif.load(() => {
        loader.hide();
      });
      wrapper.append(gif.container);
    });
  });
};

// Add an event listener to the submit button to generate GIFs on click
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', generateGif);

// Generate GIFs when the page loads
window.addEventListener('load', generateGif);

// module.exports = { generateGif, submitBtn };
export { generateGif, submitBtn };
