'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { navLinks } from '@/lib/links';
import { settings } from '@/config/settings';
import { Button } from '../ui/button';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const handleClick = async () => {
        setNavbar(false);
    };

    return (
        <header className="select-none">
            <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl ">
                <div className="flex items-center justify-between py-3 md:block md:py-5">
                    <Link href="/" onClick={handleClick}>
                        <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
                            PowerPulse
                        </h1>
                    </Link>
                    <div className="flex gap-1 md:hidden">
                        <ModeToggle />
                        <button
                            className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
                            aria-label="Hamburger Menu"
                            onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 "
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div
                    className={`fixed top-0 right-0  h-full w-48 bg-background transform transition-transform duration-300 ease-in-out z-10 justify-center rounded-md border md:hidden  ${
                        navbar
                            ? 'translate-x-0'
                            : 'translate-x-full'
                    }`}
                    onClick={handleClick}
                    style={{ maxWidth: '20rem' }}>
                    <button
                        className="rounded-md fixed top-2 right-4 p-2 text-primary outline-none focus:border focus:border-primary"
                        aria-label="Hamburger Menu"
                        onClick={() => setNavbar(!navbar)}>
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 "
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                    <ul className="flex flex-col items-center space-y-4 text-primary opacity-60 mt-12">
                        {navLinks.map((link, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                className="w-40">
                                <Link
                                    href={link.path}
                                    onClick={handleClick}
                                    className="w-full">
                                    {link.route}
                                </Link>
                            </Button>
                        ))}
                    </ul>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:block">
                    <ul className="flex space-x-6 items-center justify-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="text-primary hover:text-secondary">
                                        {link.route}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {settings.themeToggleEnabled && (
                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>
                )}
            </nav>
        </header>
    );
}
