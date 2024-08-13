'use client'
import Image from 'next/image';

const BorderedImage = ({ src, alt, width, height }) => {
    return (
        <div style={{
            border: '5px solid inherit',
            borderRadius: '25px',
            overflow: 'hidden',
            width: `${width}px`,
            height: `${height}px`
        }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ display: 'block', objectFit: 'cover' }}
            />
        </div>
    );
};

export default BorderedImage;
