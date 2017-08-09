import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div className="col-md-8">
        <h3>Details:</h3>
        { this.props.book.title }
        <div>Author: { this.props.book.author }</div>
        <div>Pages: { this.props.book.pages }</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
