import React from 'react';

class Gif extends React.Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
