import React from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends React.Component {
  render() {
    const { ids, changeSelectedGif } = this.props;
    // const ids = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"];
    return (
      <div className="gif-list">
        { ids.map((id) => <Gif id={id} key={id} changeSelectedGif={changeSelectedGif} />) }
      </div>
    );
  }
}

export default GifList;
