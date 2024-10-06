// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo or Brand Name */}
                <h1 className="text-3xl font-normal md:text-6xl">
                    <Link className="transition-all text-green-200 hover:opacity-70" href="#">
                        Waters India
                    </Link>
                </h1>

                {/* Navigation Links */}
                {/* <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/about">
            <a className="hover:text-white">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-white">Contact</a>
          </Link>
          <Link href="/privacy">
            <a className="hover:text-white">Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a className="hover:text-white">Terms of Service</a>
          </Link>
        </nav> */}

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Waters India. All rights reserved.
            </div>
        </footer>
    );
}
