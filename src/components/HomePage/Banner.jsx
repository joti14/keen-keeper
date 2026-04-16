import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]">
            <div className="hero-content text-center px-4 sm:px-6 md:px-8">
                <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Friends to keep close in your life</h1>
                    <p className="py-4 sm:py-5 md:py-6 text-gray-400 text-sm sm:text-base md:text-base max-w-xs sm:max-w-sm md:max-w-xl mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn btn-sm sm:btn-md bg-[#244D3F] text-white">+ Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;