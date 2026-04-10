import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/bookCard';

const ListedReadList = ({sortingType}) => {

     const { storedBooks } = useContext(BookContext)
    const [filteredReadList, setFilteredReadList] = useState(storedBooks)
     useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...storedBooks].sort((a,b)=> a.totalPages - b.totalPages,)
                setFilteredReadList(sortedData)
            }else if (sortingType === 'rating'){
                 const sortedData = [...storedBooks].sort((a,b)=> a.rating - b.rating,)
                setFilteredReadList(sortedData)

            }
        }
     },[sortingType, storedBooks]
    )

     if(filteredReadList.length === 0 ){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center' >
            <h2 className='font-bold text-3xl ' >No Read List data Found</h2>
        </div>
      }
   
    return (
       <div>
         <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {
                storedBooks.map((book,ind) => <BookCard key={ind} book ={book} />)
            }
        </div>
       </div>
    );
};

export default ListedReadList;