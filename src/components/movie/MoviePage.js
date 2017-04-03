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
        <button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">Add Movie</button>
        <hr/>

          {/* Traverse movie array  */}
          {this.props.movies.map((b, i) =>

            <div className="movieblock jumbotron" key={b.id}>
              <div className="container">
                  <div className="Row">
                    <div className="col-md-3">
                      <img className="movieposter pull-left" src={b.imageUrl}/>
                    </div>
                    <div className="col-md-6">
                      <h3 className="moviename">{b.name}</h3>
                      <p className="moviedescr">{b.descr}</p>
                    </div>

                </div>
              </div>
            </div>

           )}





            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Add Movie</h4>
                  </div>
                  <div className="modal-body">
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
                    Name: <input type="text" name="name" ref={node => titleInput = node}/><br/><br/>
                    Image URL: <input type="text" name="imageUrl" ref={node => imageUrlInput = node}/><br/><br/>
                    Description: <textarea type="text" name="descr" ref={node => descrInput = node}/><br/><br/>
                    <input type="submit" />
                  </form>
                  </div>

                </div>
              </div>
            </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    movieinfo: state.movieinfo
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




/*
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
        */
