'use client'
import TimelineData from '@/components/TimelineData/TimelineData';
import { quickCheckInContext } from '@/context/quickCheckInContext';
import React, { useContext } from 'react';


const TimelinePage = () => {
    const { quickCheckIn, setQuickCheckIn } = useContext(quickCheckInContext);

    return (
        <div>
            {quickCheckIn.length === 0 ? (
                <h2 className='text-2xl font-bold flex justify-center items-center text-[#244D3F] p-30'>No one check-ins yet!</h2>
            ) : <div className='max-w-5xl mx-auto mt-20'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-3xl font-bold mb-2">Timeline</legend>
                    <select defaultValue="Filter timeline" className="select mb-5 text-gray-600">
                        <option disabled={true} className='text-gray-500'>Filter timeline</option>
                        <option className='font-bold'>Text</option>
                        <option className='font-bold'>Call</option>
                        <option className='font-bold'>Video</option>
                    </select>
                </fieldset>
                {[...quickCheckIn].reverse().map((entry, index) => (
                <TimelineData key={index} entry={entry} />
                ))}
            </div>

            }
        </div>
    );
};

export default TimelinePage;