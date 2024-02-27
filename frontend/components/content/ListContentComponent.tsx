import React from 'react';
import { ListContent } from '@/types';

const ListContentComponent: React.FC<{
    content: ListContent;
}> = ({ content }) => {
    return (
        <ul>
            {content.items.map((item, index) => (
                <li key={index}>{item.content}</li>
            ))}
        </ul>
    );
};

export default ListContentComponent;
