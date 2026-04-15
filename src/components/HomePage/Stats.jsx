import React from 'react';

const Stats = ({friend}) => {
    const totalFriends = friend?.length || 0
    const onTrack = friend?.filter(f=> f.status === 'On-Track').length
    
    const statsData = [
        { value: totalFriends, label: 'Total Friends' },
        { value: onTrack, label: 'On Track' },
        { value: 10, label: 'Need Attention' },
        { value: 10, label: 'Interations This Month' },
    ]
    return (
        <div className='bg-base-200 pb-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-4 gap-5 text-center'>
                    {
                        statsData.map((stat, index) => (
                            <div key={index}
                                className='bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3'>
                                <h2 className='text-2xl font-semibold'>{stat.value}</h2>
                                <p className='text-gray-400 text-lg'>{stat.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='border border-gray-200 my-10'></div>
            </div>
        </div>
    );
};

export default Stats;