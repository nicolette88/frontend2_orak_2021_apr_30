import '../css/searchImageComponent.css';


class SearchImage {
  async getImages(dogbreed) {

    if (!dogbreed) {
      window.alert('Nem lett beírva semmi a keresőbe, nem tudunk keresni!');
      // megállítjuk a getImages fügvény futását
      return;
    }
    let urlString = '';
    dogbreed = dogbreed.split(' ');
    // a dogbreed változó most már egy tömb!
    if (dogbreed.length === 1) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[0]}/images`;
    } else if (dogbreed.length === 2) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[1]}/${dogbreed[0]}/images`;
    }
    const response = await fetch(urlString);
    const data = await response.json();
    const image = document.createElement('img');
    // a data.message tömbből 1 véletlenszerű elemet kiválasztunk
    image.src = data.message[Math.floor(Math.random() * data.message.length)];
    document.querySelector('#content').appendChild(image);
    console.log(data);
  }
  // megjeleníti a keresőt:
  render() {
    const markup = `
    <form class="dog-search">
      <span class="search-icon"></span>
      <input type="text" id="dogSearchInput">
        <button>Search</button>
    </form>
    `;
    document.querySelector('#header').insertAdjacentHTML('beforeend', markup);
    // az arrow functionnek nincs saját this kulcsszava, tehát az arrow function-ön belül a this ugyanazt fogja jelenteni, mint azon kvül (a class-t amiben vagyunk)
    // console.log(this);
    // const self = this;
    document.querySelector('.dog-search button').addEventListener('click', (event) => {
      event.preventDefault();
      // console.log(this);
      // console.log(event);
      // self.getImage();
      const searchTerm = document.querySelector('#dogSearchInput').value;
      this.getImages(searchTerm);
    });
  }
}

export default SearchImage;
