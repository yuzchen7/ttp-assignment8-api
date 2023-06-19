// import logo from './logo.svg';
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './components/gifStyle.css';
import GifCard from './components/GifCard';
import SearchFile from './components/SearchFile';

const App = () => {
  const API_KEY = 'KpTBPaTzyqc99dZp4kZLYVPPxJsSxOp2';

  const [gifState, setGifState] = useState([]);

  const trendingGetImage = async () => {
    const datas = await getImage(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=9`);
    setGifState(datas);
  };

  const randomGetImage = async () => {
    const datas = await getImage(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    var datas_a = [];
    datas.title = "random gif"
    datas_a.push(datas);
    setGifState(datas_a);
  }

  const searchGetImage = async (keyword) => {
    // console.log(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${ API_KEY }`)
    const datas = await getImage(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}&limit=9`);
    // console.log(data)
    setGifState(datas);
  }

  const getImage = async (url) => {
    try {
      const res = await axios.get(url);
      // setGifState(res.data.data);
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <center>
          <SearchFile fun={searchGetImage} />
          <br />
          <button onClick={trendingGetImage}>Trending</button>
          &nbsp; &nbsp;
          <button onClick={randomGetImage}>Random</button>
        </center>
      </div>
      <div>
        <center>
          <GifCard data={gifState} />
        </center>
      </div>
    </>
  );
}

export default App;

