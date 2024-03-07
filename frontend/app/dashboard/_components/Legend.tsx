import React from 'react';

const Legend = () => {
    const actions = {
        buy: 'bg-green-500',
        sell: 'bg-pink-500',
        hold: 'bg-blue-500',
    };

    const Dot = ({ color }: { color: string }) => (
        <span
            className={`inline-block h-3 w-3 rounded-full ${color}`}></span>
    );

    return (
        <div className="flex justify-center items-center space-x-5 mt-5">
            {Object.entries(actions).map(([action, color]) => (
                <div
                    key={action}
                    className="flex items-center space-x-2">
                    <Dot color={color} />
                    <span>
                        {action.charAt(0).toUpperCase() +
                            action.slice(1)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Legend;
