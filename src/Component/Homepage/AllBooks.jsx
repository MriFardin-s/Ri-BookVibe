import React, { use } from 'react';

import BookCard from '../ui/bookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json())


const AllBooks = () => {
    const books = use(booksPromise)
    return (
        <div className='my-12 container mx-auto' >
            <h2 className='font-bold text-3xl text-center mb-6' >Books</h2>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-20' >
                {
                    books.map((book, index) => {
                        return <BookCard key={index} book={book} />

                    })
                }
            </div>

        </div>
    );
};

export default AllBooks;