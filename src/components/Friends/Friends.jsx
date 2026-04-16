import React from 'react';
import FriendsCard from './FriendsCard';
import Stats from '../HomePage/Stats';
import Link from 'next/link';

const Friends = async () => {
    const res = await fetch('https://keen-keeper-orcin.vercel.app/data.json', {
        cache: "no-store"
    });
    const friends = await res.json();
    return (
        <div>
            <Stats friend={friends}></Stats>
            <div className='bg-base-200 pb-10 sm:pb-14 md:pb-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                    <h2 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 md:mb-5'>Your Friends</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>
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