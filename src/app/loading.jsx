import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <FadeLoader />
        </div>
    );
};

export default loading;