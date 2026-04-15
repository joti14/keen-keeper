import React from 'react';
import FriendsCard from './FriendsCard';
import Stats from '../HomePage/Stats';
import Link from 'next/link';

const Friends = async () => {
    const res = await fetch('http://localhost:3001/data.json');
    const friends = await res.json();
    return (
        <div>
            <Stats friend={friends}></Stats>
            <div className='bg-base-200 pb-20'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-2xl font-semibold mb-5'>Your Friends</h2>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            friends.map((friend, index) => (
                                <Link key={index} href={`/friends/${friend.id}`}>

                                    <FriendsCard friend={friend} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;