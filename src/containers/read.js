import React, { Component } from "react";
import { BookList } from "../components/booklist";

export class Read extends Component {
  state = {
    title: "Read",
    books: [
      {
        id: 10,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: {
          coverWidth: 128,
          coverHeight: 192,
          coverUrl:
            "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
        }
      },
      {
        id: 11,
        title: "Oh, the Places You'll Go!",
        author: "Seuss",
        cover: {
          coverWidth: 128,
          coverHeight: 174,
          coverUrl:
            "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
        }
      },
      {
        id: 12,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        cover: {
          coverWidth: 128,
          coverHeight: 192,
          coverUrl:
            "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
        }
      }
    ]
  };

  render() {
    return <BookList title={this.state.title} books={this.state.books}/>;
  }
}
