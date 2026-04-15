'use client'; 
import { PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiMessage2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const QuickCheckIn = ({friend}) => {
    const { name, picture, days_since_contact, tags, status, bio, goal, next_due_date } = friend;
    return (
        <div>
            <h3 className="font-bold text-lg mb-3 text-[#244D3F]">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
                <button
                    href={'/timeline'}
                    onClick={() => toast.success(`Call with ${name}`)}
                    className="btn flex flex-col items-center h-25 text-xl text-gray-600 w-full"
                >
                    <PiPhoneCallBold className='text-3xl text-gray-800' /> Call
                </button>
                <button
                    href={'/timeline'}
                    onClick={() => toast.success(`Text with ${name}`)}
                    className="btn flex flex-col items-center h-25 text-xl text-gray-600 w-full"
                >
                    <RiMessage2Line className='text-3xl text-gray-800' /> Text
                </button>
                <button
                    href={'/timeline'}
                    onClick={() => toast.success(`Video with ${name}`)}
                    className="btn flex flex-col items-center h-25 text-xl text-gray-600 w-full"
                >
                    <PiVideoCameraBold className='text-3xl text-gray-800' /> Video
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;