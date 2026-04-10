import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';



const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-6 border border-gray-100 cursor-pointer block hover:no-underline">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                <img className='h-41.5 object-contain'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body px-0 pb-0 text-black">
                <div className='flex items-center gap-3 mb-4' >
                    {
                         book.tags.map((tag, ind) =>
                            <div key={ind} className="text-green-500 bg-green-50 px-4 py-1 rounded-full font-bold text-sm">
                                {tag}
                            </div>
                        )
                    }
                </div>

                <h2 className="card-title font-bold text-2xl mb-2">
                    {book.bookName}
                </h2>
                <p className='font-medium text-gray-700 mb-4' >By: {book.author}</p>

                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-5 mt-auto">
                    <div className="font-medium text-gray-600">{book.category}</div>
                    <div className="font-medium flex gap-2 items-center text-gray-600">
                        {book.rating} <FaRegStar className='text-xl' /> 
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;;