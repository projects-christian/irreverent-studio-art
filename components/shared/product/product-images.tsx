'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);

    const imagesWithId = images.map((src, i) => ({
        id: `${src}-${i}`, // 👈 id único
        src
    }));

    return (
        <div className='space-y-4'>
            <Image
                src={imagesWithId[current].src}
                alt='product image'
                width={1000}
                height={1000}
                priority
                className='min-h-[300px] object-cover object-center'
            />
            <div className='flex'>
                {imagesWithId.map((image, index) => (
                <div
                    key={image.id}
                    onClick={() => setCurrent(index)}
                    className={cn(
                    'border mr-2 cursor-pointer hover:border-orange-600',
                    current === index && 'border-orange-500'
                    )}
                >
                    <Image src={image.src}  alt='image' width={100} height={100} />
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default ProductImages;