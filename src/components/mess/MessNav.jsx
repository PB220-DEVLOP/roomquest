import React, { useState } from 'react';
import profile from '../../../backend/database/1727599451698-space-venture.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import logo from '../../assets/common/logo.png';
import AddMenu from '../../pages/mess/AddMenu'; // Ensure this import path is correct
import MessOutlets from '../../pages/mess/MessOutlets';
import RegisterMess from '../../pages/mess/RegisterMess';

const links = [
    { href: '/multi-mess-manager-home', label: 'Home' },
    { href: '/register-mess', label: 'Register Your Mess' },
    { href: '/mess-outlets', label: "View All Outlets" },
    { href: '/add-menu', label: "Add Menu" },
];

const dropdownLinks = [
    { href: '/logout', label: 'Logout' }
];

const MessNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showAddMenu, setShowAddMenu] = useState(false); // State for showing AddMenu

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#361a25]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Menu button for mobile screens */}
                        <div className="flex items-center">
                            <div className="-ml-2 mr-2 flex md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isMenuOpen ? (
                                        <FaBarsStaggered />
                                    ) : (
                                        <GrClose />
                                    )}
                                </button>
                            </div>
                            <div className="flex-shrink-0 h-24 w-32">
                                <a href="/" className="text-white text-xl font-bold">
                                    <img src={logo} alt="logo" className="h-full w-full object-contain" />
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {links.map(({ href, label }) => (
                                    <div key={href} className="relative flex items-center">
                                        <a
                                            href={href}
                                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#4a2433] transition-colors"
                                            onClick={label === 'Add Menu' ? () => setShowAddMenu(true) : undefined}
                                        >
                                            {label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        onClick={toggleDropdown}
                                        className="bg-blue-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={profile}
                                            alt="Profile"
                                        />
                                    </button>
                                </div>
                                {/* Dropdown menu */}
                                {isDropdownOpen && (
                                    <div className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {dropdownLinks.map(({ href, label }) => (
                                            <a
                                                key={href}
                                                href={href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map(({ href, label }) => (
                            <div key={href} className="relative flex items-center">
                                <a
                                    href={href}
                                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#4a2433] transition-colors"
                                    onClick={label === 'Add Menu' ? () => setShowAddMenu(true) : undefined}
                                >
                                    {label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Conditionally render AddMenu */}
            {showAddMenu && <AddMenu />}
        </>
    );
};

export default MessNav;
