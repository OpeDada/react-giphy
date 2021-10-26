import React, { useState } from 'react';
import Gif from './gif';
import GifList from './gifList';
import SearchBar from './searchBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // const gifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "gG6OcTSRWaSis",
      ids: ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedId: newId
    });
  }

  render() {
    const [ selectedId, ids] = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} />
        </div>
      </div>
    );
  }
};

export default App;
