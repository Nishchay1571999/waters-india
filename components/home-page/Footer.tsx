// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo.jpeg'; // Add your logo image file here

export default function Footer() {
    return (
        <footer className="bg-black text-gray-200 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Brand Name */}
                <div className="flex items-center text-center space-x-3 justify-center">
                    <Image src={logo} alt="Waters India Logo" width={100} height={100} />
                    <h1 className="text-3xl align-bottom font-normal md:text-6xl">
                        <Link className="transition-all text-green-200 hover:opacity-70" href="#">
                            Waters India
                        </Link>
                    </h1>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/+919740890400?text=Hello%20Waters%20India%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>

            {/* Address and Copyright Section */}
            <div className="text-center mt-4 text-gray-500 text-sm" id='Address'>
                <p>S8,Ground Floor,7th Main Road</p>
                <p>Muneshwar Nagar, Hospalya</p>
                <p>Bangalore, Karnataka</p>

                <p>&copy; {new Date().getFullYear()} Waters India. All rights reserved.</p>
            </div>
        </footer>
    );
}
