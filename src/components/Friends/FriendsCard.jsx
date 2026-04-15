import Image from 'next/image';
import React from 'react';

const FriendsCard = ({ friend, children }) => {
    // console.log('children', children)
    const { id, name, picture, days_since_contact, tags, status } = friend;
    return (
        <div>

            <div className="card bg-base-100 shadow-sm  hover:shadow-md 
                hover:scale-105 transition-all cursor-pointer">
                <figure className="px-10 pt-10">
                    <Image
                        src={picture}
                        alt={name}
                        height='100'
                        width='100'
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-semibold">{name}</h2>
                    <p className='text-gray-400'>{days_since_contact}d ago</p>
                    <div className="flex flex-col items-center gap-2">
                        <div className='flex gap-2'>
                            {
                                tags.map((tag, index) =>
                                    <div key={index} className="badge font-medium rounded-full text-gray-600 bg-[#CBFADB]">{tag.toUpperCase()}</div>)
                            }
                        </div>
                        <div className={`badge font-medium rounded-full ${status === 'On-Track' ? 'bg-[#244D3F] text-white border-0' :
                            status === 'Almost Due' ? 'bg-[#EFAD44] text-white border-0' :
                                status === 'Overdue' ? 'bg-[#EF4444] text-white border-0' :
                                    ''
                            }`}>
                            {status}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FriendsCard;