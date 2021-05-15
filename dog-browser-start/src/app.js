import './css/style.css';
import './index.html';
import SearchImage from './searchImageComponent/searchImageComponent.js';


// separation of concerns

const mySearchImage = new SearchImage();
// mySearchImage.getImage();
mySearchImage.render();