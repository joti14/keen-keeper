import React from 'react';

const Stats = ({friend}) => {
    const totalFriends = friend?.length || 0
    const onTrack = friend?.filter(f=> f.status === 'On-Track').length
    
    const statsData = [
        { value: totalFriends, label: 'Total Friends' },
        { value: onTrack, label: 'On Track' },
        { value: 6, label: 'Need Attention' },
        { value: 12, label: 'Interations This Month' },
    ]
    return (
        <div className='bg-base-200 pb-6 sm:pb-8 md:pb-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 text-center'>
                    {
                        statsData.map((stat, index) => (
                            <div key={index}
                                className='bg-white rounded-xl shadow-sm p-3 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3'>
                                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#244D3F]'>{stat.value}</h2>
                                <p className='text-gray-400 text-sm sm:text-base md:text-lg'>{stat.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='border border-gray-200 my-6 sm:my-8 md:my-10'></div>
            </div>
        </div>
    );
};

export default Stats;