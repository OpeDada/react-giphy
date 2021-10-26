import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  handleChange = (event) => {
    const { changeGifIds } = this.props;
    changeGifIds(event.currentTarget.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control
        form-search"
        placeholder="Search"
        onChange={this.handleChange}
      />
    );
  }
};

export default SearchBar;
