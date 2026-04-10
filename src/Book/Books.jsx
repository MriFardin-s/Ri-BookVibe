import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';

const Books = () => {
     const {storedBooks,wishList} = useContext(BookContext)
    return (
        <div className='container mx-auto'>
           ReadList: {storedBooks.length} 
           <br />
           <br />
           WishList: {wishList.length}
        </div>
    );
};

export default Books;