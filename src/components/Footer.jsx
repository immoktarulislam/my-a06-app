import React from 'react';
import Image from 'next/image';
import footerImg from "@/assets/logo.png"
const footer = () => {
    return (
        <div className='flex justify-between m-8'>
            {/* left side */}
            <div className='flex gap-2'>
                <Image src={footerImg} alt='lastImag' />
                <h2>FITLOG</h2>
            </div>
            {/* right side */}
            <div>
                <h2>© 2026 FitLog — Workout Library. Train hard, log honest</h2>
            </div>
        </div>
    );
};

export default footer;