import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';

const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {

  const books = use(booksPromise)

  const { bookId: bookParamsId } = useParams();

  const {handleMarkAsRead,handleWishList} = useContext(BookContext)

  const expectedBook = books.find(book => book.bookId == bookParamsId)

  const { bookName, author, image, review, totalPages, category, tags, publisher, yearOfPublishing } = expectedBook;




  return (
    <div className="grid grid-cols-2  bg-base-100 shadow-sm container rounded-xl mx-auto my-5 ">
      <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl '>
        <img
          src={image} className='h-100 ' />
      </figure>
      <div className="card-body space-y-3 ">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>

        <span className='border-t border-b pt-2 pb-2' >{category}</span>

        <p>Review: {review} </p>
        <div className='flex items-center gap-2 mb-4' >
          {
            tags.map((tag, ind) =>
              <div key={ind} className="text-green-500 bg-green-50 px-4 py-1 rounded-full font-bold text-sm">
                {tag}
              </div>
            )
          }
        </div>
        <div className=" border-t space-y-3 pt-2">
          <div className='flex justify-between items-center gap-2' >
            <span>Number of page: </span><span>{totalPages}</span> </div>
          <div className='flex justify-between items-center gap-2' >
            <span>Publisher: </span><span>{publisher}</span> </div>
          <div className='flex justify-between items-center gap-2' >
            <span>Publish time: </span><span>{yearOfPublishing}</span> </div>

          <div className='flex items-center gap-2' >
            <button className="btn" onClick={()=> handleMarkAsRead(expectedBook)} >Mark as Read</button>
            <button className="btn btn-primary  " onClick={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;