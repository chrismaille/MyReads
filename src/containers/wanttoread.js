import React, { Component } from "react";
import { BookList } from "../components/booklist";

export class WantToRead extends Component {
  state = {
    title: "Want to Read",
    books: [
      {
        id: 20,
        title: "1776",
        author: "David McCullough",
        cover: {
          coverWidth: 128,
          coverHeight: 193,
          coverUrl:
            "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
        }
      },
      {
        id: 21,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        cover: {
          coverWidth: 128,
          coverHeight: 192,
          coverUrl:
            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
        }
      }
    ]
  };

  render() {
    return <BookList title={this.state.title} books={this.state.books}/>;
  }
}
