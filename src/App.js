import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage.js';
import MainPage from './MainPage.js';
import Book from './Book.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import './App.css'

class BooksApp extends React.Component {
	state = {
    	books: []
    }

	componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({ books})
                                      
           })
		}

	changeShelf = (book, shelf) => {
    
        BooksAPI.update(book, shelf).then(() => 
        {         

          BooksAPI.getAll().then((books) => {
            this.setState({ books: books})
                                          
               })

        }    
        )
                 
        
   
        
     
      
        

      
    }
  
  render() {
 
    return (
      <div className="app">
      <Route exact path="/" render={() => (
         <MainPage
         books={this.state.books}
         changeShelf={this.changeShelf}
     />

      )}/>
     
     <Route exact path="/search" render={() => (

          <SearchPage
          changeShelf={this.changeShelf}
          books={this.state.books}
          />

          )}/>

      </div>
    )
  }
}

export default BooksApp
