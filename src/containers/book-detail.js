import React, {Component} from 'react';
import { connect } from 'react-redux';

//Now we hooked up the component to the redux store. the with
// mapStateToProps.

// We can now  make use of this.props.books inside the countainer

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div> Select any book to get started.</div>;
    }
    return (
      <div>
          <h3>Details voor deze boek : </h3>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    book: state.activeBook
  };
}

// exporting the container.
export default connect(mapStateToProps)(BookDetail);
