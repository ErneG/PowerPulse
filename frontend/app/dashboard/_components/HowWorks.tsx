// import HeadingText from '@/components/heading-text';
// import Steps from '@/components/Steps';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import { GoGraph } from 'react-icons/go';
import { FaBatteryThreeQuarters } from 'react-icons/fa';
import { cn } from '@/lib';

export default function HowWorks() {
    const TitleDescripionContent: {
        title: string;
        description: string;
        icon: IconType;
    }[] = [
        {
            title: 'Deep Insights, Smarter Decisions',
            description:
                'Our algorithm starts by analyzing data from your energy system. This only includes the current state of the energy system. Over time, by learning the energy usage patterns, the system adapts and optimizes the buying and selling.',
            icon: FaMagnifyingGlassChart,
        },
        {
            title: 'Optimizing for Profit',
            description:
                'Using this analysis, the algorithm formulates a strategy to charge or discharge the battery at optimal times. This ensures you buy low and sell high, maximizing your financial returns without ever compromising battery health.',
            icon: GoGraph,
        },
        {
            title: 'Protecting Your Investment',
            description:
                "By managing charge levels to prevent depletion below 15% and overcharging above 95%, we extend your battery's lifecycle from an average of 3,000 cycles to about 8,000 cycles, safeguarding your long-term investment.",
            icon: FaBatteryThreeQuarters,
        },
    ];

    const TitleDescription = ({
        title,
        description,
        icon: Icon,
    }: {
        title: string;
        description: string;
        icon: IconType;
    }) => {
        return (
            <div className="grid gap-1">
                <Icon className=" text-primary w-20 h-20" />
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
        );
    };

    type BigTitleDescripPhotoContainerContentType = {
        sectionName?: string;
        title: string;
        description: string;
        photo: string;
        position: 'left' | 'right';
    };

    const BigTitleDescripPhotoContainerContent: BigTitleDescripPhotoContainerContentType[] =
        [
            {
                sectionName: '',
                title: 'Electricity Arbitrage',
                description:
                    "Unlock the power of energy arbitrage with our smart, efficient solution designed for homeowners like you. Our technology optimizes your home's energy usage and sales, ensuring you get the most out of your investment.",
                photo: '/garage-batteries-1.webp',
                position: 'right',
            },
            {
                sectionName: 'Smart integration',
                title: 'The PowerPulse Dock:',
                description:
                    "This innovative device connects directly to your homes inverter, serving as the crucial link between your battery pack and the electricity grid. It doesn't just passively monitor, it actively manages your energy by sending commands based on real-time data.",
                photo: '/dock.webp',
                position: 'left',
            },
            {
                sectionName:
                    'Real-Time Data and Predictive Analytics',
                title: 'Stay Ahead with Advanced Forecasting.',
                description:
                    'Our backend server plays a pivotal role by fetching upcoming electricity prices and continuously monitoring the state of your battery system—including charge level, charging speed, and overall health of the batteries and inverter. This data is the backbone of our strategic operation.',
                photo: '/backend.webp',
                position: 'right',
            },
            {
                sectionName: 'Seamless Solar Integration',
                title: 'Enhance with Solar Power',
                description:
                    'For homes equipped with solar panels, our system integrates solar data and local weather conditions to further optimize energy management. Whether it’s sunny or cloudy, your energy storage works efficiently, maximizing the use of renewable energy and increasing your savings.',
                photo: '/solar-2.webp',
                position: 'right',
            },
        ];
    const BigTitleDescripPhotoContainer = ({
        sectionName,
        title,
        description,
        photo,
        position,
    }: BigTitleDescripPhotoContainerContentType) => {
        if (position === 'left') {
            return (
                <div className="grid items-center gap-6 lg:grid-cols-[460px_1fr] justify-between lg:gap-12 xl:grid-cols-[500px_1fr] ">
                    <Image
                        alt="Image"
                        className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full aspect-[4/3]"
                        height="310"
                        src={photo}
                        width="550"
                    />
                    <div
                        className={cn(
                            'space-y-2',
                            position === 'left' &&
                                'justify-self-end',
                        )}>
                        {sectionName && (
                            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl">
                                {sectionName}
                            </h1>
                        )}
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
                            {description}
                        </p>
                    </div>
                </div>
            );
        }
        return (
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_460px] lg:gap-12 xl:grid-cols-[1fr_500px] justify-between">
                <div className="space-y-2">
                    <h1 className="text-xl font-bold tracking-tighter sm:text-2xl">
                        {sectionName}
                    </h1>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {title}
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <Image
                    alt="Image"
                    className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full aspect-[4/3]"
                    height="310"
                    src={photo}
                    width="550"
                />
            </div>
        );
    };

    return (
        <div>
            <div className="w-full">
                <section className="w-full gap-20 flex flex-col">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col gap-20">
                            {BigTitleDescripPhotoContainerContent.slice(
                                0,
                                3,
                            ).map((content, index) => (
                                <BigTitleDescripPhotoContainer
                                    key={index}
                                    sectionName={
                                        content.sectionName
                                    }
                                    title={content.title}
                                    description={
                                        content.description
                                    }
                                    photo={content.photo}
                                    position={content.position}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full py-8 md:py-12 lg:py-16">
                    <div className="container px-4 md:px-6 py-20">
                        <h1 className="text-5xl text-white align-middle text-center pb-10">
                            The deep dive:
                        </h1>
                        <div className="grid gap-10 lg:grid-cols-3">
                            {TitleDescripionContent.map(
                                (content, index) => (
                                    <TitleDescription
                                        key={index}
                                        title={content.title}
                                        description={
                                            content.description
                                        }
                                        icon={content.icon}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </section>

                <section className="w-full gap-20 flex flex-col">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col gap-20">
                            <BigTitleDescripPhotoContainer
                                key={3}
                                sectionName={
                                    BigTitleDescripPhotoContainerContent[3]
                                        .sectionName
                                }
                                title={
                                    BigTitleDescripPhotoContainerContent[3]
                                        .title
                                }
                                description={
                                    BigTitleDescripPhotoContainerContent[3]
                                        .description
                                }
                                photo={
                                    BigTitleDescripPhotoContainerContent[3]
                                        .photo
                                }
                                position={
                                    BigTitleDescripPhotoContainerContent[3]
                                        .position
                                }
                            />
                            ),
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="https://github.com/SolidDeath">
                                Check out my GitHub profile
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="/dashboard">
                                Check out the demo dashboard
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
