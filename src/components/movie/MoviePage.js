// ./src/components/movie/MoviePage.js
import React from 'react';
import { connect } from 'react-redux';
import * as movieActions from '../../actions/movieActions';

class Movie extends React.Component{
  constructor(props){
    // Pass props back to parent
    super(props);
  }

  // Submit book handler
  submitMovie(input){
    this.props.createMovie(input);
  }

  render(){
    // Title input tracker
    let titleInput,imageUrlInput,descrInput;
    // return JSX
    return(
      <div>
        <h3>Movie List</h3>

          {/* Traverse books array  */}
          {this.props.movies.map((b, i) =>
            <div className="jumbotron" key={b.id}>
            <h3>{b.name}</h3>
            <img src={b.imageUrl}/>
            <p>{b.descr}</p>

            </div>

           )}

        <div>
          <h3>Movies Form</h3>
          <form onSubmit={e => {
            // Prevent request
            e.preventDefault();
            // Assemble inputs
            var input = {name: titleInput.value,
                        imageUrl: imageUrlInput.value,
                        descr: descrInput.value};
            // Call handler
            this.submitMovie(input);
            // Reset form
            e.target.reset();
          }}>
            Name: <input type="text" name="name" ref={node => titleInput = node}/>
            Image: <input type="text" name="imageUrl" ref={node => imageUrlInput = node}/>
            Description: <input type="text" name="descr" ref={node => descrInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    movies: state.movies
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createMovie: movie => dispatch(movieActions.createMovie(movie))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
