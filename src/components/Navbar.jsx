import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';
import "../App.css";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handelToggle = () => {
        setIsOpen(!isOpen);
    }

    const handelCloseMenu = () => {
        setIsOpen(false);
    }



    const navLinks = (
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-x-2 md:space-y-0 p-4 md:p-0">
            <li className="navitem">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} 
                onClick={handelCloseMenu} 
                className="text-white"    >Home</Link>
            </li>
            <li className="navitem">
                <Link to="services" spy={true} smooth={true} offset={-10} duration={500}   onClick={handelCloseMenu} className="text-white">Services</Link>
            </li>
            <li className="navitem">
                <Link to="about"  spy={true} smooth={true} offset={-10} duration={500} onClick={handelCloseMenu} className="text-white">About us</Link>
            </li>
            <li className="navitem">
                <Link to="pricing" spy={true} smooth={true} offset={-10} duration={500} onClick={handelCloseMenu} className="text-white">Pricing</Link>
            </li>
            <li className="navitem">
                <Link to="testimonial" spy={true} smooth={true} offset={-250} duration={500} onClick={handelCloseMenu}className="text-white">Testimonial</Link>
            </li>
        </ul>
    )

    return (
        <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
            <div className="mx-auto flex justify-between items-center h-full container">
                <div >
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <img src="logo.svg" alt="logo" /></Link>
                </div>
                <div className="hidden md:flex flex-grow justify-center">
                    <nav>
                        {navLinks}
                    </nav>

                   
                </div>
                <div className="hidden md:block">
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="text-white nhidde  bg-primary hover:bg-primary/90 px-4 py-2 rounded" >
                        Contact us
                    </Link>
                </div>
                <div className=" md:hidden block ">
                    <button
                        onClick={handelToggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white rounded" : " "} `}>

                        <HiOutlineMenuAlt3 className="size-6" />
                    </button>
                </div>
            </div>

            {/* mobile nav items */}


            {
                isOpen && (
                    <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
                        <ul className="flex flex-col p-4 space-y-3">
                            {navLinks.props.children}
                            <li className="py-2">
                                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}
                                    className='text-white nhidde  bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handelCloseMenu();
                                    }}>

                                    contact us
                                </Link>
                            </li>
                        </ul>

                    </nav>
                )
            }


        </header>
    );
};
export default Navbar;