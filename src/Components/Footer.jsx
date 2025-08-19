import React from "react";
import logo from "../assets/Logo.png";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 text-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Top Section */}
                <div className="grid gap-8 md:grid-cols-5">
                    {/* Logo + About */}
                    <div className="space-y-4 col-span-2">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="logo" className="w-16 h-16" />
                            <h1 className="text-xl font-bold leading-tight">
                                Nexgen Educare Academy
                            </h1>
                        </div>

                        <p className="text-xl text-black">
                            We create innovative solutions that blend technology and
                            creativity to help businesses succeed in the digital age.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold">Quick Links</h2>
                        <ul className="mt-3 space-y-2 text-black text-xl">
                            <li><a href="/" className="hover:text-red-500">Home</a></li>
                            <li><a href="/courses" className="hover:text-red-500">Courses</a></li>
                            <li><a href="/about" className="hover:text-red-500">About</a></li>
                            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h2 className="text-xl font-semibold">Support</h2>
                        <ul className="mt-3 space-y-2 text-xl text-black">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <ul className="mt-3 space-y-2 text-sm text-black">
                            <li>
                                <span className="text-xl font-medium">Email: </span>
                                <a 
                                    href="mailto:nexgeneducareacademy@gmail.com"
                                    className="text-red-600 hover:underline"
                                >
                                    nexgeneducareacademy@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="text-xl font-medium">Phone: </span>
                                <a 
                                    href="tel:+919056729370" 
                                    className="text-red-600 hover:underline"
                                >
                                    +91 9056729370
                                </a>
                            </li>
                            <li className="text-red-600">
                                <span className="text-xl text-black  font-medium">Location: </span>  
                                SCO 4-5, Second Floor, New Sunny Enclave,
                                Sector-125, Mohali, Punjab - 140301
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-red-700 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 m-auto flex-col sm:flex-row justify-between items-center text-sm text-black gap-3">
                    <p>© {new Date().getFullYear()} Nexgen Educare Academy. All rights reserved.</p>
                    <p>Powered by <span className="text-xl text-red-700">Greekology</span></p>
                </div>
            </div>
        </footer>
    );
}
