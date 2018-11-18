import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import Book from './Book.js';
import Shelf from './Shelf.js';


class MainPage extends Component {

	render(){
       console.log(this.props.books);
      return (
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            
             <Shelf
                title={"Currently Reading"}
                shelfName={"currentlyReading"}
                books={this.props.books}
                changeShelf={this.props.changeShelf}
                />
                 <Shelf
                title="Want to Read"
                shelfName={"wantToRead"}
                books={this.props.books}
                changeShelf={this.props.changeShelf}
                />
                 <Shelf
                title="Read"
                shelfName={"read"}
                books={this.props.books}
                changeShelf={this.props.changeShelf}
                />
            </div>
            <div className="open-search">
            <Link
            to="/search"
           >Add a book</Link>
            
            </div>
          </div>
    )
    };
}

export default MainPage;