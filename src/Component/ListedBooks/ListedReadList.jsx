import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/bookCard';

const ListedReadList = ({ sortingType }) => {
    const { storedBooks } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState([]);

   useEffect(() => {
    
    let sortedData = [...storedBooks]; 

    if (sortingType === 'pages') {
      
        sortedData.sort((a, b) => Number(b.totalPages) - Number(a.totalPages));
    } 
    else if (sortingType === 'rating') {
        
        sortedData.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    setFilteredReadList(sortedData);
    
   
    // console.log("Sorted by:", sortingType, sortedData);
    
}, [sortingType, storedBooks]);

    if (filteredReadList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Read List data Found</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {filteredReadList.map((book) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;