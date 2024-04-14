import Image from 'next/image';
import { heroHeader } from '@/config';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function HeroHeader() {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight - 50,
            left: 0,
            behavior: 'smooth',
        });
    };

    // Get the height of the navbar
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

    const sectionHeight = `calc(100vh - ${navbarHeight}px)`;

    return (
        <section
            className="container flex flex-col pt-4 text-center items-center  justify-between lg:gap-8 lg:py-20  h-[calc(100vh)]"
            style={{ height: sectionHeight }}>
            <div className="flex flex-col items-center  h-[60vh] gap-6">
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
                <div className="flex">
                    <Image
                        src={heroHeader.image}
                        width={600}
                        height={600}
                        alt="Header image"
                        className="rounded-xl"
                    />
                </div>
            </div>
            <div className="animate-bounce">
                <FaAngleDoubleDown
                    className="text-6xl"
                    onClick={handleScroll}
                />
            </div>
        </section>
    );
}
