import React from 'react';
import '../assets/font-fam.css';

function Footer() {
    return (
        <footer className="w-full bg-black text-white text-center p-4 mt-8 bottom-0 flex flex-row justify-center z-49" >
            <p className='font-ws'>&copy; {new Date().getFullYear()} Pictic. All rights reserved.</p>
        </footer>
    );
};

export default Footer;