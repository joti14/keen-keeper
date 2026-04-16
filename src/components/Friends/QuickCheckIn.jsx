'use client';
import { quickCheckInContext } from '@/context/quickCheckInContext';
import { useContext } from 'react';
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiMessage2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const QuickCheckIn = ({ friend }) => {
    const { quickCheckIn, setQuickCheckIn } = useContext(quickCheckInContext);
    // console.log(quickCheckIn, 'checked in');

    const { name, picture, days_since_contact, tags, status, bio, goal, next_due_date } = friend;

    const handleCheckIn = (type) => {
        const entry = {
            ...friend,
            checkInType: type,
            checkInTime: new Date().toISOString(),
        };
        setQuickCheckIn([...quickCheckIn, entry]);
        toast.success(`${type} with ${name}`);
    };
    
    return (
        <div>
            <h3 className="font-bold text-lg mb-3 text-[#244D3F]">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-1 sm:gap-3">
                <button
                    className="btn flex flex-col items-center h-16 sm:h-25 text-sm sm:text-xl text-gray-600 w-full"
                    onClick={() => handleCheckIn('Call')}
                >
                    <PiPhoneCallBold className='text-xl sm:text-3xl text-gray-800' /> Call
                </button>
                <button
                    className="btn flex flex-col items-center h-16 sm:h-25 text-sm sm:text-xl text-gray-600 w-full"
                    onClick={() => handleCheckIn('Text')}
                >
                    <RiMessage2Line className='text-xl sm:text-3xl text-gray-800' /> Text
                </button>
                <button
                    className="btn flex flex-col items-center h-16 sm:h-25 text-sm sm:text-xl text-gray-600 w-full"
                    onClick={() => handleCheckIn('Video')}
                >
                    <PiVideoCameraBold className='text-xl sm:text-3xl text-gray-800' /> Video
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;