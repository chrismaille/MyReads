import React, { Component } from "react";
import { BookList } from "../components/booklist";

export class CurrentlyReading extends Component {
  state = {
    title: "Currently Reading",
    books: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: {
          coverWidth: 128,
          coverHeight: 193,
          coverUrl:
            "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        }
      },
      {
        id: 2,
        title: "Ender's Game",
        author: "Orson Scott Card",
        cover: {
          coverWidth: 128,
          coverHeight: 188,
          coverUrl:
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        }
      }
    ]
  };

  render() {
    return <BookList title={this.state.title} books={this.state.books}/>;
  }
}
