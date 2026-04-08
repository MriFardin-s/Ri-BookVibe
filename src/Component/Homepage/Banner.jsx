import React from 'react';
import bannerImg from '../../assets/hero_img.jpg'; 



const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-10">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Banner Book"
                />
                <div>
                    <h1 className="text-5xl font-bold leading-tight">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <button className="btn btn-success mt-8 text-white font-bold">
                        View The List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;