import React from 'react';
import { ImageContent } from '@/types';
import Image from 'next/image';

const ImageContentComponent: React.FC<{
    content: ImageContent;
}> = ({ content }) => {
    return (
        <Image
            src={content.src}
            alt={content.alt || 'Image'}
            width={300}
            height={200}
        />
    );
};

export default ImageContentComponent;
