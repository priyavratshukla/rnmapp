import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
import SearchBar from './SearchBar';

class CharactersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchValue : ''};
    this.renderCharacters = this.renderCharacters.bind(this)
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }
  componentDidMount() {
    this.props.fetchCharacters();
    console.log('fetchCharacters ====', this.props.fetchCharacters());
  }

  handleSearchTerm(term) {
    this.setState({searchValue : term});
  }

  renderCharacters() {
    let charactersResults = this.props.characters.results;
    const {characters} = this.props;
    let searchTerm = this.state.searchValue;

    // let filteredCharacters = _.filter( characters , character => {
    //   if(character.name.indexOf(searchTerm) > -1 ){
    //     return character;
    //   }
    // });
    console.log('type of characters', typeof characters);
    console.log('characters----', characters);

    console.log('props----',  this.props.characters.results);


    const filteredCharacters = Array.from(characters).filter( item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    console.log('filteredCharacters----', Array.from(characters));


    // return  _.map(filteredCharacters , (tile, i) => {
    //   return (
    //     <div className="four wide column" key={i}>
    //       <div className="col-sm-3 col-xs-12 btmspace-3">
    //       <article className="bgded overlay">
    //         <img src={tile.image}/>
    //         <div className="tile-heading">
    //           <h2>{tile.name}</h2>
    //           <p>
    //             <span>id :{tile.id} - created {tile.created} ago</span>
    //           </p>
    //         </div>
    //         <div className="tile-info">
    //           <p>
    //             <span>Status</span>
    //             <span>{tile.status}</span>
    //           </p>
    //           <p>
    //             <span>Species</span>
    //             <span>{tile.species}</span>
    //           </p>
    //           <p>
    //             <span>Gender</span>
    //             <span>{tile.gender}</span>
    //           </p>
    //           <p>
    //             <span>Origin</span>
    //             <span>Post-Apocalyptic {tile.origin.name}</span>
    //           </p>
    //           <p>
    //             <span>Last Location</span>
    //             <span>Post-Apocalyptic {tile.origin.name}</span>
    //           </p>
    //         </div>
    //       </article>
    //     </div>
    //     </div>
    //   );
    // })

    
    if(charactersResults){
        return charactersResults.map((tile, i) => {
            return (
                <div className="four wide column" key={i}>
                <div className="col-sm-3 col-xs-12 btmspace-3">
                <article className="bgded overlay">
                  <img src={tile.image}/>
                  <div className="tile-heading">
                    <h2>{tile.name}</h2>
                    <p>
                      <span>id :{tile.id} - created {tile.created} ago</span>
                    </p>
                  </div>
                  <div className="tile-info">
                    <p>
                      <span>Status</span>
                      <span>{tile.status}</span>
                    </p>
                    <p>
                      <span>Species</span>
                      <span>{tile.species}</span>
                    </p>
                    <p>
                      <span>Gender</span>
                      <span>{tile.gender}</span>
                    </p>
                    <p>
                      <span>Origin</span>
                      <span>Post-Apocalyptic {tile.origin.name}</span>
                    </p>
                    <p>
                      <span>Last Location</span>
                      <span>Post-Apocalyptic {tile.origin.name}</span>
                    </p>
                  </div>
                </article>
              </div>
              </div>
            );
        });
    }
  }

  render() {
    //return <div className="ui grid">{this.renderCharacters()}</div>;
    return <div>
      <SearchBar onSearchTermChange= { this.handleSearchTerm }/>
      <div className="ui grid">{this.renderCharacters()}</div>
    </div>
  }
}

const mapStateToProps = state => {
  return { characters: state.characters };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharactersList);
