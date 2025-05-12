import type React from 'react';

const Parent = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1>This is the Parent</h1>
            <div>{children}</div>
        </>
    );
};

export default Parent;
