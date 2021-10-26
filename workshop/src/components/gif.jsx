import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends React.Component {
  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`
    return (
      <img src={url} alt="gif" className="gif" />
    );
  }
}

export default Gif;
