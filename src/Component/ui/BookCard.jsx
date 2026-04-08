import React from 'react';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className='p-6'>
                                <img className='rounded-xl h-62.5'
                                    src={book.image}
                                    alt={book.bookName} />
                            </figure>
                            <div className="card-body">
                                <div className='flex items-center gap-2' >
                                    {
                                        book.tags.map((tag, ind) =>
                                            <div key={ind} className="text-green-500 bg-green-100 font-bold ">{tag}</div>
                                        )
                                    }
                                </div>

                                <h2 className="card-title">

                                    <h2 className='font-bold text-xl' >{book.bookName}</h2>

                                </h2>
                                <p className='font-semibold text-lg' >{book.author}</p>

                                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                                    <div className="font-semibold">{book.category}</div>
                                    <div className="font-semibold flex gap-2 items-center">{book.rating} <FaRegStar /> </div>
                                </div>
                            </div>
                        </div>
    );
};

export default BookCard;