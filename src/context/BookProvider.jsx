import React, { createContext, useState } from 'react';



export const BookContext = createContext ();

 const BookProvider = ({children}) => {


  const [storedBooks, setStoredBooks] = useState([])
  const [wishList, setWishList] = useState([])


    const handleWishList = (currentBook) => {
    //step.1 store to id or book object
    //step.2 where to store
    //step.3 array or collection
    //step.4 if the book is already exist then show a alert or toast
    //step.5 if not then add the book in the array or collection

    const isExistInReadList = storedBooks.find(book => book.bookId == currentBook.bookId)
    if(isExistInReadList){
        alert('this book is already in Read List')
        return;
    }
    const isExistBook = wishList.find(book => book.bookId == currentBook.bookId )
    if(isExistBook){
      alert('already exist')

    }
    else{
      setWishList([...wishList, currentBook])
      alert(`${currentBook.bookName} is added to list `)
    }


  }

  const handleMarkAsRead = (currentBook) => {
    //step.1 store to id or book object
    //step.2 where to store
    //step.3 array or collection
    //step.4 if the book is already exist then show a alert or toast
    //step.5 if not then add the book in the array or collection
    const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId )
    if(isExistBook){
      alert('already exist')

    }
    else{
      setStoredBooks([...storedBooks, currentBook])
      alert(`${currentBook.bookName} is added to list `)
    }


  }

  const data ={
    setStoredBooks,storedBooks, handleMarkAsRead,handleWishList, setWishList, wishList
  }
        return <BookContext.Provider value={data} >
            {children}
        </BookContext.Provider>
};

export default BookProvider;