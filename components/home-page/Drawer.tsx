"use client"
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
export default function Navigation() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="flex items-center">
            {/* Toggle button for mobile */}
            <button
                className="md:hidden p-2 focus:outline-none text-white"
                onClick={toggleDrawer}
            >
                <MenuIcon size={24} />
            </button>

            {/* Navigation links for desktop */}
            <div className="hidden gap-4 md:flex text-black">
                <Link className="transition-all hover:text-green-400" href="/blogs">
                    Success Stories
                </Link>
                <Link className="transition-all hover:text-green-400" href="/products">
                    Products
                </Link>
                <Link
                    className="transition-all hover:text-green-400"
                    href="mailto:watersindia2019@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </Link>
            </div>

            {/* Drawer for mobile */}
            <div className={`fixed inset-0 z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="fixed inset-0 bg-opacity-75" onClick={toggleDrawer}></div>
                <div className="fixed top-0 left-0 h-full w-3/4 p-6 text-black">
                    <nav className="mt-8 space-y-4">
                        <Link className="block hover:text-green-400 border-gray-700 rounded-lg hover:bg-gray-950 transition" href="/blogs" onClick={toggleDrawer}>
                            Success Stories
                        </Link>
                        <Link className="block hover:text-green-400 border-gray-700 rounded-lg hover:bg-gray-950 transition" href="/products" onClick={toggleDrawer}>
                            Products
                        </Link>
                        <Link
                            className="block hover:text-green-400 border-gray-700 rounded-lg hover:bg-gray-950 transition"
                            href="tel:+919740890400"
                        >
                            Call
                        </Link>
                        <Link
                            className="block hover:text-green-400 border-gray-700 rounded-lg hover:bg-gray-950 transition"
                            href="mailto:watersindia2019@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleDrawer}
                        >
                            Email
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
