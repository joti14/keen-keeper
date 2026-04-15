import QuickCheckInProvider from '@/context/quickCheckInContext';
import React from 'react';

const Providers = ({children}) => {
    return (
        <QuickCheckInProvider>
            {children}
        </QuickCheckInProvider>
    );
};

export default Providers;