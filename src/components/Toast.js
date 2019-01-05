import React from "react";

const ToastMsg = ({ data }) => {
  const bookTitle = data.updatedBook.title;
  const shelfTitle = data.shelf.title;
  return (
    <div>
      <div className="toast-msg">
        Moving book <b>{bookTitle}</b>
      </div>
      <div className="toast-msg">
        To Shelf <b>{shelfTitle}</b>
      </div>
    </div>
  );
};

export default ToastMsg;
