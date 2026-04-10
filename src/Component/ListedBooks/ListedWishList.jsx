import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/bookCard';

const ListedWishList = ({sortingType}) => {
      const { wishList} = useContext(BookContext)

        const [filteredWishList, setFilteredWishList] = useState(wishList)
           useEffect(()=>{
              if(wishList){
                  if(sortingType === 'pages'){
                      const sortedData = [...wishList].sort((a,b)=> a.totalPages - b.totalPages,)
                      setFilteredWishList(sortedData)
                  }else if (sortingType === 'rating'){
                       const sortedData = [...wishList].sort((a,b)=> a.rating - b.rating,)
                      setFilteredWishList(sortedData)
      
                  }
              }
           },[sortingType, wishList]
          )

      if(filteredWishList.length === 0 ){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center' >
            <h2 className='font-bold text-3xl ' >No Wish List data Found</h2>
        </div>
      }
    return (
       <div>
         <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {
                wishList.map((book,ind) => <BookCard key={ind} book ={book} />)
            }
        </div>
       </div>
    );
};

export default ListedWishList;