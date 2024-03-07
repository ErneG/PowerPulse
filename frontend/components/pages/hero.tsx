import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { heroHeader } from '@/config';
import { FaAngleDoubleDown } from 'react-icons/fa';

export default function HeroHeader() {
    const handleScroll = () => {
        window.scrollBy(0, window.innerHeight);
    };

    return (
        <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
            <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold lg:text-6xl">
                        {heroHeader.header}
                    </h1>
                    <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
                        {heroHeader.subheader}
                    </h2>
                </div>
            </div>
            {heroHeader.image !== '' ? (
                <div className="flex flex-1 justify-center lg:justify-end">
                    <Image
                        src={heroHeader.image}
                        width={500}
                        height={500}
                        alt="Header image"
                    />
                </div>
            ) : null}
            <div className="animate-bounce">
                <FaAngleDoubleDown
                    className="text-6xl"
                    onClick={handleScroll}
                />
            </div>
        </section>
    );
}
