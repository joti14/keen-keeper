'use client'
import TimelineData from '@/components/TimelineData/TimelineData';
import { quickCheckInContext } from '@/context/quickCheckInContext';
import React, { useContext, useState } from 'react';

const TimelinePage = () => {
    const { quickCheckIn } = useContext(quickCheckInContext);

    const [filter, setFilter] = useState('All');

    const filteredCheckIns = filter === 'All'
        ? [...quickCheckIn].reverse()
        : [...quickCheckIn].reverse().filter(entry => entry.checkInType === filter);

    return (
        <div>
            {quickCheckIn.length === 0 ? (
                <h2 className='text-2xl font-bold flex justify-center items-center text-[#244D3F] p-30'>
                    No one check-ins yet!
                </h2>
            ) : (
                <div className='max-w-5xl mx-auto mt-20'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-3xl font-bold mb-2">
                            Timeline
                        </legend>

                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="select mb-5 text-gray-600"
                        >
                            <option value="All">All</option>
                            <option value="Call" className='font-bold'>Call</option>
                            <option value="Text" className='font-bold'>Text</option>
                            <option value="Video" className='font-bold'>Video</option>
                        </select>
                    </fieldset>

                    {filteredCheckIns.length === 0 ? (
                        <p className='text-gray-400 text-lg'>
                            No {filter} check-ins found!
                        </p>
                    ) : (
                        filteredCheckIns.map((entry, index) => (
                            <TimelineData key={index} entry={entry} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default TimelinePage;