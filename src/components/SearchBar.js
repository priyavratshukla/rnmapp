import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { term : '' }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchCharacters();
    console.log('fetchCharacters in search ====', this.props.fetchCharacters());
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange( term );
   // console.log('search term---',event.target.value);
  }

  render() {
    return (<input value={this.state.term} onChange= {event => this.handleInputChange(event.target.value)}/>);
  }
}

const mapStateToProps = state => {
  return { term: state.term };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(SearchBar);

//export default SearchBar;
