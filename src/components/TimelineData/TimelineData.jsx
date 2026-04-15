import React from 'react';
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiMessage2Line } from 'react-icons/ri';


const checkInIcons = {
    Call: <PiPhoneCallBold  />,
    Text: <RiMessage2Line  />,
    Video: <PiVideoCameraBold  />,
}

const TimelineData = ({ entry }) => {
    return (
            <div
                className='flex items-center gap-4 p-4 mb-3 bg-base-100 shadow-sm rounded-xl py-5'>
                <div className="text-4xl text-gray-500">
                    {checkInIcons[entry.checkInType]}
                </div>

                <div className="flex flex-col">
                    <p className="font-semibold text-[#244D3F] text-2xl mb-2">
                        <span className='font-bold'>{entry.checkInType}</span> with {entry.name}
                    </p>
                    <div className="text-lg text-gray-400">
                        {new Date(entry.checkInTime).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </div>
                </div>
            </div>
    );
};

export default TimelineData;