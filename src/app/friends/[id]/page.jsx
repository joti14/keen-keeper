import FriendsCard from '@/components/Friends/FriendsCard';
import QuickCheckIn from '@/components/Friends/QuickCheckIn';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { PiArchive } from 'react-icons/pi';


const FriendsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://keen-keeper-orcin.vercel.app//data.json/`);
    const data = await res.json();

    const friend = data.find((item) => item.id === Number(id));
    const { name, picture, days_since_contact, tags, status, bio, goal, next_due_date } = friend;

    return (
        <div className='py-4 sm:py-6 lg:py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-6xl mx-auto items-stretch px-4 lg:px-0'>

                <div className='col-span-1 sm:col-span-2 flex flex-col gap-3'>
                    <FriendsCard friend={friend}>
                        <p className='italic text-gray-400 font-medium'>"{bio}"</p>
                        <p className='text-gray-400 text-sm'>Preferred: email</p>
                    </FriendsCard>
                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-2">
                        <button className="btn w-full"><HiOutlineBellSnooze className='text-xl' /> Snooze 2 Weeks</button>
                        <button className="btn w-full"><PiArchive className='text-xl' /> Archive</button>
                        <button className="btn w-full text-red-500"><FaRegTrashAlt className='text-xl' /> Delete</button>
                    </div>
                </div>

                <div className='col-span-1 sm:col-span-3 flex flex-col gap-3'>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="card bg-base-100 shadow-sm text-center p-2 sm:p-4 justify-center h-full">
                            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#244D3F]">{days_since_contact}</h2>
                            <p className="text-gray-400">Days Since Contact</p>
                        </div>
                        <div className="card bg-base-100 shadow-sm text-center p-2 sm:p-4 justify-center h-full">
                            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#244D3F]">{goal}</h2>
                            <p className="text-gray-400">Goal (Days)</p>
                        </div>
                        <div className="card bg-base-100 shadow-sm text-center p-2 sm:p-4 justify-center h-full">
                            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#244D3F]">{new Date(next_due_date).toLocaleDateString('en-us', {
                                month: 'short', day: 'numeric', year: 'numeric'
                            })}</h2>
                            <p className="text-gray-400">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="card bg-base-100 shadow-sm p-4 justify-center h-full">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg text-[#244D3F]">Relationship Goal</h3>
                            <button className="btn btn-sm">Edit</button>
                        </div>
                        <p>Connect every <strong>30 days</strong></p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="card bg-base-100 shadow-sm p-4 h-full">
                        <QuickCheckIn friend={friend} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendsDetailsPage;