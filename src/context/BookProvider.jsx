import React, { createContext, useEffect, useState } from 'react';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../Utilities/localDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState([]);

    const handleWishList = (currentBook) => {
        
        const isExistInReadList = storedBooks.find(book => book.bookId == currentBook.bookId);
        if (isExistInReadList) {
            alert('This book is already in your Read List!');
            return;
        }

       
        const isExistInWishList = wishList.find(book => book.bookId == currentBook.bookId);
        if (isExistInWishList) {
            alert('Already exists in Wishlist!');
        } else {
            setWishList([...wishList, currentBook]);
            alert(`${currentBook.bookName} added to Wishlist!`);
        }
    };

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            alert('This book is already in your Read List!');
        } else {
          
            addReadListToLocalDB(currentBook);
           
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} added to Read List!`);
        }
    };

    const data = {
        setStoredBooks,
        storedBooks,
        handleMarkAsRead,
        handleWishList,
        setWishList,
        wishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;