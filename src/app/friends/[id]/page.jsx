import FriendsCard from '@/components/Friends/FriendsCard';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { PiArchive, PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiMessage2Line } from 'react-icons/ri';

const FriendsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3001/data.json/`);
    const data = await res.json();

    const friend = data.find((item) => item.id === Number(id));
    const { name, picture, days_since_contact, tags, status } = friend;

    return (
        <div className='py-10'>
            <div className='grid grid-cols-4 gap-3 max-w-5xl mx-auto'>
                <div className='row-span-2'>
                    <div>
                        <FriendsCard friend={friend}>
                            <p className='italic text-gray-400 font-medium'>"Former colleague, great mentor"</p>
                            <p className='text-gray-400 text-sm'>Preferred: email</p>
                        </FriendsCard>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-3">
                    <div className="card bg-base-100 shadow-sm text-center p-4 justify-center">
                        <h2 className="text-4xl font-bold text-[#244D3F]">{days_since_contact}</h2>
                        <p className="text-gray-400">Days Since Contact</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm text-center p-4 justify-center">
                        <h2 className="text-4xl font-bold text-[#244D3F]">30</h2>
                        <p className="text-gray-400">Goal (Days)</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm text-center p-4 justify-center">
                        <h2 className="text-4xl font-bold text-[#244D3F]">Feb 27, 2026</h2>
                        <p className="text-gray-400">Next Due</p>
                    </div>
                </div>
                <div className="col-span-3 card bg-base-100 shadow-sm p-4 justify-center">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg text-[#244D3F]">Relationship Goal</h3>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <p>Connect every <strong>30 days</strong></p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <button className="btn w-full"><HiOutlineBellSnooze className='text-xl' /> Snooze 2 Weeks</button>
                    <button className="btn w-full"><PiArchive className='text-xl' /> Archive</button>
                    <button className="btn w-full text-red-500"><FaRegTrashAlt className='text-xl' /> Delete</button>
                </div>
                <div className="col-span-3 card bg-base-100 shadow-sm p-4">
                    <h3 className="font-bold text-lg mb-3 text-[#244D3F]">Quick Check-In</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <button className="btn flex flex-col items-center h-25 text-xl text-gray-600"><PiPhoneCallBold className='text-3xl text-gray-800' /> Call</button>
                        <button className="btn flex flex-col items-center h-25 text-xl text-gray-600"><RiMessage2Line className='text-3xl text-gray-800' /> Text</button>
                        <button className="btn flex flex-col items-center h-25 text-xl text-gray-600"><PiVideoCameraBold className='text-3xl text-gray-800' />Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetailsPage;