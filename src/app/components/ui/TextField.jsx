import React from 'react'

export default function InputField({ classNameOutter, className, label, type, id, name, pattern, placeholder, accept, value, disabled, onChange, onBlur, rows }) {
    const InputElement = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div className={`flex flex-col gap-1 w-full ${classNameOutter}`}>
            <label className='text-sm font-medium leading-6 text-white capitalize'
                htmlFor={id}
            >
                {label}
            </label>
            <div className='relative flex flex-col'>
                <InputElement
                    className={`${className} w-full text-white border border-white/30 bg-transparent text-sm placeholder:text-white/60 rounded p-3 outline-0 ring-0 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-white hover:file:bg-white/20 file:cursor-pointer`}
                    type={type !== 'textarea' ? type : undefined}
                    id={id}
                    name={name}
                    pattern={pattern}
                    placeholder={placeholder}
                    accept={accept}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    rows={type === 'textarea' ? rows : undefined}
                />
            </div>
        </div>
    )
}
