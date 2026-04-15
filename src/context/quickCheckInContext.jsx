'use client'
import React, { createContext, useState } from 'react';

export const quickCheckInContext = createContext();

const QuickCheckInProvider = ({children}) => {
    const [quickCheckIn, setQuickCheckIn] = useState([]);

    const data = {
        quickCheckIn,
        setQuickCheckIn,
    };

    return (
        <quickCheckInContext.Provider value={data}>
            {children}
        </quickCheckInContext.Provider>
    );
};

export default QuickCheckInProvider;