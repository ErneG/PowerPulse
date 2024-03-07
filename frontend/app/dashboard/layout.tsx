import React, { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-stretch w-full h-full flex-grow">
            {children}
        </div>
    );
}

export default layout;
