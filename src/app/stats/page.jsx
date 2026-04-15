'use client'
import { quickCheckInContext } from '@/context/quickCheckInContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const { quickCheckIn } = useContext(quickCheckInContext);

    const counts = quickCheckIn.reduce(
        (acc, entry) => {
            acc[entry.checkInType] = (acc[entry.checkInType] || 0) + 1;
            return acc;
        }, {}
    );

    const data = [
        { name: 'Call', value: counts.Call || 0, fill: '#244D3F' },
        { name: 'Text', value: counts.Text || 0, fill: '#4CAF50' },
        { name: 'Video', value: counts.Video || 0, fill: '#81C784' },
    ].filter(item => item.value > 0);

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="font-bold text-3xl mt-15 ">
                Friendship Analytics
            </h2>
            <div className="my-10 shadow p-10 rounded-md border border-slate-300">
                <h2 className='text-xl font-medium text-gray-700'>By Interaction Type</h2>
                {quickCheckIn.length === 0 ? (
                    <p className="text-gray-400 text-center text-lg py-20">
                        No check-in data yet!
                    </p>
                ) : (
                    <div>
                        <PieChart
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                maxHeight: '80vh',
                                margin: 'auto',
                                aspectRatio: 1,
                            }}
                            responsive
                        >
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend iconType="circle" />
                            <Tooltip
                                formatter={(value, name) => [`${value} check-ins`, name]}
                                contentStyle={{
                                    borderRadius: '12px',
                                    border: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                }}
                            />
                        </PieChart>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsPage;