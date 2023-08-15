import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-emerald-900 py-2 px-4 flex justify-between items-center shadow">
            <a href="#" className="text-white text-sm flex items-center gap-2">
                <Image src="/logos/logo.png" alt="Logo" width={33} height={33} />
                <p>CODEPLAY</p>
            </a>
            <ul className="flex space-x-6 text-sm">

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/hire">
                    Hire Developers
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Internship Opportunities
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    About Us
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Portfolio
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Blog / Insights
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Partnerships
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Resources
                </Link>

                <Link className="block px-4 py-2 text-white hover:text-yellow-500" href="/internship">
                    Contact Us
                </Link>
            </ul>
            <a
                href="#"
                className="bg-yellow-500 text-black font-bold text-base px-4 py-1 rounded-full hover:bg-blue-400"
            >
                Get a Quote
            </a>
        </div>
    );
};

export default Navigation;
