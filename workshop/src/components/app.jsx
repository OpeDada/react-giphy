import React, { useState } from 'react';
import Gif from './gif';
import GifList from './gifList';
import SearchBar from './searchBar';

const App = () => {
  // const gifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  const [ selectedGif, setSelectedGif] = useState("uGSL4LFUMQU")
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={GifList} />
      </div>
    </div>
  );
};

export default App;
