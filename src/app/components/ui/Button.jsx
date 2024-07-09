import Link from 'next/link';
import React from 'react';

export default function Button({ path, children, variant = 'primary', onClick, className }) {
    let buttonClasses = `${className} flex items-center justify-center gap-2 px-5 py-2 rounded-full shadow-sm text-base font-semibold capitalize font-normal leading-6 transition-all ease-linear duration-200 outline-0 ring-0`;

    if (variant === 'primary') {
        buttonClasses += ' text-gray-950 bg-white/85 hover:bg-white';
    } else if (variant === 'blue') {
        buttonClasses += ' text-blue-100 bg-white hover:text-white hover:bg-blue-100';
    } else if (variant === 'outline') {
        buttonClasses += ' text-white border-2 border-white hover:bg-white/20';
    }

    if (path) {
        return (
            <Link
                href={path}
                passHref
                role='button'
                className={buttonClasses}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <>
                <button
                    type='button'
                    role='button'
                    className={buttonClasses}
                    onClick={onClick}
                >
                    {children}
                </button>
            </>
        )
    }
}